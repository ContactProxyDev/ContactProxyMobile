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
        top: '60%',
        backgroundColor: '#222226',
    },

    container_TERTIARY_SIGNIN: {
        top: '78%',
        marginVertical: 0,
        width: '100%',
    },

    container_PRIMARY_SIGNUP: {
      top: '20%',
      backgroundColor: '#222226',
    },

    container_TERTIARY_SIGNUP: {
      top: '38%',
      marginVertical: 0,
      width: '100%',
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