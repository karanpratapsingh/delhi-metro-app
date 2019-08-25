import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapViewScreen = props => (
    <View style={styles.container}>
        <Text>MapViewScreen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MapViewScreen;