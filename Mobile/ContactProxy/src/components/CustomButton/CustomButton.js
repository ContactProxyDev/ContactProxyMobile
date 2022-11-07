import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'

const Custombutton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        top: '60%',
        borderColor: '#000',
        borderRadius: 5,
        width: '72%',
        padding: 7,
        marginVertical: 5,
        alignItems: 'center',
    },

    container_PRIMARY: {
        backgroundColor: '#222226',
    },

    container_TERTIARY: {
        top: '78%',
        marginVertical: 0,
        width: '100%',
    },
    
    text: {
        fontFamily: 'SF-Pro-Display-Light',
        fontSize: 20,
        color: '#e8e8e8',    
        fontWeight: '500'    
    },
    
    text_TERTIARY: {
        color: 'gray',
    },
})

export default Custombutton