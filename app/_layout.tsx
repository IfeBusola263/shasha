import { store } from '@/state/store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from "react-native";
import 'react-native-reanimated';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const colorScheme = useColorScheme();
      const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });


      useEffect(() => {
          if (loaded){
            SplashScreen.hideAsync()
          }
      
        }, [loaded])

      
      if (!loaded) {
        // Async font loading only occurs in development.
        return null;
      }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <StatusBar style="auto" />
            <Provider store={store}>
            <Stack screenOptions={{
              animation: 'none'
            }}>
                <Stack.Screen name="(protected)" options={{ headerShown: false }} />
                <Stack.Screen name="login/index" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>

            </Provider>
        </ThemeProvider>
    );
};

export default RootLayout;
