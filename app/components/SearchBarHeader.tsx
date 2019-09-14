import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

interface SearchBarProps {
    value: string,
    onChangeText: any,
    placeholder?: string,
    containerStyle?: any
};

const SearchBarHeader: React.FC<SearchBarProps> = ({ value, onChangeText, placeholder, containerStyle }) => (
    <View style={[styles.container, containerStyle]}>
        <TextInput
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholder={placeholder || 'Search stations...'}
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: Colors.secondary.light
    },
    textInput: {
        ...Typography.body,
        backgroundColor: Colors.primary.light,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: Platform.select({ ios: 6, android: 2 }),
        fontSize: 16
    }
});

export default SearchBarHeader;