export interface Listing {
  longitude: number;
  latitude: number;
  title: string;
  location: string;
  surface: string;
  currency: string;
  price: number;
  url: string;
  barrio?: string;
}