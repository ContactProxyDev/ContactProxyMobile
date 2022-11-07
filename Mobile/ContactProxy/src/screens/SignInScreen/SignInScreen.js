import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSignInPressed = () => {
        console.warn("Sign in"); 
    }

    const OnForgotPasswordPressed = () => {
        console.warn("password is forgotten");
    }

    const OnRegButtonPressed = () => {
        console.warn("reg");
    }


    return (
        <View style={styles.SignInScreen}>
            <Text style={styles.logo}>
                Contact Proxy
            </Text>
            
            <CustomInput 
                placeholder="Логин" 
                value={username} 
                setValue={setUsername} 
                secureTextEntry = {false}
            />
            <CustomInput 
                placeholder="Пароль" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry = {true}
            />
            <CustomButton
                text = "Авторизироваться"
                onPress={onSignInPressed}
            />

            <CustomButton
                text = "Забыли пароль?"
                onPress={OnForgotPasswordPressed}
                type = "TERTIARY"
            />

            <CustomButton
                text = "Еще не зарегистрированы?"
                onPress={OnRegButtonPressed}
                type = "TERTIARY"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: "Equinox-Bold",
        fontSize: 35,
        color: '#000'
        //paddingRight: '10%',
        //paddingLeft: '10%',
        
    },
    SignInScreen: {
        top: 100,
        alignItems: 'center',
        paddingTop: '10%',
        
    }
})

export default SignInScreen