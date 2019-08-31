import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { useNavigationParam } from 'react-navigation-hooks';
import Typography from '../constants/Typography';
import SearchBarHeader from '../components/SearchBarHeader';

const LineInfoScreen: React.FC = () => {

    const { title, data, colors } = useNavigationParam('lineInfo');

    const [searchQuery, setSearchQuery] = useState('');

    const displayData = data.map(route => {

        return {
            title: route['25'] || route['Hindi'],
        };
    });

    const FilteredDisplayData = displayData.filter(station => {

        let { title } = station;

        if (searchQuery === '') return station;
        else if (title.toLowerCase().includes(searchQuery.toLowerCase())) return station;
    });

    return (
        <View style={styles.container}>
            
            <Text style={{ ...Typography.heading, fontSize: 32, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 5, color: colors[0] }}>{title}</Text>
            <SearchBarHeader
                value={searchQuery}
                onChangeText={setSearchQuery}
                containerStyle={{ paddingHorizontal: 16, paddingBottom: 10 }}
            />
            <View style={{ flex: 1, marginTop: 5, paddingLeft: 5, paddingRight: 20 }}>
                <Timeline
                    showTime={false}
                    circleSize={20}
                    showsVerticalScrollIndicator={false}
                    circleColor={colors[0]}
                    lineColor={colors[0]}
                    titleStyle={{ ...Typography.body, fontSize: 16, paddingVertical: 5, color: 'white' }}
                    detailContainerStyle={{ marginBottom: 20, paddingHorizontal: 16, borderRadius: 5, backgroundColor: `${colors[0]}` }}
                    data={FilteredDisplayData}
                    options={{
                        showsVerticalScrollIndicator: false,
                        style: { backgroundColor: 'transparent' },
                        contentContainerStyle: { flexGrow: 1 },
                        removeClippedSubviews: false
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LineInfoScreen;