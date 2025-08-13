import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from "react-native";
import 'react-native-reanimated';

const RootLayout = () => {
    const colorScheme = useColorScheme();
      const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });
    
      if (!loaded) {
        // Async font loading only occurs in development.
        return null;
      }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <StatusBar style="auto" />
            <Stack>
                <Stack.Screen name="(protected)" options={{ headerShown: false }} />
                <Stack.Screen name="login/index" />
                <Stack.Screen name="+not-found" />
            </Stack>
        </ThemeProvider>
    );
};

export default RootLayout;
