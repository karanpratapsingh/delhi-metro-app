import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modalize from 'react-native-modalize';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import { StationListData } from '../constants/FormattedData';
import Typography from '../constants/Typography';

type StationListModalProps = {

    onStationSelected: any
};

type StationListModalState = {

    searchQuery: string
};

export default class StationListModal extends React.PureComponent<StationListModalProps, StationListModalState> {

    state = {
        searchQuery: ''
    };

    modal = React.createRef();

    _onStationSelected = station => {

        this.props.onStationSelected(station);
        this.closeModal();
    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this._onStationSelected(item.value)} style={styles.listItem}>
            <Text style={styles.itemName}>{item.value}</Text>
            <Text style={styles.itemSynonym}>{item.synonyms.join(', ')}</Text>
        </TouchableOpacity>
    );

    openModal = () => this.modal.current['open']();

    closeModal = () => this.modal.current['close']();

    _listHeaderComponent = () => (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10, paddingTop: 16, width: '100%', backgroundColor: Colors.secondary.light }}>
            <TextInput
                placeholder={'Search Stations...'}
                style={{ ...Typography.body, backgroundColor: Colors.primary.light, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 4, fontSize: 16 }}
                value={this.state.searchQuery}
                onChangeText={searchQuery => this.setState({ searchQuery })}
            />
        </View>
    );

    render() {

        

        return (
            <Modalize
                ref={this.modal as any}
                adjustToContentHeight
                keyboardAvoidingBehavior={'padding'}
                modalStyle={styles.modal}>

                {this._listHeaderComponent()}
                <FlatGrid
                    showsVerticalScrollIndicator={false}
                    itemDimension={responsiveWidth(100)}
                    items={StationListData}
                    style={styles.gridView}
                    renderItem={this.renderItem}
                />

            </Modalize>
        );
    };
};

const styles = StyleSheet.create({
    gridView: {
        flex: 1
    },
    modal: {
        marginTop: 32,
        overflow: 'hidden'
    },
    listItem: {
        alignItems: 'flex-start',
        padding: 16,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    itemName: {
        ...Typography.body,
        fontSize: 16,
        marginBottom: 5,
    },
    itemSynonym: {
        ...Typography.caption,
        fontSize: 14,
        color: '#666',
    },
});