import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { styles } from '../HomeMap/style';
import { GOOGLE_API } from '../../config/keys';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DirectionsMap = ({userLocationLa, userLocationLg}) => {
    const [position, setPosition] = useState(null);
    const destination = {
        latitude: userLocationLa,
        longitude: userLocationLg
    }
    useEffect(() => {
        async function watch() {

                Location.getCurrentPositionAsync(
                    {
                        accuracy: Location.Accuracy.BestForNavigation
                    })
                    .then((position) => {
                        setPosition({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        })
                    })
                }
                
        watch();
        
    }, [])


    return (
        <View style={styles.container}>
            <MapView
                 provider="google"
                 style={styles.map}  
                 showsUserLocation={true}
                 initialRegion={{    
                     latitude: 30.472863493373456,
                     longitude: -8.877082002834296,
                     latitudeDelta: 0.045,
                     longitudeDelta: 0.045,
                   }}               
            >
                {
                    position && (
                        <>
                        <MapView.Marker coordinate={position} />
                        <MapView.Marker coordinate={destination} />
                        <MapViewDirections 
                            origin={position}
                            destination={destination}
                            apikey={GOOGLE_API}
                            strokeWidth={3}
                            strokeColor="#ff5000"
                        />
                        </>
                    )
                }
            </MapView>

            <View style={styles.panel}>
                
            </View>
        </View>
    )
}

export default DirectionsMap;
