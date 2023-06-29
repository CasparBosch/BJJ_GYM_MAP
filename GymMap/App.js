// imports React
import React, {StrictMode} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { createRoot } from "react-dom/client";

//import components
import "./src/index.css"
import Map from "./views/map.js";
import Settings from "./views/settings.js";
import Collection from "./views/collection.js";
import Home from "./views/home.js";
import SideBar from "./src/components/SideBar/index.jsx";
import Channelbar from "./src/components/ChannelBar/index.jsx";
import ContentContainer from "./src/components/ContentContainer/index.jsx";

import App from './App';

const root = document.getElementById('root');

const Stack = createNativeStackNavigator();

//main app function

    createRoot (
        //navigation container
        <StrictMode>
            <App />
            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Map" component={Map} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Collection" component={Collection} />
                </Stack.Navigator>
            </NavigationContainer> */}
        </StrictMode>,
        root
    );

