/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import HomeScreen from './src/screen/HomeScreen'
import DetailsScreen from './src/screen/DetailsScreen'
import ItemScreen from './src/screen/ItemScreen'
import SelectSpaceScreen from './src/screen/SelectSpaceScreen'
import ChangeBGScreen from './src/screen/ChangeBGScreen'
import FetchExampleScreen from './src/screen/FetchExampleScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

const App = () => <RootStack />

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Item: ItemScreen,
    SelectSpace: SelectSpaceScreen,
    Details: DetailsScreen,
    FetchExample: FetchExampleScreen,
  },
  {
    initialRouteName: 'Home',
  },
)

const MyApp = createDrawerNavigator({
  Home: RootStack,
  Item: ItemScreen,
  SelectSpace: SelectSpaceScreen,
  ChangBackGround: ChangeBGScreen,
  FetchExample: FetchExampleScreen,
})

export default MyApp
