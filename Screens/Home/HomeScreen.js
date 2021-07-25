import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeMap from '../../components/HomeMap/HomeMap';
import { styles } from './style';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    const [online, setOnline] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.topIcons}>
                <TouchableOpacity style={styles.menuButton}>
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton}>
                    <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <HomeMap />
            
            {/** the button go can change driver status from offline to online */}

            <TouchableOpacity style={styles.goButton} onPress={() => setOnline(!online)}>
                <Text style={styles.goText}>GO</Text>
            </TouchableOpacity>
            {/** driver status it can be offline or online */}

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.syncButton}>
                    <AntDesign name="sync" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.bottomText}>{online ? "You are online" : "You are offline"}</Text>
                <TouchableOpacity style={styles.barButton}>
                    <Entypo name="bar-graph" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen;
