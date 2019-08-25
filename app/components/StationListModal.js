import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import Modalize from 'react-native-modalize';
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';
import { StationListData } from '../constants/FormattedData';

export default class StationListModal extends React.PureComponent {

    state = {
        searchQuery: ''
    };

    modal = React.createRef();

    get data() {
        return Array(50).fill(0).map(_ => ({
            name: 'faker.name.findName()',
            email: 'faker.internet.email()',
        }));
    };

    _onStationSelected = station => {

        this.props.onStationSelected(station);
        this.closeModal();
    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this._onStationSelected(item.value)} style={s.item}>
            <Text style={s.item__name}>{item.value}</Text>
            <Text style={s.item__email}>{item.synonyms.join(', ')}</Text>
        </TouchableOpacity>
    );

    onClosed = () => {
        const { onClosed } = this.props;

        if (onClosed) onClosed();
    };

    openModal = () => this.modal.current.open();

    closeModal = () => this.modal.current.close();

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
                ref={this.modal}
                adjustToContentHeight
                keyboardAvoidingBehavior={'padding'}
                onClosed={this.onClosed}
                modalStyle={{ marginTop: 32, overflow: 'hidden' }}
                flatListProps={{
                    stickyHeaderIndices: [0],
                    ListHeaderComponent: () => this._listHeaderComponent(),
                    data: StationListData,
                    renderItem: this.renderItem,
                    keyExtractor: item => item.value,
                    showsVerticalScrollIndicator: false,
                }}
            />
        );
    };
};

const s = StyleSheet.create({
    item: {
        alignItems: 'flex-start',
        padding: 15,
        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 1,
    },

    item__name: {
        fontSize: 16,

        marginBottom: 5,
    },

    item__email: {
        fontSize: 14,
        fontWeight: '200',
        color: '#666',
    },
});