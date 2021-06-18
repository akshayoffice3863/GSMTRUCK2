// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//IMPORT PATH
import Login from './src/screens/Login';
import BookingDetails from './src/screens/BookingDetails';
import SideBar from './src/screens/Drawer';
import Splash from './src/screens/SplashScreen';
import BookingSchedule from "./src/screens/BookingSchedule";
import DropPickup from "./src/screens/DropPickup";
import ShortTask from "./src/screens/ShortTask";
import Profile from "./src/screens/Profile";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{width: '100%'}}
      drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="BookingSchedule" component={BookingSchedule} />
      <Drawer.Screen name="BookingDetails" component={BookingDetails} />
      <Drawer.Screen name="DropPickup" component={DropPickup} />
      <Drawer.Screen name="ShortTask" component={ShortTask} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookingSchedule"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
