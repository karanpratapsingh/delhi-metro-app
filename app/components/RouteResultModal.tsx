import * as ExpoIcon from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modalize from 'react-native-modalize';
import Timeline from 'react-native-timeline-listview';
import Colors from '../constants/Colors';
import { MetroLineColorGradients } from '../constants/FormattedData';
import Typography from '../constants/Typography';

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
            <Text style={{ ...Typography.body, fontSize: 18, color: lineColor }}>
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

        const pathTimeLineData = [];

        path.map((data, index) => {

            const { name: title, lines } = data;
            const [color] = MetroLineColorGradients[lines[0]];
            const isInterchange = interchange.includes(title);
            const routeData = { title, lineColor: color, circleColor: color, isInterchange };

            if (index > 0) {
                if (lines.length > 1) {

                    let previousColor = path[index - 1].lines[0];
                    routeData.lineColor = MetroLineColorGradients[previousColor][0];
                    routeData.circleColor = MetroLineColorGradients[previousColor][0];
                }
            }

            pathTimeLineData.push(routeData);
            return data;
        });

        return (
            <Modalize
                ref={this.modal as any}
                keyboardAvoidingBehavior={'padding'}
                modalStyle={{ marginTop: 24, overflow: 'hidden' }}>

                <View style={{ paddingVertical: 16, paddingHorizontal: 16, backgroundColor: Colors.secondary.regular }}>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 18 }}>
                        <ExpoIcon.MaterialCommunityIcons name={'circle-slice-8'} size={18} color={Colors.primary.regular} />
                        {'  '}
                        {from}
                    </Text>
                    <ExpoIcon.Entypo name={'dots-three-vertical'} style={{ marginVertical: 4 }} size={20} color={Colors.secondary.dark} />
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 18 }}>
                        <ExpoIcon.MaterialCommunityIcons name={'circle-slice-8'} size={18} color={Colors.primary.regular} />
                        {'  '}
                        {to}
                    </Text>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 18, marginTop: 12 }}>
                        <ExpoIcon.MaterialCommunityIcons name={'clock-outline'} size={20} color={Colors.primary.regular} />
                        {' Time: '}
                        {parseFloat(time).toFixed(2)} mins</Text>
                    <Text style={{ ...Typography.body, color: Colors.primary.regular, fontSize: 18, marginTop: 12 }}>
                        <ExpoIcon.FontAwesome name={'exchange'} size={20} color={Colors.primary.regular} />
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