import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry,  type = 'SIGNIN'}) => {
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
        <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry}
            style={styles.input}
        />
    </View>
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
        top: '60%',
    },

    container_SIGNUP:{
        top: '20%',
    },
    
    input: {
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 20,
    },
})

export default CustomInput