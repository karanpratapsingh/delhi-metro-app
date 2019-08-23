import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import Typography from '../constants/Typography';

const LineInfoScreen = () => {

    let { title, colors } = useNavigationParam('lineInfo');

    return (
        <View style={styles.container}>
            <Text style={{ ...Typography.body, fontSize: 32, color: colors[0] }}>{title}</Text>
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

export default LineInfoScreen;