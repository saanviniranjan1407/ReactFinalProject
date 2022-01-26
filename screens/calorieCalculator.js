import React from 'react';
import db from '../localdb'
import { StyleSheet, Text, View } from 'react-native';

export default class calorieCalculator extends React.Component{
    render(){
        console.log(db[bread])
        return(
            <View>
                <Text>Calorie Calculator</Text>
            </View>
        )
    }
}