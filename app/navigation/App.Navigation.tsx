import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StationListScreen from '../screen/StationListScreen';
import RouteFinderScreen from '../screen/RouteFinderScreen';
import * as Icon from '@expo/vector-icons';
import Colors from '../constants/Colors';

const TabNavigator = createBottomTabNavigator({

    StationListScreen: {
        screen: StationListScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon.Feather name={'list'} color={tintColor} size={30} />
        }
    },
    RouteFinderScreen: {
        screen: RouteFinderScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon.MaterialIcons name={'monetization-on'} color={tintColor} size={30} />
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