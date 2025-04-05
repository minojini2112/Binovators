import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { AlertTriangle, MapPin, Clock } from 'lucide-react-native';

const CollegeBin = () => {
  const [bins, setBins] = useState([
    {
      id: 1,
      name: 'Bin A',
      location: 'Block A - Near Entrance',
      fillLevel: 75,
      wrongWasteAlert: true,
      lastPickupTime: '2 hours ago',
      weight: 1200,
      plasticDetected: true,
    },
    {
      id: 2,
      name: 'Bin B',
      location: 'Block B - Ground Floor',
      fillLevel: 40,
      wrongWasteAlert: false,
      lastPickupTime: '1 day ago',
      weight: 750,
      plasticDetected: false,
    },
    {
      id: 3,
      name: 'Bin C',
      location: 'Cafeteria',
      fillLevel: 90,
      wrongWasteAlert: true,
      lastPickupTime: '3 hours ago',
      weight: 1600,
      plasticDetected: true,
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a refresh delay
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.locationRow}>
          <MapPin size={16} color="#15803d" style={styles.icon} />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Fill Level</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${item.fillLevel}%` }]} />
        </View>
        <Text style={styles.smallText}>{item.fillLevel}% full</Text>
      </View>

      {item.wrongWasteAlert && (
        <View style={styles.alertRow}>
          <AlertTriangle size={16} color="red" style={styles.icon} />
          <Text style={styles.alertText}>Wrong waste detected!</Text>
        </View>
      )}

      <View style={styles.timeRow}>
        <Clock size={16} color="#15803d" style={styles.icon} />
        <Text style={styles.timeText}>
          Last pickup: {item.lastPickupTime ? item.lastPickupTime : 'Not yet'}
        </Text>
      </View>

      <Text style={styles.label}>Sensor Data:</Text>
      <Text style={styles.smallText}>Weight: {item.weight}g</Text>
      <Text style={styles.smallText}>Plastic Detected: {item.plasticDetected ? 'Yes' : 'No'}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={bins}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#22c55e"]} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    padding: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
  },
  loadingText: {
    color: '#166534',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ecfdf5',
    borderColor: '#86efac',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#166534',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: '#15803d',
  },
  section: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#15803d',
    marginBottom: 4,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#bbf7d0',
    borderRadius: 6,
  },
  progressBarFill: {
    height: 10,
    backgroundColor: '#22c55e',
    borderRadius: 6,
  },
  smallText: {
    fontSize: 12,
    color: '#166534',
    marginTop: 4,
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertText: {
    color: 'red',
    fontSize: 14,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    color: '#15803d',
    fontSize: 14,
  },
  icon: {
    marginRight: 4,
  },
});

export default CollegeBin;