import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { useNavigationParam } from 'react-navigation-hooks';
import Typography from '../constants/Typography';

const LineInfoScreen = () => {

    let { title, data, colors } = useNavigationParam('lineInfo');

    let displayData = data.map(route => {

        return {
            title: route['25'] || route['Hindi'],
        };
    });

    return (
        <View style={styles.container}>
            <Text style={{ ...Typography.heading, fontSize: 32, paddingHorizontal: 20, paddingVertical: 10, color: colors[0] }}>{title}</Text>

            <View style={{ flex: 1, marginTop: 5, paddingLeft: 5, paddingRight: 20 }}>
                <Timeline
                    showTime={false}
                    circleSize={20}
                    showsVerticalScrollIndicator={false}
                    circleColor={colors[0]}
                    lineColor={colors[0]}
                    titleStyle={{ ...Typography.body, fontSize: 20, paddingVertical: 10, color: 'white' }}
                    detailContainerStyle={{ marginBottom: 20, paddingHorizontal: 16, borderRadius: 5, backgroundColor: `${colors[0]}` }}
                    data={displayData}
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
        flex: 1,
        // paddingHorizontal: 20,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});

export default LineInfoScreen;