import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { StyleSheet } from "react-native"

const NewRunScreen = () => {
    return (
        // <SafeAreaView style={styles.safeArea}>
        // </SafeAreaView>
        <ThemedSafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                <ThemedText type="title">New Market Run Screen!</ThemedText>
            </ThemedView>
        </ThemedSafeAreaView>
    )
}

export default NewRunScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // backgroundColor: colors.primaryWhite,
        padding: 16
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})