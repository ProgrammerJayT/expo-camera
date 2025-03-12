import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import QrCodeScreen from "../screens/qr-code";
import PermitScreen from "../screens/permit";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan QR Code" component={QrCodeScreen} />
        <Stack.Screen name="Scan Permit" component={PermitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouteStack;
