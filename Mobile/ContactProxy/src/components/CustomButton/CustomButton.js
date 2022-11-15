import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'

const Custombutton = ({onPress, text, type = 'PRIMARY_SIGNIN'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderRadius: 5,
        width: '72%',
        padding: 7,
        marginVertical: 5,
        alignItems: 'center',
    },

    container_PRIMARY_SIGNIN: {
        top: '20%',
        backgroundColor: '#222226',
    },

    container_TERTIARY_SIGNIN: {
        top: '40%',
        marginVertical: 0,
        width: '100%',
    },

    container_PRIMARY_SIGNUP: {
      top: '12%',
      backgroundColor: '#222226',
    },

    container_TERTIARY_SIGNUP: {
      top: '13%',
      marginVertical: 0,
      width: '100%',
    },
    
    container_SECONDARY: {
      top: '20%',
      marginVertical: 5,
      padding: 5,
      borderColor: '#000',
      borderWidth: 2,
    },

    text_SECONDARY: {
      color: '#000'
    },

    text: {
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 23,
        color: '#e8e8e8',    
        fontWeight: '500'    
    },
    
    text_TERTIARY_SIGNIN: {
        color: 'gray',
    },

    text_TERTIARY_SIGNUP: {
      color: 'gray',
  },


})

export default Custombutton