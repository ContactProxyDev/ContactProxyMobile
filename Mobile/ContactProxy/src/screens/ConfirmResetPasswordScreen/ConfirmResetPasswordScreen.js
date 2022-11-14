import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ConfirmResetPasswordScreen = () => {
    const {
        control, 
        handleSubmit,  
        formState: {errors}
    } = useForm();

    const navigation = useNavigation();

    const onResetPressed = () => {
        navigation.navigate('Message'); 
    }

    const onBackSignInPressed = () => {
        navigation.navigate('SignIn');     
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>
                Сброс пароля
            </Text>
            
            <CustomInput 
                name = 'email'
                placeholder = 'Почта'  
                secureTextEntry = {false}
                control = {control}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                    pattern: {value: EMAIL_REGEX, message: 'Некорректный адрес почты'}
                }}
            />

            <CustomButton
                text = 'Подтвердить'
                onPress = {handleSubmit(onResetPressed)}
                type = 'PRIMARY_SIGNUP'
            />

            <CustomButton 
                text = 'Вернуться к авторизации'
                onPress = {onBackSignInPressed}
                type = 'TERTIARY_SIGNIN'
            />

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 35,
        color: '#000'
        //paddingRight: '10%',
        //paddingLeft: '10%',
        
    },
    container: {
        top: '12%',
        alignItems: 'center',
        
    }
})

export default ConfirmResetPasswordScreen