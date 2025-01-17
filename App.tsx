import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoadingScreen from './src/pages/Loading/index'
import CatalogoScreen from './src/pages/Catalogo/index'
import Header from './src/components/Header/index'
import Drawer from './src/components/Drawer'
import BuscaScreen from './src/pages/Busca';
import DetalhesScreen from './src/pages/Detalhes';
import FinalizarCompraScreen from './src/pages/FinalizarCompra';
import CompraFinalizadaScreen from './src/pages/CompraFinalizada';
import LoginScreen from './src/pages/Login';
import RegisterScreen from './src/pages/Register';

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Loading" component={LoadingScreen} options={{
        headerShown: false
      }} />
      <AuthStack.Screen name="Login" component={LoginScreen} options={{
        headerShown: true,
        header: Header
      }} />
      <AuthStack.Screen name="Register" component={RegisterScreen} options={{
        headerShown: true,
        header: Header,

      }} />
    </AuthStack.Navigator>
  )
}

const MainDrawerScreen = () => {
  return (
    <MainDrawer.Navigator drawerPosition={'right'} drawerContent={(props) => <Drawer {...props} />}>
      <MainDrawer.Screen name="Catalogo" component={CatalogoScreen} options={{
        headerShown: true,
        header: Header
      }} />
      <MainDrawer.Screen name="Busca" component={BuscaScreen} options={{
        headerShown: true,
        header: Header
      }} />
      <MainDrawer.Screen name="Detalhes" component={DetalhesScreen} options={{
        headerShown: true,
        header: Header
      }} />
      <MainDrawer.Screen name="FinalizarCompra" component={FinalizarCompraScreen} options={{
        headerShown: true,
        header: Header
      }} />
      <MainDrawer.Screen name="CompraFinalizada" component={CompraFinalizadaScreen} options={{
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
