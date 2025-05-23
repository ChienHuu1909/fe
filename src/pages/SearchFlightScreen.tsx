import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { itineraryApi, Itinerary } from '../api/itineraryApi';
import { airportApi, Airport } from '../api/airportApi';

const SearchFlightScreen = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState<Itinerary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airportData = await airportApi.getAll();
        setAirports(airportData);
        const itineraryData = await itineraryApi.getAll();
        setResults(itineraryData);
      } catch (error) {
        console.error('Lỗi lấy dữ liệu:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await itineraryApi.getByAirports(from, to);
      setResults(data);
    } catch (error) {
      console.error('Không tìm thấy lịch trình phù hợp:', error);
    }
  };

  const airportOptions = airports.map((airport) => ({
    label: `[${airport.iataCode}] ${airport.name} - ${airport.city.cityName}`,
    value: airport.iataCode,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Điểm đi</Text>
      <RNPickerSelect
        onValueChange={setFrom}
        items={airportOptions}
        placeholder={{ label: 'Chọn sân bay xuất phát', value: '' }}
      />

      <Text style={styles.label}>Điểm đến</Text>
      <RNPickerSelect
        onValueChange={setTo}
        items={airportOptions}
        placeholder={{ label: 'Chọn sân bay đến', value: '' }}
      />

      <Button title="Tìm kiếm chuyến bay" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Text>Itinerary ID: {item._id}</Text>
            <Text>
              From: {item.departureAirportId.name}
            </Text>
            <Text>
              To: {item.arrivalAirportId.name}
            </Text>
            <Text>Thời gian: {item.duration} phút</Text>
            <Text>Khoảng cách: {item.distance} km</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchFlightScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginTop: 20, marginBottom: 8, fontWeight: 'bold' },
});
