/*
    Main entry point for program. Contains routes to various screens
*/

import React, {Fragment, useState, useRef} from 'react';
import MessageScreen from "./MessageScreen.tsx"
import Lobby from "./Lobby.tsx"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
          <Fragment>
              <Stack.Navigator initialRouteName = "Home">
                    <Stack.Screen name = "Home" component = {MessageScreen}/>
                    <Stack.Screen name = "Lobby" component = {Lobby}/>
              </Stack.Navigator>
           </Fragment>
       </NavigationContainer>
  );
};

export default App;

