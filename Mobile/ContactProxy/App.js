
import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native';
import Navigation from './src/navigation';


const App = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.root}>
                <Navigation/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC',
    },

});

export default App;
 