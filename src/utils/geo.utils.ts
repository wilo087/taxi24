export class Geo {
  static readonly EARTH_RADIUS_KM: number = 6371

  static latitudeDelta(radiusKm: number): number {
    return (radiusKm / this.EARTH_RADIUS_KM) * (180 / Math.PI)
  }

  static longitudeDelta(latitude: number, radiusKm: number): number {
    const latitudeRadian = (latitude * Math.PI) / 180
    return ((radiusKm / this.EARTH_RADIUS_KM) * (180 / Math.PI)) / Math.cos(latitudeRadian)
  }
}
