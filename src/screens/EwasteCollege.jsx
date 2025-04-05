import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EwasteCollege = () => {
    const navigation = useNavigation();

    // List of e-waste collection companies
    const ewasteCompanies = [
        { 
            id: '1', 
            name: 'GreenTech Recycling', 
            contact: '9876543210', 
            address: '123 Green Street, City A', 
            cost: '$10 per kg',
            logo: 'https://ik.imagekit.io/varsh0506/Bin%20Win/companylogo.png?updatedAt=1743774253931' 
        },
        { 
            id: '2', 
            name: 'EcoSafe E-Waste', 
            contact: '9123456789', 
            address: '456 Eco Lane, City B', 
            cost: '$12 per kg',
            logo: 'https://ik.imagekit.io/varsh0506/Bin%20Win/companylogo.png?updatedAt=1743774253931' 
        },
        { 
            id: '3', 
            name: 'RecycleNow Pvt Ltd', 
            contact: '8765432109', 
            address: '789 Recycle Road, City C', 
            cost: '$9 per kg',
            logo: 'https://ik.imagekit.io/varsh0506/Bin%20Win/companylogo.png?updatedAt=1743774253931' 
        },
        { 
            id: '4', 
            name: 'Clean Earth Solutions', 
            contact: '9988776655', 
            address: '101 Clean Drive, City D', 
            cost: '$11 per kg',
            logo: 'https://ik.imagekit.io/varsh0506/Bin%20Win/companylogo.png?updatedAt=1743774253931' 
        },
        { 
            id: '5', 
            name: 'Zero Waste Corp', 
            contact: '9090909090', 
            address: '202 Zero Street, City E', 
            cost: '$13 per kg',
            logo: 'https://ik.imagekit.io/varsh0506/Bin%20Win/companylogo.png?updatedAt=1743774253931' 
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>♻️ E-Waste Collection Companies</Text>
            
            <FlatList
                data={ewasteCompanies}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.companyItem}
                        onPress={() => navigation.navigate('EwasteSchedule')}
                    >
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>{item.name}</Text>
                            <Text style={styles.contact}>📞 {item.contact}</Text>
                            <Text style={styles.address}>📍 {item.address}</Text>
                            <Text style={styles.cost}>💰 {item.cost}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default EwasteCollege;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e8f5e9', // Light Green Background
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#2e7d32', // Dark Green
    },
    companyItem: {
        flexDirection: 'row',
        backgroundColor: '#c8e6c9', // Soft Green
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    companyInfo: {
        flex: 1,
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1b5e20', // Darkest Green
    },
    contact: {
        fontSize: 14,
        color: '#4caf50', // Light Green
    },
    address: {
        fontSize: 14,
        color: '#388e3c',
    },
    cost: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
});
