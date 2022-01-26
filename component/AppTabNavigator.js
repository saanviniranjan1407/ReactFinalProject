import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import medicineReminder from '../screens/medicineReminder';
import calorieCalculator from '../screens/calorieCalculator';

export const AppTabNavigator = createBottomTabNavigator({
    medicineReminder: {
        screen: medicineReminder,
        navigationOpitions: {
            tabBarLabel: "Medicine Reminder",
            tabBarIcon: <Image source={require("../assets/apple.png")} style={{width: 20, height: 20}}/>
        }
    },

    calorieCalculator: {
        screen: calorieCalculator,
        navigationOpitions: {
            tabBarLabel: "Calorie Calculator",
            tabBarIcon: <Image source={require("../assets/apple.png")} style={{width: 20, height: 20}}/>
        }
    }
})