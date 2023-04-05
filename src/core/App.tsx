import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'expo-dev-menu';
import 'expo-splash-screen';

import { loadCustomFonts } from '@utils/customFonts';
import WelcomeScreen from '@screens/WelcomeScreen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadCustomFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <WelcomeScreen />
    </View>
  );
};

export default App;
