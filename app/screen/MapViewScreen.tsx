import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const MapViewScreen = () => (
    <View style={styles.container}>
        <ReactNativeZoomableView
            maxZoom={5.0}
            minZoom={0.5}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            // onZoomAfter={this.logOutZoomState}
            style={{}}>

            <Image style={{ flex: 1, width: null, height: '100%' }}
                source={require('../static/metro-map/metro-map.jpg')}
                resizeMode='contain' />
        </ReactNativeZoomableView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});

export default MapViewScreen;