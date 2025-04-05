import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Home, User, MapPin, LogOut } from "lucide-react-native";

export default function CompanyHome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.topSection}>
        <Text style={styles.titleText}>BinWin</Text>
      </View>
      
      <ScrollView style={styles.contentContainer}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to BinWin!</Text>
          <Text style={styles.welcomeDescription}>
            Join us in making a greener planet! Track your recycling efforts, locate nearby recycling centers, and manage your profile seamlessly.
          </Text>
        </View>
        
        {/* Company Dashboard */}
        <View style={styles.dashboardSection}>
          <Text style={styles.sectionTitle}>Company Dashboard</Text>
          <View style={styles.dashboardCards}>
            <View style={styles.card}><Text style={styles.cardText}>Total Recycled: 15,000 kg</Text></View>
            <View style={styles.card}><Text style={styles.cardText}>Impact Score: 92%</Text></View>
          </View>
        </View>
        
        {/* Recycling Insights */}
        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>Recycling Insights</Text>
          <Text style={styles.insightText}>
            - Segregate waste properly to improve recycling efficiency.
          </Text>
          <Text style={styles.insightText}>
            - Reduce single-use plastics and opt for biodegradable alternatives.
          </Text>
        </View>

        {/* Upcoming Events */}
        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <Text style={styles.eventText}>♻️ Green Earth Summit - Sep 20</Text>
          <Text style={styles.eventText}>🌿 Eco-Friendly Expo - Oct 5</Text>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("CompanyHome")}>
          <Home size={26} color="#2E8B57" />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("CompanyProfile")}>
          <User size={26} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("CompanyMaps")}>
          <MapPin size={26} color="#FF8C00" />
          <Text style={styles.navText}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Login")}>
          <LogOut size={26} color="#DC143C" />
          <Text style={styles.navText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EAF6E8" },
  topSection: { padding: 20, alignItems: "center" },
  titleText: { fontSize: 32, fontWeight: "bold", color: "#2E8B57" },
  contentContainer: { paddingHorizontal: 20, marginBottom: 60 },
  welcomeSection: { marginTop: 16 },
  welcomeTitle: { fontSize: 24, fontWeight: "bold", color: "#2E8B57" },
  welcomeDescription: { fontSize: 16, color: "#444" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#2E8B57", marginTop: 20 },
  dashboardSection: { marginTop: 20 },
  dashboardCards: { flexDirection: "column", justifyContent: "space-between", marginTop: 10, gap:10 },
  card: { backgroundColor: "#FFF", padding: 15, borderRadius: 10, elevation: 3 },
  cardText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  insightsSection: { marginTop: 20 },
  insightText: { fontSize: 16, color: "#555", marginVertical: 5 },
  eventsSection: { marginTop: 20 },
  eventText: { fontSize: 16, color: "#008B8B", marginVertical: 5 },
  bottomNavBar: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#F9F9F9", paddingVertical: 12, flexDirection: "row", justifyContent: "space-around", elevation: 5 },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#666" },
  activeNavText: { fontSize: 12, color: "#2E8B57" },
});