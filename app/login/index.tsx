import ScreenHeader from "@/components/ScreenHeader";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
    const { handleLogin } = useAuth();
    const [secureText, setSecureText] = useState<boolean>(true);

    const handleShowPassword = () => {
        setSecureText(!secureText);
    }

    return (
        <SafeAreaView style={styles.SAV}>
            <ScreenHeader title="Login" />
            <ThemedView style={styles.container}>
                <TextInput style={styles.input} placeholder="Email" />
                <ThemedView style={styles.input}>
                <TextInput placeholder="Password" secureTextEntry={secureText} />
                <Pressable onPress={handleShowPassword}>

                </Pressable>
                </ThemedView>
                <Pressable onPress={handleLogin}>
                    <Text>Login</Text>
                </Pressable>
            </ThemedView>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    SAV: {
        ...Colors.background,
        flex: 1,
        padding: 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        ...Colors.background,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
        width: '100%',
    }
})