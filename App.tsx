/* eslint-disable global-require */
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

async function loadResourcesAsync() {
  await Promise.all([
    // Pre-load other resources (i.e. images) here
    Font.loadAsync({
      'exo-semibold': require('./assets/Exo/static/Exo-SemiBold.ttf'),
      'dmsans-regular': require('./assets/DM_Sans/static/DMSans-Regular.ttf'),
    }),
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [resourcesIsLoaded, setResourcesLoaded] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function prepare() {
      try {
        await loadResourcesAsync();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        // Tell the application to render
        setResourcesLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (resourcesIsLoaded) {
      // Hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [resourcesIsLoaded]);

  return resourcesIsLoaded ? (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  ) : null;
}
