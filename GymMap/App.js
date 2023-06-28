import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import Map from "./views/map.js";
import Settings from "./views/settings.js";
import Collection from "./views/collection.js";
import Home from "./views/home.js";
import SideBar from "./src/components/SideBar/index.jsx";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <div className="flex">

        <SideBar />
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Collection" component={Collection} />
            </Stack.Navigator>
        </NavigationContainer>
        </div>
    );
}
