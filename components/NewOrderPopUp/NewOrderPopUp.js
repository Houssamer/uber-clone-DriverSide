import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const NewOrderPopUp = ({order, duration, distance, onAccept, onDecline}) => {
    return (
        <View style={styles.container}>
            <View style={styles.popUp}>
                <View style={styles.profile}>
                    <View style={styles.profileIcon}>
                        <Feather name="user" size={80} color="white" />
                    </View>
                    <Text style={styles.name}>{order.user.name}</Text>
                </View>
                <View style={styles.duration}>
                    <Entypo name="time-slot" size={24} color="black" />
                    <Text style={styles.durationText}>{duration} min</Text>
                </View>
                <View style={styles.distance}>
                    <MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />
                    <Text style={styles.distanceText}>{distance} Km</Text>
                </View>

            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton} onPress={onDecline}>
                    <Text style={styles.declineText}>Decline</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewOrderPopUp;
