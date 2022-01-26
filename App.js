import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AppDrawerNaviagtor } from './component/AppDrawerNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './component/AppTabNavigator'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator}
  //Drawer: {screen: AppDrawerNavigator},
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})