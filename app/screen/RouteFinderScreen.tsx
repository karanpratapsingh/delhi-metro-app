import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RouteFinderScreen = props => (
    <View style={styles.container}>
        <Text>RouteFinderScreen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default RouteFinderScreen;