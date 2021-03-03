import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoadingScreen from './src/pages/Loading/index'
import CatalogoScreen from './src/pages/Catalogo/index'
import Header from './src/components/Header/index'
import Drawer from './src/components/Drawer'

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Loading" component={LoadingScreen} options={{
        headerShown: false
      }} />
    </AuthStack.Navigator>
  )
}

const MainDrawerScreen = () => {
  return (
    <MainDrawer.Navigator drawerPosition={'right'} drawerContent={(props) => <Drawer {...props} />}>
      <MainDrawer.Screen name="Profile" component={CatalogoScreen} options={{
        headerShown: true,
        header: Header
      }} />
    </MainDrawer.Navigator>
  )
}

export default () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen name="Auth" component={AuthStackScreen} options={{
        headerShown: false
      }} />
      <MainStack.Screen name="Main" component={MainDrawerScreen} options={{
        headerShown: false
      }} />
    </MainStack.Navigator>
  </NavigationContainer>
)
