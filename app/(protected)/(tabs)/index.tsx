import MarketHistory from "@/components/market/MarketHistory";
import ScreenHeader from "@/components/ScreenHeader";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Home = () => {
    return (
        // <SafeAreaView style={styles.safeArea}>
        //     </SafeAreaView>
            <ThemedSafeAreaView style={styles.safeArea}>
                <ScreenHeader title="Recent Market Runs" />
                <GestureHandlerRootView>
                    <MarketHistory />
                </GestureHandlerRootView>
            </ThemedSafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // backgroundColor: colors.primaryWhite,
        padding: 16,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})