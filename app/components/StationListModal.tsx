import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Modalize from 'react-native-modalize';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { StationListData } from '../constants/FormattedData';
import Typography from '../constants/Typography';
import SearchBarHeader from './SearchBarHeader';

interface StationListModalProps {

    onStationSelected: any
};

interface StationListModalState {

    searchQuery: string
};

export default class StationListModal extends React.PureComponent<StationListModalProps, StationListModalState> {

    state = {
        searchQuery: ''
    };

    modal = React.createRef();

    openModal = () => this.modal.current['open']();

    closeModal = () => this.modal.current['close']();

    _onStationSelected = station => {

        this.props.onStationSelected(station);
        this.closeModal();
    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this._onStationSelected(item.name.english)} style={styles.listItem}>
            <Text style={styles.itemName}>{item.name.english}</Text>
            <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.itemSynonym}>{item.lines.join(', ')}</Text>
        </TouchableOpacity>
    );

    render() {

        const { searchQuery } = this.state;
        const FilteredStationListData = StationListData.filter(station => {

            const { name } = station;

            if (searchQuery === '') return station;
            else if (name.english.toLowerCase().includes(searchQuery.toLowerCase())) return station;
        });

        return (
            <Modalize
                ref={this.modal as any}
                keyboardAvoidingBehavior={'padding'}
                modalStyle={styles.modal}>

                <SearchBarHeader
                    value={this.state.searchQuery}
                    onChangeText={searchQuery => this.setState({ searchQuery })}
                    containerStyle={{ paddingHorizontal: 10 }}
                />

                <FlatGrid
                    showsVerticalScrollIndicator={false}
                    itemDimension={responsiveWidth(100)}
                    items={FilteredStationListData}
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
        paddingTop: 16
    },
    listItem: {
        alignItems: 'flex-start',
        padding: 16,
        paddingTop: 10,
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