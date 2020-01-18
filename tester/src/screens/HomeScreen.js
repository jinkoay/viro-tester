import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Home Screen</Text>
            <Button 
                onPress={() => navigation.navigate('Choose')}
                title="Go to Choose Screen"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      fontWeight: 'bold'
    }
});

export default HomeScreen;