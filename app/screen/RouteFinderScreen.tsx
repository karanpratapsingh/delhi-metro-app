import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

console.disableYellowBox = true;
const RouteFinderScreen = () => {

    return (

        <View style={styles.container}>
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                autoPlay
                style={{
                    width: 400,
                    height: 400,
                }}
                source={require('../../assets/animations/train.json')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default RouteFinderScreen;