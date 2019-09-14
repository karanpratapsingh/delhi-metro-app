import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RouteResultModal from '../components/RouteResultModal';
import StationListModal from '../components/StationListModal';
import Colors from '../constants/Colors';
import { transformPath } from '../constants/FormattedData';
import Typography from '../constants/Typography';

console.disableYellowBox = true;

const LottieAnimationSource: NodeRequire = require('../../assets/animations/map.json');
const InitialRequestUrl: string = 'https://us-central1-delhi-metro-api.cloudfunctions.net/route-get?';

const { width } = Dimensions.get('window');

const RouteFinderScreen: React.FC = () => {

    const startingPointModalRef = useRef(null);
    const destinationModalRef = useRef(null);
    const routeResultModalRef = useRef(null);

    const [didMount, setDidMount] = useState(false);
    const [startingPoint, setStartingPoint] = useState('');
    const [destinationPoint, setDestinationPoint] = useState('');
    const [requestUrl, setRequestUrl] = useState(InitialRequestUrl);
    const [routeResultData, setRouteResultData] = useState({ path: [], interchange: [], time: 0 });
    const [isFetchingData, setFetchingData] = useState(false);

    const dispatchRequest = () => setRequestUrl(`${InitialRequestUrl}from=${startingPoint}&to=${destinationPoint}`);

    useEffect(() => setDidMount(true), []);
    useEffect(() => {
        const getShortestPath = async (): Promise<void> => {
            try {
                setFetchingData(true);
                const response = await fetch(requestUrl as RequestInfo);
                const { path, interchange, time } = await response.json();

                setRouteResultData({ path: transformPath(path), interchange, time });
                setFetchingData(false);

                routeResultModalRef.current.openModal();
            } catch {
                setFetchingData(false);
                alert('Please select the destinations properly');
            }
        };

        if (didMount)
            getShortestPath();
    }, [requestUrl])

    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                ref={animation => { this.animation = animation; }}
                style={{ height: 200, width: 200 }}
                source={LottieAnimationSource as any}
            />
            <TouchableOpacity
                onPress={() => startingPointModalRef.current.openModal()}
                style={styles.locationContainer}>
                <Text style={styles.locationText}>{startingPoint ? startingPoint : 'Select Start'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => destinationModalRef.current.openModal()}
                style={styles.locationContainer}>
                <Text style={styles.locationText}>{destinationPoint ? destinationPoint : 'Select Destination'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatchRequest()}
                style={styles.startButtonContainer}>
                {
                    isFetchingData ?
                        <ActivityIndicator color={Colors.secondary.light} size={'small'} />
                        :
                        <Text style={styles.startButtonText}>Let's Go</Text>
                }
            </TouchableOpacity>

            <StationListModal
                ref={startingPointModalRef}
                onStationSelected={station => setStartingPoint(station)}
            />

            <StationListModal
                ref={destinationModalRef}
                onStationSelected={station => setDestinationPoint(station)}
            />

            <RouteResultModal
                ref={routeResultModalRef}
                from={startingPoint}
                to={destinationPoint}
                routeResultData={routeResultData}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.72,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.black,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginTop: 16,
        borderRadius: 20
    },
    locationText: {
        ...Typography.body,
        fontSize: 16,
        color: Colors.black
    },
    startButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.4,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginTop: 24,
        backgroundColor: Colors.primary.regular,
        borderRadius: 20
    },
    startButtonText: {
        ...Typography.body,
        fontSize: 16,
        color: Colors.secondary.light
    },
});

export default RouteFinderScreen;