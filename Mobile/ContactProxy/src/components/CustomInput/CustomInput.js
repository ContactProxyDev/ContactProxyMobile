import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form';

 const CustomInput = ({control, rules = {}, placeholder, name, secureTextEntry,  type = 'SIGNIN'}) => {
    return (
        <Controller
            control = {control}
            name = {name}
            rules = {rules}
            render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View style={[styles.container, styles[`container_${type}`], {borderColor: error ? 'red' : '#000'}]}>
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur = {onBlur}
                            placeholder={placeholder} 
                            secureTextEntry={secureTextEntry}
                            style={styles.input}
                        />
                    </View>
                    {error && (<Text style={styles[`errorText_${type}`]}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '72%',

        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        
        marginVertical: 5,
        paddingHorizontal: 10,
    },

    container_SIGNIN:{
        top: '20%',
    },

    container_SIGNUP:{
        top: '8%',
    },
    
    input: {
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 20,
    },

    errorText_SIGNIN: {
        top: '20%',
        color: 'red',
        width: '100%',
        alignSelf: 'stretch',
        paddingHorizontal: '15%',
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 16,
    },
    errorText_SIGNUP: {
        top: '8%',
        color: 'red',
        width: '100%',
        alignSelf: 'stretch',
        paddingHorizontal: '15%',
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 16,
    }
})

export default CustomInput