import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { MetroLineListData } from '../constants/FormattedData';
import Colors from '../constants/Colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Typography from '../constants/Typography';

console.log(MetroLineListData);

const StationListScreen = props => (
    <FlatGrid
        itemDimension={responsiveWidth(100)}
        items={MetroLineListData}
        style={styles.gridView}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.title}</Text>
            </View>
        )}
        // renderSectionHeader={({ section }) => (
        //     <Text style={styles.sectionHeader}>{section.title}</Text>
        // )}
    />
);

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginTop: 20,
    },
    itemContainer: {
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 8,
        backgroundColor: Colors.secondary.regular
    },
    itemName: {
        ...Typography.body,
        color: Colors.black
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