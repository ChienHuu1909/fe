// filepath: d:\KLTN\App\fe\src\pages\HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Banner from '../components/Banner';
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  Home: undefined;
  SearchFlight: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#006699" />
      
      {/* Header */}
      <View className="bg-secondary py-4 px-5 shadow-md">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-xl font-bold">Bamboo Airways</Text>
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <Banner />

      {/* Main content */}
      <View className="flex-1 justify-center items-center p-5">
        <Text className="text-3xl font-bold text-gray-800 mb-2">✈️ Chào mừng!</Text>
        <Text className="text-base text-gray-600 mb-8">Khám phá những chuyến bay tuyệt vời</Text>

        <TouchableOpacity 
          className="flex-row items-center bg-white px-6 py-4 rounded-xl shadow-lg"
          onPress={() => navigation.navigate('SearchFlight')}
        >
          <Ionicons name="search" size={20} color="#006699" />
          <Text className="ml-3 text-primary font-medium text-base">
            Bạn muốn đi đâu?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row h-16 border-t border-gray-200 bg-white">
        <TouchableOpacity 
          className="flex-1 justify-center items-center"
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={24} color="#006699" />
          <Text className="text-xs text-primary mt-1">Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-1 justify-center items-center"
          onPress={() => navigation.navigate('SearchFlight')}
        >
          <Ionicons name="search" size={24} color="#666666" />
          <Text className="text-xs text-gray-600 mt-1">Tìm kiếm</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-1 justify-center items-center"
          onPress={() => alert('Profile clicked')}
        >
          <Ionicons name="person" size={24} color="#666666" />
          <Text className="text-xs text-gray-600 mt-1">Cá nhân</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;