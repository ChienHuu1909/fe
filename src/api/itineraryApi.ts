// src/api/itineraryApi.ts
import axios from 'axios';

export interface AirportBrief {
  _id: string;
  iataCode: string;
  name: string;
  city: {
    _id: string;
    cityName: string;
  };
  country: string;
}

export interface Itinerary {
  _id: string;
  departureAirportId: AirportBrief;
  arrivalAirportId: AirportBrief;
  duration: number;   // tính bằng giây hoặc phút tùy backend
  distance: number;   // km
  createdAt: string;
  updatedAt: string;
}
export const itineraryApi = {
   getAll: (): Promise<Itinerary[]> =>
    axios
      .get('https://127.0.0.1:3000/v1/api/itinerary')
      .then(response => response.data.data),
  getByAirports: (from: string, to: string): Promise<Itinerary[]> =>
    axios
      .get('https://127.0.0.1:3000/v1/api/itinerary/getByAirports', {
        params: { from, to },
      })
      .then(response => response.data.data),
};