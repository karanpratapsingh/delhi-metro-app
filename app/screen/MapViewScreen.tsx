import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import React from 'react';
import { Image, Dimensions, StyleSheet, View } from 'react-native';

const { height, width } = Dimensions.get('window');

const MapViewScreen = () => (
    <View style={styles.container}>
        <ReactNativeZoomableView
            maxZoom={5.0}
            minZoom={1}
            zoomStep={1}
            initialZoom={1}
            bindToBorders={false}
            style={{ height: height * 20, width: width * 20 }}>
            <Image
                style={{ flex: 1, height: null, width: null }}
                source={require('../static/metro-map/metro-map.jpg')}
                resizeMode='contain'
            />
        </ReactNativeZoomableView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default MapViewScreen;