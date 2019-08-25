import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import Modalize from 'react-native-modalize';
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';
import { StationListData } from '../constants/FormattedData';

export default class RouteResultModal extends React.PureComponent {

    modal = React.createRef();

    onClosed = () => {
        const { onClosed } = this.props;

        if (onClosed) onClosed();
    };

    openModal = () => this.modal.current.open();

    closeModal = () => this.modal.current.close();

    render() {

        const { routeResultData: { time } } = this.props;

        return (
            <Modalize
                ref={this.modal}
                keyboardAvoidingBehavior={'padding'}
                onClosed={this.onClosed}
                modalStyle={{ marginTop: 32, overflow: 'hidden' }}>
                <Text>{time}</Text>
            </Modalize>
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