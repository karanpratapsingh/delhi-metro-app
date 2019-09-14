import React, { useEffect, useState } from 'react';
import { Animated, Easing, Platform, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

interface AnimatedHeaderProps {
    title: string,
    color?: string,
    style?: {}
};

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ title, color, style }) => {

    const [opacityTitle] = useState(new Animated.Value(0))
    const [opacityOverlay] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacityTitle, {
                toValue: 1,
                duration: 400,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(opacityOverlay, {
                toValue: 0.10,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start();
    }, [])

    return (
        <Animated.View style={[styles.container, style]}>
            <Animated.Text style={[styles.headerOverlay, { opacity: opacityOverlay, color: color || Colors.primary.regular }]}>{title}</Animated.Text>
            <Animated.Text style={[styles.header, { opacity: opacityTitle, color: color || Colors.primary.regular }]}>{title}</Animated.Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    headerOverlay: {
        ...Typography.subHeading,
        textAlign: 'center',
        fontSize: Platform.select({ ios: 60, android: 56 }),
        // opacity: 0.08,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    header: {
        ...Typography.subHeading,
        textAlign: 'center',
        fontSize: 40
    }
});

export default AnimatedHeader;