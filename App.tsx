import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import AppContainer from './app/navigation/App.Navigation';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

export default function App() {

  const [isFontLoaded, setFontLoaded] = useState(false);

  const LoadFonts = async () => {
    await Font.loadAsync({
      'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
      'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCereal-Medium.ttf'),
      'AirbnbCereal-Light': require('./assets/fonts/AirbnbCereal-Light.ttf')
    });

    setFontLoaded(true);
  };

  useEffect(() => {
    LoadFonts();
  }, []);

  if (!isFontLoaded) return <View style={{ flex: 1 }} />
  return (
    <>
      <View style={{ height: Constants.statusBarHeight }}/>
      <AppContainer />
    </>
  )
};
