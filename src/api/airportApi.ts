import axios from 'axios';
export interface City {
  _id: string;
  cityName: string;
}

export interface Airport {
  _id: string;
  iataCode: string;
  name: string;
  city: City;
  country: string;
  createdAt: string;
  updatedAt: string;
}

export const airportApi = {
  getAll: (): Promise<Airport[]> =>
    axios.get('http://127.0.0.1:3000/v1/api/airport')
      .then(response => response.data.data),
};
