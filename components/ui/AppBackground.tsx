import { Colors } from "@/constants/Colors";
import { ImageBackground } from "expo-image";
import { type ReactNode } from "react";
import { StyleSheet } from "react-native";

type AppBackgroundProps = {
    children: ReactNode
}

const AppBackground = ({children}: AppBackgroundProps) => {
    return (
        <ImageBackground 
            style={styles.container} 
            source={require('@/assets/images/shasha.png')}
            imageStyle={styles.imageStyle}
        >
            {children}
        </ImageBackground>

    )
}

export default AppBackground;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center",
        ...Colors.background,
        gap: 20,
        padding: 16,
    },
    imageStyle: {
        right: -90,
    },
})