import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeMap from '../../components/HomeMap/HomeMap';
import { styles } from './style';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import NewOrderPopUp from '../../components/NewOrderPopUp/NewOrderPopUp';


const HomeScreen = () => {
    const [online, setOnline] = useState(false);
    const [newOrder, setNewOrder] = useState({
        id: 1,
        originLatitude: 30.472863493373456,
        originLongitude: -8.877082002834296,
        destLatitude: 30.872863493373456,
        destLongitude: -9.277082002834296,
        user: {
            name: 'RIAD'
        }
    });
    const [order, setOrder] = useState(null)

    function onAccept(newOrder) {
        setOrder(newOrder);
        setNewOrder(null);
    }

    function onDecline() {
        setNewOrder(null);
    }

    if (order) {
        return (
            <View>

            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                {/* icons for the menu and search for the location and also the price */}
                {!newOrder && (
                    <View style={styles.topIcons}>
                        <TouchableOpacity style={styles.menuButton}>
                            <Feather name="menu" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>$0.00</Text>
                        </View>
                        <TouchableOpacity style={styles.searchButton}>
                            <FontAwesome name="search" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
    
                <HomeMap />
                {/** the button go can change driver status from offline to online */}
                
                {!newOrder && (
                    <TouchableOpacity style={styles.goButton} onPress={() => setOnline(!online)}>
                        <Text style={styles.goText}>GO</Text>
                    </TouchableOpacity>
                )}
    
                {/** driver status it can be offline or online */}
                
                {!newOrder ? (
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.syncButton}>
                            <AntDesign name="sync" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.bottomText}>{online ? "You are online" : "You are offline"}</Text>
                        <TouchableOpacity style={styles.barButton}>
                            <Entypo name="bar-graph" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <NewOrderPopUp 
                        order={newOrder}
                        duration={2}
                        distance={0.2}
                        onAccept={() => onAccept(newOrder)}
                        onDecline={onDecline}
                    />
    
                )}
            </View>
        )
    }
}

export default HomeScreen;
