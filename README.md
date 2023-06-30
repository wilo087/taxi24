## Taxi24 - Backend Challenge

### Requirements
```sh
$ docker -v
# Docker version 20.10.24, build 297e128
```

### Getting started
Setup the environment
```sh
$ cp .env.example .env

# Depebding on your OS you may need to give execution permission to the script
$ chmod +x ./docker/service/setup.sh
```

Run the services
```sh
$ docker compose up

# if you want to run in background
$ docker compose up -d
```
You endpoint should be available at [`http://localhost:3000` 🚀](http://localhost:3000)

## Running tests
```sh
$ node -v
# v18.16.0

$ yarn install && yarn test
```

## API Documentation
You can test the API using the [Postman collection](https://www.postman.com/qrioso/workspace/taxi24-qik-challenge/collection/1157554-86c84e4a-b64e-4fbc-b218-cd2e2ebd88bf)

### /drivers - GET
```sh
# get all drivers 
$ curl --location 'http://localhost:3000/drivers'

# get all drivers by status /drivers?status=(PENDING, ACTIVE, INACTIVE, ONLINE, BUSY)
$ curl --location 'http://localhost:3000/drivers?status=ACTIVE'

# get driver by id /drivers/:id
$ curl --location 'http://localhost:3000/drivers/1'

# get all drivers available in a radius of 3km from a given location
# /drivers/nearby?latitude=(longitude)&longitude=(latitude)&distance=(distance in km)
$ curl --location 'http://localhost:3000/drivers/nearby?latitude=18.480023716974017&longitude=-69.89138258140852&distance=3'

# Conductor 1: 18.460849695987598, -69.920673029112 (La USAD de la Máximo Gómez)
# Conductor 2: 18.482678066040734, -69.93907456345791 (Agora Mall)
# Conductor 3: 18.461638480046954, -69.93607038842656 (Plaza Lama Winston Churchill)
# Conductor 4: 0.0, 0.0 (INVACTIVE)

# Note: 
# For testing purposes the current location of the driver was put in the DB, this should be a service socket where all drivers are broadcast with the current location, status and other relevant information
```

### /drivers - POST
```sh
# create a new driver 
## this endpoint has not been finished and relation with vehicle is not being created yet - WIP
$ curl --location 'http://localhost:3000/drivers' \
--header 'Content-Type: application/json' \
--data-raw '{
      "firstName": "Conductor 10",
      "lastName": "Apellido 10",
      "email": "conductor10@example.com",
      "phone": "1849320990",
      "companyId": 1,
      "document": "0011982845",
      "documentType": "C",
      "currentLat": 18.461638480046954, 
      "currentLon": -69.93607038842656,
      "vehicleId": 1
}'
```

### /trips - POST
```sh
# create new trip request
$ curl --location 'http://localhost:3000/trips/request' \
--header 'Content-Type: application/json' \
--data '{
    "driverId": 1,
    "passengerId": 2,
    "fromLatitude": 18.45256586581231,
    "fromLongitude": -69.96985064150694,
    "toLatitude": 18.463101265411417,
    "toLongitude": -69.96723786741612
}'

# Note:
# 1st. the passengerId should be taken from the session and not sent to anyone other than an administrator creating the travel request
# 2nd. It is pending to validate that both the passenger and the driver do not have an active trip (in the case of the driver it should allow it as long as it is in range and the trip is ending)
```

### /trips - PUT
```sh 
# update trip status=(REQUESTED, IN_PROGRESS, COMPLETED, CANCELLED)
# /trips/:id/:status
curl --location --request PUT 'http://localhost:3000/trips/2/COMPLETED'

# Note: 
# REQUESTED can be updated to CANCELLED, IN_PROGRESS but not to COMPLETED
# IN_PROGRESS can be updated to COMPLETED but not to REQUESTED or CANCELLED
# COMPLETED can not be updated
# CANCELLED can not be updated
```
