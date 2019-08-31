import React from 'react';
import { View, TextInput } from 'react-native';
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';

interface SearchBarProps {
    value: string,
    onChangeText: any,
    placeholder: string
};

const SearchBarHeader: React.FC<SearchBarProps> = ({ value, onChangeText, placeholder }) => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10, paddingTop: 16, width: '100%', backgroundColor: Colors.secondary.light }}>
        <TextInput
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholder={placeholder}
            style={{ ...Typography.body, backgroundColor: Colors.primary.light, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 4, fontSize: 16 }}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

export default SearchBarHeader;