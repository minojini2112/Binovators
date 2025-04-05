import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  ScrollView,
  Linking,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const EwasteSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [pickupScheduled, setPickupScheduled] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  const schedulePickup = () => {
    if (selectedDate && selectedTime) {
      setPickupScheduled(true);
    }
  };

  const company = {
    name: "GreenTech Recycling",
    profile: "https://ik.imagekit.io/varsh0506/Bin%20Win/companylogo.png?updatedAt=1743774253931",
    address: "123 Green Street, Eco City, Earth 400001",
    contact: "+91 9876543210",
    email: "contact@greentech.com",
    website: "https://greentechrecycling.com",
    workingHours: "Mon - Sat: 9 AM to 6 PM",
    services: "E-waste recycling, secure data destruction, bulk pickups",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: company.profile }} style={styles.profileImage} />
        <Text style={styles.heading}>{company.name}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>📍 Address: {company.address}</Text>
        <Text style={styles.text}>📞 Contact: {company.contact}</Text>
        <Text style={styles.text}>📧 Email: {company.email}</Text>
        <Text style={styles.text}>
          🕒 Working Hours: {company.workingHours}
        </Text>
        <Text style={styles.text}>🔧 Services: {company.services}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(company.website)}>
          <Text style={[styles.text, styles.link]}>🌐 Visit Website</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Schedule a Pickup</Text>

      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>
          {selectedDate
            ? `📅 ${selectedDate.toLocaleDateString()}`
            : "Select Date"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity onPress={showTimePicker} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>
          {selectedTime
            ? `⏰ ${selectedTime.toLocaleTimeString()}`
            : "Select Time"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />

      <TextInput
        style={styles.notesInput}
        placeholder="Additional notes (e.g., type of e-waste, pickup instructions)"
        value={additionalNotes}
        onChangeText={setAdditionalNotes}
        multiline
      />

      <Button
        title="Schedule Pickup"
        onPress={schedulePickup}
        color="#22c55e"
      />

      {pickupScheduled && (
        <View style={styles.confirmationBox}>
          <Text style={styles.text}>✅ Pickup scheduled for:</Text>
          <Text style={styles.text}>
            📅 {selectedDate?.toLocaleDateString()}
          </Text>
          <Text style={styles.text}>
            ⏰ {selectedTime?.toLocaleTimeString()}
          </Text>
          <Text style={styles.text}>📝 Notes: {additionalNotes || "None"}</Text>
        </View>
      )}

      <Text style={styles.heading}>Upload E-Waste Image</Text>
      <TouchableOpacity
        style={styles.imageBox}
        onPress={() => setImageUri("https://via.placeholder.com/150")}
      >
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.text}>Tap to Upload</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0fdf4",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#166534",
    marginVertical: 12,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ecfdf5",
    borderColor: "#bbf7d0",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  text: {
    color: "#166534",
    fontSize: 14,
    marginTop: 6,
  },
  link: {
    color: "#065f46",
    textDecorationLine: "underline",
  },
  dateButton: {
    backgroundColor: "#bbf7d0",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  dateButtonText: {
    color: "#166534",
    fontWeight: "bold",
  },
  confirmationBox: {
    backgroundColor: "#d1fae5",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  imageBox: {
    height: 150,
    backgroundColor: "#ecfdf5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#86efac",
    borderWidth: 1,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  notesInput: {
    borderColor: "#86efac",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: "#166534",
    backgroundColor: "#ffffff",
  },
});

export default EwasteSchedule;