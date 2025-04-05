import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const CollegeProfile = () => {
    const collegeData = {
        name: "Greenfield Engineering College",
        location: "123 University Road, Springfield",
        established: 1995,
        departments: [
            "Computer Science",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Biotechnology"
        ],
        facilities: [
            "Library",
            "Hostel",
            "Sports Complex",
            "Cafeteria",
            "Research Labs"
        ],
        achievements: [
            "Ranked Top 10 Engineering Colleges in 2023",
            "Winner of National Robotics Competition",
            "Patent granted for AI-based Traffic Control System"
        ],
        contact: {
            email: "info@greenfield.edu",
            phone: "+1 234 567 890",
            website: "https://www.greenfield.edu"
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* College Image */}
            <Image 
                source={{ uri: 'https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_640.jpg' }} 
                style={styles.image} 
            />

            {/* College Details */}
            <View style={styles.card}>
                <Text style={styles.header}>{collegeData.name}</Text>
                <Text style={styles.subHeader}>📍 {collegeData.location}</Text>
                <Text style={styles.subHeader}>📅 Established: {collegeData.established}</Text>
            </View>

            {/* Departments */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>🎓 Departments</Text>
                {collegeData.departments.map((dept, index) => (
                    <Text key={index} style={styles.listItem}>🔹 {dept}</Text>
                ))}
            </View>

            {/* Facilities */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>🏛️ Facilities</Text>
                {collegeData.facilities.map((facility, index) => (
                    <Text key={index} style={styles.listItem}>✅ {facility}</Text>
                ))}
            </View>

            {/* Achievements */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>🏆 Achievements</Text>
                {collegeData.achievements.map((achievement, index) => (
                    <Text key={index} style={styles.listItem}>⭐ {achievement}</Text>
                ))}
            </View>

            {/* Contact Information */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>📞 Contact Information</Text>
                <Text style={styles.contactText}>📧 Email: {collegeData.contact.email}</Text>
                <Text style={styles.contactText}>📞 Phone: {collegeData.contact.phone}</Text>

                {/* Clickable Website Link */}
                <TouchableOpacity onPress={() => Linking.openURL(collegeData.contact.website)}>
                    <Text style={[styles.contactText, styles.websiteLink]}>🌍 Visit Website</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#F9F9F9' },
    image: { width: '100%', height: 220, borderRadius: 12, marginBottom: 15 },
    
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
    },

    header: { fontSize: 24, fontWeight: 'bold', color: '#2E8B57', textAlign: 'center', marginBottom: 5 },
    subHeader: { fontSize: 16, color: '#444', textAlign: 'center', marginBottom: 5 },

    sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#2E8B57', marginBottom: 8 },
    listItem: { fontSize: 16, color: '#444', marginBottom: 5 },

    contactText: { fontSize: 16, color: '#555', marginBottom: 5 },
    websiteLink: { color: '#1E90FF', fontWeight: 'bold' },
});

export default CollegeProfile;
