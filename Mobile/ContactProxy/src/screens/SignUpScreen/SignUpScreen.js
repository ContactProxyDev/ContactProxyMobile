import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";


const SignUpScreen = () => {
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
                Регистрация
            </Text>
            
            <CustomInput 
                placeholder = "Имя" 
                value = {username} 
                setValue = {setUsername} 
                secureTextEntry = {false}
                type = 'SIGNUP'
            />
            <CustomInput 
                placeholder = "Фамилия" 
                value = {password} 
                setValue = {setPassword} 
                secureTextEntry = {false}
                type = 'SIGNUP'
            />
            <CustomInput 
                placeholder = "Почта" 
                value = {password} 
                setValue = {setPassword} 
                secureTextEntry = {false}
                type = 'SIGNUP'
            />
            <CustomInput 
                placeholder = "Пароль" 
                value = {password} 
                setValue = {setPassword} 
                secureTextEntry = {true}
                type = 'SIGNUP'
            />
            <CustomInput 
                placeholder = "Повторите пароль" 
                value = {password} 
                setValue = {setPassword} 
                secureTextEntry = {true}
                type = 'SIGNUP'
            />

            <CustomButton
                text = "Зарегистрироваться"
                onPress = {onSignInPressed}
                type = "PRIMARY_SIGNUP"
            />

            <CustomButton
                text = "Уже есть аккаунт? Войти"
                onPress = {onSignInPressed}
                type = "TERTIARY_SIGNUP"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: "SF-Pro-Display-Light",
        fontSize: 35,
        color: '#000'
        //paddingRight: '10%',
        //paddingLeft: '10%',
        
    },
    SignInScreen: {
        top: 30,
        alignItems: 'center',
        paddingTop: '10%',
        
    }
})

export default SignUpScreen