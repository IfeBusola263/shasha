import { Colors, colors } from "@/constants/Colors"
import { PrimaryButtonProps } from "@/types"
import { Pressable, StyleSheet } from "react-native"
import { ThemedText } from "../ThemedText"

const PrimaryButton = ({label, onPress}: PrimaryButtonProps) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <ThemedText style={styles.label}>{label}</ThemedText>
        </Pressable>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        fontFamily: 'IBMMedium',
        // marginTop: '26%'
    },
    label: {
        color: Colors.light.background,
        fontFamily: 'IBMRegular'
    }


})
