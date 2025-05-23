// src/pages/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Banner from '../components/Banner';
import { Ionicons as Icon } from '@expo/vector-icons';


export type RootStackParamList = {
  Home: undefined;
  SearchFlight: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#006699" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Bamboo Airways</Text>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <Banner />

      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.title}>✈️ Chào mừng!</Text>
        <Text style={styles.subtitle}>Khám phá những chuyến bay tuyệt vời</Text>

        <TouchableOpacity 
          style={styles.searchButton}
          onPress={() => navigation.navigate('SearchFlight')}
        >
          <Icon name="search" size={20} color="#006699" />
          <Text style={styles.searchButtonText}>Bạn muốn đi đâu?</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#006699" />
          <Text style={styles.navText}>Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SearchFlight')}>
          <Icon name="search" size={24} color="#666" />
          <Text style={styles.navText}>Tìm kiếm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => alert('Profile clicked')}>
          <Icon name="person" size={24} color="#666" />
          <Text style={styles.navText}>Cá nhân</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  header: {
    height: 60,
    backgroundColor: 'linear-gradient(180deg, #006699 0%, #00aaff 100%)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  headerIcon: {
    padding: 10,
  },

  banner: {
    width: '100%',
    height: 150,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },

  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  searchButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#006699',
  },

  bottomNav: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },

  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navText: {
    fontSize: 12,
    color: '#006699',
  },
});
