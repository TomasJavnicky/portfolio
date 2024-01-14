import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { userLoggedInAtom } from "./src/utils/atoms";
import { useAtomValue } from "jotai";

const Stack = createNativeStackNavigator();

const LoggedOutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const LoggedInStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
const App: React.FC = () => {
  const isUserLoggedIn = useAtomValue(userLoggedInAtom);
  return (
    <NavigationContainer>
      {isUserLoggedIn ? <LoggedInStack /> : <LoggedOutStack />}
    </NavigationContainer>
  );
};

export default App;
