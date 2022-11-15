import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SetPasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    
    const navigation = useNavigation();

    const onResetPressed = () => {
        navigation.navigate('SignIn'); 
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
                placeholder = 'Новый пароль' 
                value = {password} 
                setValue = {setPassword} 
                secureTextEntry = {true}
                type = 'SIGNUP'
            />

            <CustomInput 
                placeholder = 'Подтвердите пароль' 
                value = {repeatPassword} 
                setValue = {setRepeatPassword} 
                secureTextEntry = {true}
                type = 'SIGNUP'
            />
            
            <CustomButton
                text = "Подтвердить"
                onPress = {onResetPressed}
                type = "PRIMARY_SIGNUP"
            />

            <CustomButton 
                text = "Вернуться к авторизации"
                onPress = {onBackSignInPressed}
                type = "TERTIARY_SIGNIN"
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
    container: {
        top: '12%',
        alignItems: 'center',
        
    }
})

export default SetPasswordScreen