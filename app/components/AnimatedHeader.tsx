import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';

interface AnimatedHeaderProps {
    title: string,
    color?: string,
    style?: {}
};

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ title, color, style }) => (
    <View style={[styles.container, style]}>
        <Text style={[styles.headerOverlay, { color: color || Colors.primary.regular }]}>{title}</Text>
        <Text style={[styles.header, { color: color || Colors.primary.regular }]}>{title}</Text>
    </View>
);

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
        opacity: 0.08,
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