import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import { MetroLineSectionListData } from '../constants/FormattedData';
import Colors from '../constants/Colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';

console.log(MetroLineSectionListData);

const StationListScreen = props => (
    <SectionGrid
        itemDimension={responsiveWidth(100)}
        sections={MetroLineSectionListData}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item['25'] || item['Hindi']}</Text>
            </View>
        )}
        renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
    />
);

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginTop: 20,
    },
    itemContainer: {
        // justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        // height: 150,
        width: responsiveWidth(94),
        backgroundColor: Colors.secondary.regular
    },
    itemName: {
        fontSize: 12,
        color: Colors.primary.dark,
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff'
    },
    sectionHeader: {
        flex: 1,
        fontSize: 24,
        fontWeight: '600',
        alignItems: 'center',
        color: '#636e72',
        backgroundColor: 'white',
        padding: 10,
    },
});

export default StationListScreen;