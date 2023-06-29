import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const currentDate = new Date();
  const plus1hourDate = new Date(currentDate.getTime() + (60 * 60 * 1000));
  // Brands
  await prisma.brand.createMany({
    data: [
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
        name: "Abarth"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png",
        name: "AC"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/acura.png",
        name: "Acura"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png",
        name: "Aixam"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png",
        name: "Alfa Romeo"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png",
        name: "Ariel"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png",
        name: "Arrinera"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png",
        name: "Aston Martin"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png",
        name: "Audi"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png",
        name: "Bentley"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png",
        name: "BMW"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png",
        name: "Bugatti"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/buick.png",
        name: "Buick"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png",
        name: "Cadillac"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png",
        name: "Caterham"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png",
        name: "Chevrolet"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png",
        name: "Chrysler"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png",
        name: "Citroën"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png",
        name: "Corvette"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png",
        name: "Dacia"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/daf.png",
        name: "Daf"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png",
        name: "Daihatsu"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png",
        name: "Dodge"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png",
        name: "DR Motor"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png",
        name: "Elfin"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png",
        name: "Ferrari"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png",
        name: "Fiat"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png",
        name: "Ford"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png",
        name: "Gaz"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/geely.png",
        name: "Geely"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png",
        name: "Gillet"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png",
        name: "Ginetta"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gm.png",
        name: "General Motors"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png",
        name: "GMC"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png",
        name: "Great Wall"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png",
        name: "Gumpert"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png",
        name: "Hennessey logo"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/10/holden.png",
        name: "Holden"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png",
        name: "Honda"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png",
        name: "Hummer"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png",
        name: "Hyundai"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/inf.png",
        name: "Infiniti"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png",
        name: "Isuzu"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png",
        name: "Jaguar"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png",
        name: "Jeep"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/joss.png",
        name: "Joss"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/kia.png",
        name: "Kia"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png",
        name: "Koenigsegg"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lada.png",
        name: "Lada"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png",
        name: "Lamborghini"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png",
        name: "Lancia"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png",
        name: "Land Rover"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png",
        name: "Lexus"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/linc.png",
        name: "Lincoln"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png",
        name: "Lotus"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png",
        name: "Luxgen"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png",
        name: "Mahindra"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png",
        name: "Maruti Suzuki"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mase.png",
        name: "Maserati"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png",
        name: "Maybach"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png",
        name: "Mazda"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png",
        name: "Mclaren"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png",
        name: "Mercedes"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mg.png",
        name: "MG"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mini.png",
        name: "Mini"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png",
        name: "Mitsubishi"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png",
        name: "Morgan Motor"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png",
        name: "Mustang logo"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png",
        name: "Nissan"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/noble.png",
        name: "Noble"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
        name: "Opel"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png",
        name: "Pagani"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png",
        name: "Panoz"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png",
        name: "Perodua"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/peug.png",
        name: "Peugeot"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png",
        name: "Piaggio"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png",
        name: "Pininfarina"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png",
        name: "Porsche"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/proton.png",
        name: "Proton"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/renault.png",
        name: "Renault"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/reva.png",
        name: "Reva"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png",
        name: "Rimac"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png",
        name: "Rolls Royce"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png",
        name: "Ruf logo"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/saab.png",
        name: "Saab"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/scania.png",
        name: "Scania"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/scion.png",
        name: "Scion"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/seat.png",
        name: "Seat"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png",
        name: "Shelby"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png",
        name: "Skoda"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/smart.png",
        name: "Smart"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png",
        name: "Spyker"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png",
        name: "Ssangyong"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png",
        name: "SSC"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png",
        name: "Subaru"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png",
        name: "Suzuki"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tata.png",
        name: "Tata"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png",
        name: "Tatra"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png",
        name: "Tesla"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png",
        name: "Toyota"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg",
        name: "Tramontana"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/troller.png",
        name: "Troller"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png",
        name: "TVR"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png",
        name: "UAZ"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png",
        name: "Vandenbrink"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png",
        name: "Vauxhall"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png",
        name: "Vector Motors"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png",
        name: "Venturi"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png",
        name: "Volkswagen"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png",
        name: "Volvo"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png",
        name: "Wiesmann"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png",
        name: "Zagato"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png",
        name: "Zaz"
      },
      {
        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zil.png",
        name: "Zil"
      }
    ],
  });


  // Companies
  await prisma.company.createMany({
    data: [
      {
        name: "Company 1",
        rnc: 123456789,
        status: "ACTIVE",
        address: "Dirección 1",
      },
      {
        name: "Company 2",
        rnc: 563456789,
        status: "ACTIVE",
        address: "Dirección 2",
      },
    ]
  });

  // Passengers
  const passenger1 = await prisma.passenger.create({
    data: {
      firstName: "Pasajero 1",
      lastName: "Apellido 1",
      email: "pasajero1@example.com",
      phone: "1234567890",
      document: "123456789",
      documentType: "C",
    },
  });

  const passenger2 = await prisma.passenger.create({
    data: {
      firstName: "Pasajero 2",
      lastName: "Apellido 2",
      email: "pasajero2@example.com",
      phone: "9876543210",
      document: "987654321",
      documentType: "P",
    },
  });

  // Drivers
  await prisma.driver.createMany({
    data: [{
      firstName: "Conductor 1",
      lastName: "Apellido 1",
      email: "conductor1@example.com",
      phone: "1234567890",
      companyId: 1,
      document: "123456789",
      documentType: "C",
      status: "ACTIVE",
      currentLat: 18.460849695987598, // La USAD de la Máximo Gómez 
      currentLon: -69.920673029112,
      vehicleId: 1,
    },
    {
      firstName: "Conductor 2",
      lastName: "Apellido 2",
      email: "conductor2@example.com",
      phone: "1234568580",
      companyId: 1,
      document: "123543789",
      documentType: "C",
      status: "ACTIVE",
      currentLat: 18.482678066040734, // Agora Mall
      currentLon: -69.93907456345791,
      vehicleId: 2,
    },
    {
      firstName: "Conductor 3",
      lastName: "Apellido 3",
      email: "conductor3@example.com",
      phone: "1849320990",
      companyId: 1,
      document: "0014567894",
      documentType: "C",
      status: "ACTIVE",
      currentLat: 18.461638480046954, // (Plaza Lama de la 27 con Churchill)
      currentLon: -69.93607038842656,
      vehicleId: 3,
    },
    {
      firstName: "Conductor 4",
      lastName: "Apellido 4",
      email: "conductor4@example.com",
      phone: "18298183322",
      companyId: 1,
      document: "22400198837",
      documentType: "C",
      status: "INACTIVE",
      currentLat: 0,
      currentLon: 0,
      vehicleId: 4,
    },
    ]
  })


  // Add car
  await prisma.vehicle.createMany({
    data: [
      {
        driverId: 1,
        color: "Rojo",
        brandId: 10,
        vin: "VIN123456781",
        year: 2021,
      },
      {
        driverId: 2,
        color: "Azul",
        brandId: 10,
        vin: "VIN10006782",
        year: 2017,
      },
      {
        driverId: 3,
        color: "Blanco",
        brandId: 10,
        vin: "VIN123456783",
        year: 2019,
      },
      {
        driverId: 4,
        color: "Negro",
        brandId: 15,
        vin: "VIN10006784",
        year: 2023,
      },
    ],
  });


  // Crear viajes
  const trip1 = await prisma.trip.create({
    data: {
      driverId: 1,
      passengerId: passenger1.id,
      status: "COMPLETED",
      startedAt: currentDate,
      endedAt: plus1hourDate,
      fromLatitude: 18.45243530963858,
      fromLongitude: -69.96983455812554,
      toLatitude: 18.46358726813364,
      toLongitude: -69.96861002974642,
    },
  });

  const trip2 = await prisma.trip.create({
    data: {
      driverId: 1,
      passengerId: passenger1.id,
      status: "CANCELLED",
      cancelledAt: currentDate,
      fromLatitude: 18.45243530963858,
      fromLongitude: -69.96983455812554,
      toLatitude: 18.46358726813364,
      toLongitude: -69.96861002974642,
    },
  });

  const trip3 = await prisma.trip.create({
    data: {
      driverId: 1,
      passengerId: passenger1.id,
      status: "REQUESTED",
      fromLatitude: 123.45,
      fromLongitude: 67.89,
      toLatitude: 10.11,
      toLongitude: 12.13,
    },
  });

  const trip4 = await prisma.trip.create({
    data: {
      driverId: 2,
      passengerId: passenger2.id,
      status: "IN_PROGRESS",
      startedAt: currentDate,
      fromLatitude: 45.67,
      fromLongitude: 89.01,
      toLatitude: 20.21,
      toLongitude: 22.23,
    },
  });

  // Invices
  await prisma.invoice.create({
    data: {
      tripId: trip1.id,
      amount: 100.0,
      taxes: 18.0,
      status: "PAID",
      paymentMethod: "CASH",
    },
  });

  await prisma.invoice.create({
    data: {
      tripId: trip3.id,
      amount: 200.0,
      taxes: 18.0,
      status: "PENDING",
      paymentMethod: "CASH",
    },
  });

  await prisma.invoice.create({
    data: {
      tripId: trip4.id,
      amount: 200.0,
      taxes: 18.0,
      status: "PENDING",
      paymentMethod: "CARD",
    },
  });

  await prisma.invoice.create({
    data: {
      tripId: trip2.id,
      amount: 200.0,
      taxes: 18.0,
      status: "CANCELLED",
      paymentMethod: "CARD",
    },
  });

  console.log("Seeds created!");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
