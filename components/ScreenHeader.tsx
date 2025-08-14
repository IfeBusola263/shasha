import { type ScreenHeaderProps } from "@/types";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const ScreenHeader = ({title}: ScreenHeaderProps) => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>{title}</ThemedText>
        </ThemedView>
    )
}

export default ScreenHeader;

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    }
})