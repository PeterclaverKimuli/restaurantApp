import { Navigation } from 'react-native-navigation';

import LoginScreen from './login/Login';
import HomePageScreen from './homepage/HomePage';
import MenuScreen from './menu/Menu';
import AddMenuItemScreen from './menu/AddMenuItem';
import DrawerScreen from './drawer/Drawer';
import BranchScreen from './branch/Branch';
import ChooseEmployeeScreen from './branch/ChooseEmployee';
import TransactionScreen from './transactions/Transactions';
import InventoryScreen from './inventory/Inventory';
import InputInfoScreen from './employees/InputInfo';
import EmployeeInfoScreen from './employees/EmployeeInfo';
import ManagerScreen from './employees/managers/Managers';
import ManagerSearchScreen from './employees/managers/SearchManagers'
import ManagerCustomButton from './employees/managers/SearchButton'
import WaiterScreen from './employees/waiters/Waiters';
import WaiterSearchScreen from './employees/waiters/SearchWaiters'
import CustomButton from './employees/waiters/SearchButton'
import ChangePasswordScreen from './login/ChangePassword'
import AddButton from './buttons/AddButton';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('restaurantApp.Login', () => LoginScreen);
  Navigation.registerComponent('restaurantApp.HomePage', () => HomePageScreen);
  Navigation.registerComponent('restaurantApp.Menu', () => MenuScreen);
  Navigation.registerComponent('restaurantApp.AddMenuItem', () => AddMenuItemScreen);
  Navigation.registerComponent('restaurantApp.Drawer', () => DrawerScreen);
  Navigation.registerComponent('restaurantApp.Branch', () => BranchScreen);
  Navigation.registerComponent('restaurantApp.ChooseEmployee', () => ChooseEmployeeScreen);
  Navigation.registerComponent('restaurantApp.Transactions', () => TransactionScreen);
  Navigation.registerComponent('restaurantApp.Inventory', () => InventoryScreen);
  Navigation.registerComponent('restaurantApp.EmployeeInfo', () => EmployeeInfoScreen);
  Navigation.registerComponent('restaurantApp.InputInfo', () => InputInfoScreen);
  Navigation.registerComponent('restaurantApp.Managers', () => ManagerScreen);
  Navigation.registerComponent('restaurantApp.SearchManagers', () => ManagerSearchScreen);
  Navigation.registerComponent('ManagerCustomButton', () => ManagerCustomButton);
  Navigation.registerComponent('restaurantApp.Waiters', () => WaiterScreen);
  Navigation.registerComponent('restaurantApp.SearchWaiters', () => WaiterSearchScreen);
  Navigation.registerComponent('CustomButton', () => CustomButton);
  Navigation.registerComponent('restaurantApp.ChangePassword', () => ChangePasswordScreen);
  Navigation.registerComponent('AddButton', () => AddButton);
}