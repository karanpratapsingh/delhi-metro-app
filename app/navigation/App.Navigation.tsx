import * as Icon from '@expo/vector-icons';
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import LineInfoScreen from '../screen/LineInfoScreen';
import RouteFinderScreen from '../screen/RouteFinderScreen';
import StationListScreen from '../screen/StationListScreen';
import MapViewScreen from '../screen/MapViewScreen';

const StackNavigator = createStackNavigator({
    StationListScreen: {
        screen: StationListScreen
    },
    LineInfoScreen: {
        screen: LineInfoScreen
    }
}, {
    headerMode: 'none'
});

const TabNavigator = createBottomTabNavigator({

    StackNavigator: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon.Feather name={'list'} color={tintColor} size={30} />
        }
    },
    RouteFinderScreen: {
        screen: RouteFinderScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon.FontAwesome name={'location-arrow'} color={tintColor} size={30} />
        }
    },
    MapViewScreen: {
        screen: MapViewScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon.MaterialIcons name={'map'} color={tintColor} size={30} />
        }
    }
}, {
    
    tabBarOptions: {
        activeTintColor: Colors.primary.regular,
        inactiveTintColor: Colors.secondary.dark,
        showLabel: false
    }
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;