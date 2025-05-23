import React, { useState } from 'react';

type Flight = {
  id: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
};

const mockDates = [
  { day: 'Sun', date: 4, flights: 0 },
  { day: 'Mon', date: 5, price: 300 },
  { day: 'Tue', date: 6, price: 320 },
  { day: 'Wed', date: 7, flights: 0 },
  { day: 'Thu', date: 8, price: 360 },
  { day: 'Fri', date: 9, price: 380 },
  { day: 'Sat', date: 10, flights: 0 },
];

const mockFlights: Flight[] = [
  {
    id: '1',
    departureTime: '10:30 am',
    arrivalTime: '10:10 pm',
    duration: '6h 40m',
    price: 335,
  },
  {
    id: '2',
    departureTime: '9:35 am',
    arrivalTime: '9:35 pm',
    duration: '7h 0m',
    price: 344,
  },
  {
    id: '3',
    departureTime: '8:15 am',
    arrivalTime: '8:10 pm',
    duration: '6h 55m',
    price: 342,
  },
];

export default function FlightListScreen() {
  const [selectedDate, setSelectedDate] = useState(8);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button className="text-sm text-gray-500 mb-4">{'< Back'}</button>
      <h1 className="text-2xl font-semibold mb-2">Departing flights</h1>
      <p className="text-gray-600 mb-4">Hồ Chí Minh → Đà Nẵng</p>

      {/* Date selector */}
      <div className="flex overflow-x-auto gap-4 mb-6">
        {mockDates.map((d) => (
          <div
            key={d.date}
            onClick={() => d.flights !== 0 && setSelectedDate(d.date)}
            className={`cursor-pointer text-center px-4 py-2 rounded-lg min-w-[72px] ${
              selectedDate === d.date
                ? 'bg-blue-600 text-white'
                : d.flights === 0
                ? 'bg-red-100 text-red-500 line-through'
                : 'bg-gray-100'
            }`}
          >
            <div className="font-semibold">{d.day}</div>
            <div>{d.date}</div>
            {d.flights === 0 ? (
              <div className="text-xs">No flights</div>
            ) : (
              <div className="text-xs">from ${d.price}</div>
            )}
          </div>
        ))}
      </div>

      {/* Flight list */}
      <div className="space-y-4">
        {mockFlights.map((flight) => (
          <div
            key={flight.id}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
          >
            <div>
              <div className="font-bold text-lg">{flight.departureTime}</div>
              <div className="text-gray-500 text-sm">{flight.duration} · Bay thẳng</div>
              <div className="font-bold text-lg">{flight.arrivalTime}</div>
            </div>
            <div className="text-right">
              <div className="text-blue-600 font-bold text-xl">${flight.price}</div>
              <div className="text-sm text-gray-500">per person</div>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
