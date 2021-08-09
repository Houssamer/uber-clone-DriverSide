import React from 'react';
import { View, Text } from 'react-native';
import DirectionsMap from '../../../components/DirectionsMap/DirectionsMap';
import { styles } from './style';

const DirectionScreen = ({order}) => {
    return (
        <View style={styles.container}>
            <DirectionsMap 
                userLocationLa={order.originLatitude}
                userLocationLg={order.originLongitude}
            />
        </View>
    )
}

export default DirectionScreen
