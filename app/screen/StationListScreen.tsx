import { Entypo } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from 'react-navigation-hooks';
import Colors from '../constants/Colors';
import { MetroLineListData } from '../constants/FormattedData';
import Typography from '../constants/Typography';

const StationListScreen = () => {

    let { navigate } = useNavigation();

    return (
        <>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <Text style={{ ...Typography.heading, fontSize: 32 }}>Metro Lines</Text>
            </View>
            <FlatGrid
                showsVerticalScrollIndicator={false}
                itemDimension={responsiveWidth(100)}
                items={MetroLineListData}
                style={styles.gridView}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigate('LineInfoScreen', { lineInfo: item })}>
                        <LinearGradient style={styles.itemContainer} start={[0, 1]} end={[1, 0]} colors={item.colors}>
                            <BlurView style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingVertical: 20 }} tint='dark' intensity={10}>
                                <Text style={styles.itemName}>{item.title}</Text>
                                <Entypo name={'chevron-thin-right'} size={25} color={Colors.secondary.light} />
                            </BlurView>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    gridView: {
        flex: 1
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