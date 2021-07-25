import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './style';
import MapView from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

const HomeMap = () => {
    return (
        <View style={styles.container}>
            <MapView 
                provider="google"
                style={styles.map}
                initialRegion={{
                    latitude: 30.472863493373456,
                    longitude: -8.877082002834296,
                    latitudeDelta: 0.045,
                    longitudeDelta: 0.045,
                  }}
            />
        </View>
    )
}

export default HomeMap
