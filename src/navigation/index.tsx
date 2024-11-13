import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import HomeScreen from "../screen/Home/HomeScreen";
import TransactionDetails from "../screen/TransactionDetails";
import AddTransaction from "../screen/AddTransaction";
import SplashScreen from "../screen/splash";
import Settings from "../screen/Settings";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title:"Home",
            headerShown:false
          }}
        />
        <Stack.Screen 
          name="TransactionDetails"
          component={TransactionDetails}
          options={{
            title:"Details"
          }}
        />
        <Stack.Screen 
          name="AddTransaction"
          component={AddTransaction}
          options={{
            title:"Add New Transaction"
          }}
        />
        <Stack.Screen 
        name="Settings"
        component={Settings}
        options={{
          title:"Settings"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
