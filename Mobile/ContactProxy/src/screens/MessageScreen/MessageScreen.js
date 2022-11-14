import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const MessageScreen = () => {
    const navigation = useNavigation();
  
    const onOkPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Проверте почту :D</Text>

            <CustomButton
                text = 'Окей'
                onPress = {onOkPressed}
                type = 'PRIMARY_SIGNIN'
            />  
              
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: '12%',
        alignItems: 'center',
    },

    text: {
        fontFamily: "SF-Pro-Display-Light",
        fontSize: 35,
        color: '#000'
    },

})

export default MessageScreen