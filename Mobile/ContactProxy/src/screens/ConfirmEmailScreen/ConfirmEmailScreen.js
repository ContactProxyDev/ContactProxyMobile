import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const ConfirmEmailScreen = () => {
    const {
        control, 
        handleSubmit,  
        formState: {errors}
    } = useForm();

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        console.warn('go to your cards)'); 
    }

    const onBackSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onResendCodePressed = () => {
        console.warn('resend');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>
                Подтверждение почты
            </Text>
            
            <CustomInput
                name = 'code'
                placeholder = 'Код' 
                secureTextEntry = {false}
                control = {control}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                }}
            />

            <CustomButton
                text = 'Подтвердить'
                onPress = {handleSubmit(onConfirmPressed)}
                type = 'PRIMARY_SIGNUP'
            />

            <CustomButton 
                text = 'Отправить код повторно'
                onPress = {onResendCodePressed}
                type = 'SECONDARY'
            />

            <CustomButton 
                text = 'Вернутся к авторизации'
                onPress = {onBackSignInPressed}
                type = 'TERTIARY_SIGNUP'
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

export default ConfirmEmailScreen