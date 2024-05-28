import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface Event {
  id: string;
  date: string;
  time: string;
  title: string;
  status: string;
}
interface EventScreenProps {
  navigation: NavigationProp<any>;
}

const events: Event[] = [
  { id: '1', date: '28 Feb', time: '07:00AM - 09:00AM', title: 'Event Title Goes Here', status: 'Event Confirmed' },
  { id: '2', date: '30 Jun', time: '08:00AM - 10:00AM', title: 'Event Title Goes Here', status: 'Not Confirmed' },
  { id: '3', date: '10 Jan', time: '09:00AM - 10:00AM', title: 'Event Title Goes Here', status: 'Event Cancelled' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Event Confirmed':
      return '#00A6FF'; // Blue
    case 'Not Confirmed':
      return '#D3D3D3'; // Grey
    case 'Event Cancelled':
      return '#90EE90'; // LightGreen 
    default:
      return '#00A6FF'; // Default color
  }
};

const EventScreen: React.FC<EventScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={['rgba(0, 166, 255,1)', 'rgba(0, 191, 255,-.45)']} style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Events</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-circle" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.calendarContainer}>
          <Calendar
            current={'2024-05-28'}
            markedDates={{
              '2024-05-29': { selected: true },
              '2024-05-03': { selected: true },
              '2024-05-09': { selected: true },
            }}
            theme={{
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00ADF5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00ADF5',
              dayTextColor: '#2d4150',
              arrowColor: '#00ADF5',
            }}
          />
          </View>
        <View style={styles.footer}>
          <Text style={styles.footerHeader}>My Events</Text>
          <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.eventContainer}>
                <Text style={styles.eventDate}>{item.date}</Text>
                <View style={styles.eventDetails}>
                  <Text style={styles.eventTime}>{item.time}</Text>
                  <Text style={styles.eventTitle}>{item.title}</Text>
                  <Text style={[styles.eventStatus, { backgroundColor: getStatusColor(item.status) }]}>{item.status}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#00A6FF',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    paddingRight: 170,
  },
  calendarContainer: {
    flex: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor:'#00ADF5',
  },

  footer: {
    flex: 5,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  footerHeader: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    padding: 6,
    borderRadius: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#00A6FF',
    width: 40,
    textAlign: 'center',
    borderColor:'#D3D3D3',
    borderWidth:1,
    height:40
  },
  eventDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  eventTime: {
    fontSize: 14,
    color: '#000',
    paddingLeft:20
  },
  eventTitle: {
    fontSize: 16,
    color: '#000',
    top:18,
    paddingLeft:13
  },
  eventStatus: {
    fontSize: 12,
    color: '#fff',
    paddingVertical: 2,
    paddingHorizontal:3,
    borderRadius: 3,
    alignSelf: 'flex-end',
    marginTop: 7,
    top:-40
   
  }

});

export default EventScreen;
