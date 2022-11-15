import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {
        control, 
        handleSubmit,  
        formState: {errors},
        watch
    } = useForm();

    const pwd = watch('password');

    const navigation = useNavigation();

    const onSignUpPressed = (data) => {
        console.warn('sign up');
    }

    const OnAuthButtonPressed = () => {
        navigation.navigate('SignIn');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>
                Регистрация
            </Text>
            
            <CustomInput 
                name = 'name'
                placeholder = 'Имя'
                control = {control} 
                secureTextEntry = {false}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                }}
            />

            <CustomInput 
                name = 'sername'
                placeholder = 'Фамилия'
                control = {control}
                secureTextEntry = {false}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                }}
            />

            <CustomInput 
                name = 'email'
                placeholder = 'Почта'
                control = {control}
                secureTextEntry = {false}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                    pattern: {value: EMAIL_REGEX, message: 'Некорректный адрес почты'}
                }}
            />

            <CustomInput 
                name = 'password'
                placeholder = 'Пароль'
                control = {control}
                secureTextEntry = {true}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                    minLength: {
                        value: 3, 
                        message: 'Пароль должен быть длиной не меньше 3 символов'
                    },
                    maxLength: {
                        value: 24,
                        message: 'Пароль должен быть длинной не больше 24 символов'
                    }
                }}
            />

            <CustomInput 
                name = 'confirmPassword'
                placeholder = 'Повторите пароль'
                control = {control}
                secureTextEntry = {true}
                type = 'SIGNUP'
                rules = {{
                    required: 'Это обязательное поле', 
                    validate: value => value === pwd || 'Пароли не совпадают'
                }}
            />

            <CustomButton
                text = 'Зарегистрироваться'
                onPress = {handleSubmit(onSignUpPressed)}
                type = 'PRIMARY_SIGNUP'
            />

            <CustomButton
                text = 'Уже есть аккаунт? Войти'
                onPress = {OnAuthButtonPressed}
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
        
    },
    container: {
        flex: 1,
        top: '12%',
        alignItems: 'center',
    }
})

export default SignUpScreen