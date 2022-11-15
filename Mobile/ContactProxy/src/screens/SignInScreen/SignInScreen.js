import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, SafeAreaView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";


const SignInScreen = () => {
    const navigation = useNavigation(); 

    const {
        control, 
        handleSubmit,  
        formState: {errors}
    } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        console.warn('Sign in'); 
    }

    const OnForgotPasswordPressed = () => {
        
        navigation.navigate('ConfirmResetPassword');
    }

    const OnRegButtonPressed = () => {

        navigation.navigate('SignUp');
    }


    return (
        
        <View style={styles.container}>
            
            <Text style={styles.logo}>
                Contact Proxy
            </Text>
            
            <CustomInput
                name = 'email'
                placeholder = 'Почта'
                control = {control} 
                secureTextEntry = {false}
                rules = {{required: 'Это обязательное поле',}}
            />
            <CustomInput 
                name = 'password'
                placeholder = 'Пароль'
                control = {control} 
                secureTextEntry = {true}
                rules = {{
                    required: 'Это обязательное поле', 
                }}
            />

            <CustomButton
                text = 'Авторизироваться'
                onPress={handleSubmit(onSignInPressed)}
            />

            <CustomButton
                text = 'Забыли пароль?'
                onPress={OnForgotPasswordPressed}
                type = 'TERTIARY_SIGNIN'
            />

            <CustomButton
                text = 'Еще не зарегистрированы?'
                onPress={OnRegButtonPressed}
                type = 'TERTIARY_SIGNIN'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: 'Equinox-Bold',
        fontSize: 35,
        color: '#000'
        //paddingRight: '10%',
        //paddingLeft: '10%',
        
    },
    container: {
        flex: 1,
        top: '12%',
        alignItems: 'center',
        
    },
    
})

export default SignInScreen