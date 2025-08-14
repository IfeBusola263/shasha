import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { colors, Colors } from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import Entypo from '@expo/vector-icons/Entypo';
import { ImageBackground } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";

const LoginScreen = () => {
    const { handleLogin } = useAuth();
    const [secureText, setSecureText] = useState<boolean>(true);

    const handleShowPassword = () => {
        setSecureText(!secureText);
    }

    return (
            <ImageBackground 
                style={styles.container} 
                source={require('@/assets/images/shasha.png')}
                imageStyle={styles.imageStyle}
            >
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
                <Pressable style={styles.login} onPress={handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </ImageBackground>
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
        justifyContent: 'space-around',
        alignItems: "center",
        ...Colors.background,
        gap: 20,
        padding: 16,
        // paddingBottom: '25%',
        // backgroundColor: 'black'
        // borderColor: 'black',
        // borderWidth:10
    },
    imageStyle: {
        // top: -110,
        right: -90,
        // height: '80%'
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
    login: {
        backgroundColor: colors.primary,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        fontFamily: 'IBMMedium',
        // marginTop: '26%'
    },
    loginText: {
        color: Colors.light.background,
        fontFamily: 'IBMRegular'
    }

})