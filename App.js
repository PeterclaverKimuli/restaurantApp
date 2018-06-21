import React from 'react';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
    screen:{
      screen: 'restaurantApp.Waiters',
      title: 'Login'
    },
    drawer: {
      // optional, add this if you want a side menu drawer in your app
      left: {
        // optional, define if you want a drawer from the left
        screen: 'restaurantApp.Drawer', // unique ID registered with Navigation.registerScreen
        passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
        disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
        fixedWidth: 600, // a fixed width you want your left drawer to have (optional)
        disableCloseGesture: true
      }
    }
});