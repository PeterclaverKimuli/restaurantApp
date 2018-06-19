import { Navigation } from 'react-native-navigation';

import LoginScreen from './login/Login';
import HomePageScreen from './homepage/HomePage';
import MenuScreen from './menu/Menu';
import DrawerScreen from './drawer/Drawer';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('restaurantApp.Login', () => LoginScreen);
  Navigation.registerComponent('restaurantApp.HomePage', () => HomePageScreen);
  Navigation.registerComponent('restaurantApp.Menu', () => MenuScreen);
  Navigation.registerComponent('restaurantApp.Drawer', () => DrawerScreen);
}