import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, User, MapPin, LogOut, Star } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const CollegeDashboard = () => {
    const navigation = useNavigation();
    const [data, setData] = useState({
        plasticWaste: 120,
        eWaste: 45,
        recyclingPoints: 320,
        activeBins: 8,
        communityParticipants: 52,
    });
    const [refreshing, setRefreshing] = useState(false);

    const recentActivities = [
        "20kg of plastic waste collected today",
        "5 e-waste items disposed properly",
        "New recycling bin added near Library",
    ];

    const leaderboard = [
        { name: "John Doe", points: 120 },
        { name: "Alice Smith", points: 105 },
        { name: "Raj Kumar", points: 98 },
    ];

    return (
        <View style={styles.container}>
            <ScrollView 
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(false)} />} 
                style={styles.scrollContainer}>
                
                <Text style={styles.header}>College Waste Management</Text>
                
                <View style={styles.card}><Text style={styles.text}>Plastic Waste: <Text style={styles.highlight}>{data.plasticWaste} kg</Text></Text></View>
                <View style={styles.card}><Text style={styles.text}>E-Waste Collected: <Text style={styles.highlight}>{data.eWaste} items</Text></Text></View>
                <View style={styles.card}><Text style={styles.text}>Recycling Points Earned: <Text style={styles.highlight}>{data.recyclingPoints}</Text></Text></View>
                <View style={styles.card}><Text style={styles.text}>Active Bins: <Text style={styles.highlight}>{data.activeBins}</Text></Text></View>
                <View style={styles.card}><Text style={styles.text}>Community Participation: <Text style={styles.highlight}>{data.communityParticipants} students</Text></Text></View>
                
                <Text style={styles.subHeader}>Recent Activities</Text>
                {recentActivities.map((activity, index) => (
                    <View key={index} style={styles.activityCard}><Text style={styles.activityText}>{activity}</Text></View>
                ))}

                <Text style={styles.subHeader}>Leaderboard</Text>
                {leaderboard.map((user, index) => (
                    <View key={index} style={styles.leaderboardItem}>
                        <Star size={20} color="#FFD700" />
                        <Text style={styles.leaderboardText}>{user.name}: {user.points} pts</Text>
                    </View>
                ))}
            </ScrollView>
            
            <View style={styles.bottomNavBar}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("CollegeDashboard")}>
                    <Home size={26} color="#2E8B57" />
                    <Text style={styles.activeNavText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("CollegeProfile")}>
                    <User size={26} color="#666" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("EwasteCollege")}>
                    <MapPin size={26} color="#FF8C00" />
                    <Text style={styles.navText}>E-waste</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("CollegeBin")}>
                    <MapPin size={26} color="#FF8C00" />
                    <Text style={styles.navText}>Bins</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Login")}>
                    <LogOut size={26} color="#DC143C" />
                    <Text style={styles.navText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9F9F9' },
    scrollContainer: { padding: 20 },
    header: { fontSize: 26, fontWeight: 'bold', color: '#379237', marginBottom: 15, textAlign: 'center' },
    subHeader: { fontSize: 20, fontWeight: 'bold', color: '#2E8B57', marginTop: 20, marginBottom: 10 },
    card: { backgroundColor: '#DFFFD6', borderRadius: 12, padding: 15, marginBottom: 10, shadowOpacity: 0.1 },
    text: { fontSize: 18, fontWeight: 'bold', color: '#379237' },
    highlight: { color: '#58CC02' },
    activityCard: { backgroundColor: '#FFF', borderRadius: 10, padding: 10, marginBottom: 8, shadowOpacity: 0.1 },
    activityText: { fontSize: 16, color: '#444' },
    leaderboardItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginBottom: 8 },
    leaderboardText: { fontSize: 16, marginLeft: 8, fontWeight: 'bold', color: '#555' },
    bottomNavBar: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#DFFFD6', paddingVertical: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowOpacity: 0.1 },
    navItem: { alignItems: 'center' },
    navText: { fontSize: 12, color: '#379237', marginTop: 5 },
    activeNavText: { fontSize: 12, color: '#2E8B57', fontWeight: 'bold', marginTop: 5 },
});

export default CollegeDashboard;
