import { Navigation } from 'react-native-navigation';

import LoginScreen from './login/Login';
import HomePageScreen from './homepage/HomePage';
import MenuScreen from './menu/Menu';
import DrawerScreen from './drawer/Drawer';
import BranchScreen from './branch/Branch';
import TransactionScreen from './transactions/Transactions';
import InventoryScreen from './inventory/Inventory';
import ManagerScreen from './employees/Managers';
import WaiterScreen from './employees/Waiters';
import EmployeeInfoScreen from './employees/EmployeeInfo';
import CustomButton from './buttons/SearchButton';
import AddButton from './buttons/AddButton';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('restaurantApp.Login', () => LoginScreen);
  Navigation.registerComponent('restaurantApp.HomePage', () => HomePageScreen);
  Navigation.registerComponent('restaurantApp.Menu', () => MenuScreen);
  Navigation.registerComponent('restaurantApp.Drawer', () => DrawerScreen);
  Navigation.registerComponent('restaurantApp.Branch', () => BranchScreen);
  Navigation.registerComponent('restaurantApp.Transactions', () => TransactionScreen);
  Navigation.registerComponent('restaurantApp.Inventory', () => InventoryScreen);
  Navigation.registerComponent('restaurantApp.Managers', () => ManagerScreen);
  Navigation.registerComponent('restaurantApp.Waiters', () => WaiterScreen);
  Navigation.registerComponent('restaurantApp.EmployeeInfo', () => EmployeeInfoScreen);
  Navigation.registerComponent('CustomButton', () => CustomButton);
  Navigation.registerComponent('AddButton', () => AddButton);
}