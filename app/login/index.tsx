import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AppBackground from "@/components/ui/AppBackground";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { colors, Colors } from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

const LoginScreen = () => {
    const { handleLogin } = useAuth();
    const [secureText, setSecureText] = useState<boolean>(true);

    const handleShowPassword = () => {
        setSecureText(!secureText);
    }

    return (
                <AppBackground>
                <ThemedText type="title" style={styles.title}>Shasha</ThemedText>
                <ThemedView style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        placeholderTextColor={colors.primaryWhite}
                    />

                    <ThemedView style={[styles.input, styles.passwordContainer]}>
                        <TextInput 
                            style={styles.passwordInput} 
                            placeholder="Password" 
                            secureTextEntry={secureText} 
                            placeholderTextColor={colors.primaryWhite}
                        />
                        <Pressable  
                            onPress={handleShowPassword}
                        >
                            <Entypo name={secureText ? "eye-with-line" : "eye"} size={24} color={colors.primaryWhite} />
                        </Pressable>
                    </ThemedView>
                </ThemedView>

                {/* Login */}
               <PrimaryButton label="Login" onPress={handleLogin} />
                </AppBackground>

    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    SAV: {
        ...Colors.background,
        flex: 1,
        padding: 16,
    },
    title: {
        fontFamily: 'IBMBold',
        alignSelf: 'flex-start',
        color: 'white',
    },
    input: {
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        fontFamily:"IBMMedium",
        color: colors.primaryWhite
    },
    inputContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        paddingTop: '65%'
    },
    passwordContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        // marginBottom: 20
    },
    passwordInput: {
        width: '90%',
        fontSize: 16,
        fontFamily:"IBMMedium",
        color: colors.primaryWhite
    },
})