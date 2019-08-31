import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Image from 'react-native-image-progress';

const { height, width } = Dimensions.get('window');

const MapViewScreen = () => (
    <View style={styles.container}>
        <ReactNativeZoomableView
            maxZoom={5.0}
            minZoom={1}
            zoomStep={1}
            initialZoom={1}
            bindToBorders={false}>
            <Image
                style={{ height, width }}
                source={{ uri: 'http://www.delhimetrorail.com/images/bilingual-21062019.jpg' }}
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