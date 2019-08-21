import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StationListScreen from '../screen/StationListScreen';
import RouteFinderScreen from '../screen/RouteFinderScreen';

const TabNavigator = createBottomTabNavigator({

    StationListScreen: {
        screen: StationListScreen
    },
    RouteFinderScreen: {
        screen: RouteFinderScreen
    }
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;