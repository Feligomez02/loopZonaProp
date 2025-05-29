import { barriosCba } from "./barrios";   
export function assignCoordinates(listings: any[]) {
  return listings.map((listing) => {
    const barrio = barriosCba.find((b) =>
      listing.location.toLowerCase().includes(b.name.toLowerCase())
    );

    if (barrio) {
      return {
        ...listing,
        latitude: barrio.lat,
        longitude: barrio.lon,
      };
    }

    // Si no encuentra barrio, le asigno coordenadas de Córdoba centro (opcional)
    return {
      ...listing,
      latitude: -31.4201,
      longitude: -64.1888,
    };
  });
}
