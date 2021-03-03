import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './src/pages/Loading/index'

const authStackNavigation = createSwitchNavigator(
  {
    Loading: LoadingScreen
    // login
    // register
  },
  {
    initialRouteName: 'Loading',
    navigationOptions: {
      headerShown: false
    }
  }
)

const mainStackNavigator = createStackNavigator(
  {
    authStack: authStackNavigation,
  },
  {
    initialRouteName: 'authStack',
  }
)

export default createAppContainer(mainStackNavigator)
