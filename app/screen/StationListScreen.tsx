import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { MetroLineListData } from '../constants/FormattedData';
import Colors from '../constants/Colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Typography from '../constants/Typography';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

// console.log(MetroLineListData);

const StationListScreen = props => (
    <>
        <View style={{ backgroundColor: 'pink'}}>
            <Text style={{ ...Typography.heading, }}>Metro Lines</Text>
        </View>
        <FlatGrid
            itemDimension={responsiveWidth(100)}
            items={MetroLineListData}
            style={styles.gridView}
            renderItem={({ item }) => (
                <LinearGradient style={styles.itemContainer} start={[0, 1]} end={[1, 0]} colors={item.colors}>
                    <BlurView style={{ flex: 1, padding: 10, paddingVertical: 20 }} tint='dark' intensity={10}>
                        <Text style={styles.itemName}>{item.title}</Text>
                    </BlurView>

                </LinearGradient>
            )}
        />
    </>
);

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginTop: 20
    },
    itemContainer: {
        borderRadius: 5,
        marginHorizontal: 8
    },
    itemName: {
        ...Typography.body,
        color: Colors.secondary.light,
        fontSize: 20
    },
    sectionHeader: {
        flex: 1,
        ...Typography.heading,
        alignItems: 'center',
        color: '#636e72',
        backgroundColor: 'white',
        padding: 8,
        paddingLeft: 20
    },
});

export default StationListScreen;