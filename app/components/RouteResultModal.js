import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import Modalize from 'react-native-modalize';
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';
import { StationListData } from '../constants/FormattedData';
import Timeline from 'react-native-timeline-listview';

export default class RouteResultModal extends React.PureComponent {

    modal = React.createRef();

    onClosed = () => {
        const { onClosed } = this.props;

        if (onClosed) onClosed();
    };

    openModal = () => this.modal.current.open();

    closeModal = () => this.modal.current.close();

    render() {

        const { from, to, routeResultData: { path, time } } = this.props;

        const pathTimeLineData = path.map(path => ({ title: path }));

        return (
            <Modalize
                ref={this.modal}
                keyboardAvoidingBehavior={'padding'}
                onClosed={this.onClosed}
                modalStyle={{ marginTop: 24, overflow: 'hidden' }}>

                <View style={{ paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#eee' }}>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 16 }}>From: {from}</Text>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 16 }}>To: {to}</Text>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 16 }}>ETA: {parseFloat(time).toFixed(2)} mins</Text>
                </View>

                <View style={{ flex: 1, marginTop: 5, paddingLeft: 5, paddingRight: 20 }}>
                    <Timeline
                        showTime={false}
                        circleSize={20}
                        showsVerticalScrollIndicator={false}
                        circleColor={Colors.primary.regular}
                        lineColor={Colors.primary.regular}
                        titleStyle={{ ...Typography.body, fontSize: 16, paddingVertical: 5, color: Colors.secondary.light }}
                        detailContainerStyle={{ marginBottom: 20, paddingHorizontal: 16, borderRadius: 5, backgroundColor: Colors.primary.regular }}
                        data={pathTimeLineData}
                        bounces={false}
                        options={{
                            showsVerticalScrollIndicator: false,
                            style: { backgroundColor: 'transparent' },
                            contentContainerStyle: { flexGrow: 1, marginTop: 10, marginBottom: 80 },
                            removeClippedSubviews: false
                        }}
                    />
                </View>
            </Modalize>
        );
    };
};

const styles = StyleSheet.create({

});