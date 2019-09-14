import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modalize from 'react-native-modalize';
import Timeline from 'react-native-timeline-listview';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';
import { MetroLineColorGradients } from '../constants/FormattedData';
import * as ExpoIcon from '@expo/vector-icons';

interface RouteResultModalProps {

    from: string,
    to: string,
    routeResultData: {
        path: {
            name: string,
            lines: string[]
        }[],
        interchange: string[],
        time: any
    }
};

interface RouteResultModalState { };

export default class RouteResultModal extends React.PureComponent<RouteResultModalProps, RouteResultModalState> {

    modal = React.createRef();

    openModal = () => this.modal.current['open']();

    closeModal = () => this.modal.current['close']();

    renderDetail = ({ title, lineColor, isInterchange }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ ...Typography.body, fontSize: 20, color: lineColor }}>
                {title}
            </Text>
            {isInterchange ?
                <ExpoIcon.FontAwesome name={'exchange'} size={20} color={lineColor} />
                :
                null
            }
        </View>
    );

    render() {

        const { from, to, routeResultData: { path, interchange, time } } = this.props;

        const pathTimeLineData = path.map(({ name: title, lines }) => {

            const [color] = MetroLineColorGradients[lines[0]];
            const isInterchange = interchange.includes(title);

            return { title, lineColor: color, circleColor: color, isInterchange };
        });

        return (
            <Modalize
                ref={this.modal as any}
                keyboardAvoidingBehavior={'padding'}
                modalStyle={{ marginTop: 24, overflow: 'hidden' }}>

                <View style={{ paddingVertical: 16, paddingHorizontal: 16, backgroundColor: '#fAfAfA' }}>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 17 }}>
                        <ExpoIcon.MaterialCommunityIcons name={'circle-slice-8'} size={18} color={Colors.primary.regular} />
                        {'  '}
                        {from}
                    </Text>
                    <ExpoIcon.Entypo name={'dots-three-vertical'} size={20} color={Colors.secondary.dark} />
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 17 }}>
                        <ExpoIcon.MaterialCommunityIcons name={'circle-slice-8'} size={18} color={Colors.primary.regular} />
                        {'  '}
                        {to}
                    </Text>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 17, marginTop: 10 }}>
                        <ExpoIcon.MaterialCommunityIcons name={'clock-outline'} size={20} color={Colors.primary.regular} />
                        {'  Time: '}
                        {parseFloat(time).toFixed(2)} mins</Text>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 17, marginTop: 10 }}>
                        <ExpoIcon.FontAwesome name={'exchange'} size={18} color={Colors.primary.regular} />
                        {'  Interchanges: '}
                        {interchange.length}
                    </Text>
                </View>

                <View style={{ flex: 1, marginTop: 5, paddingLeft: 5, paddingRight: 20 }}>
                    <Timeline
                        showTime={false}
                        circleSize={20}
                        showsVerticalScrollIndicator={false}
                        circleColor={Colors.primary.regular}
                        lineColor={Colors.primary.regular}
                        titleStyle={{ ...Typography.body, fontSize: 16, paddingVertical: 5, color: Colors.secondary.light }}
                        detailContainerStyle={{ marginBottom: 20, paddingHorizontal: 16, borderRadius: 5 }}
                        data={pathTimeLineData}
                        renderDetail={this.renderDetail}
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