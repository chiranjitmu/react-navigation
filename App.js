import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import Status from "./components/Status";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={
         {
          headerShown: false,
        }
        }/>
        <Stack.Screen name="Status" component={Status}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;