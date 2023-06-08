import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          
            <NavigationContainer>
            style={styles.button}
                onPress={() =>
                    navigation.navigate("MapStack", { screen: "Maps" })
                }
            
                <Text>Go to Map Tab</Text>
            </NavigationContainer>
            <NavigationContainer>
            style={styles.button}
                onPress={() =>
                    navigation.navigate("SettingsStack", { screen: "Settings" })
                }
            </NavigationContainer>
            <NavigationContainer>
            style={styles.button}
                onPress={() =>
                    navigation.navigate("CollectionStack", {
                        screen: "Collection",
                    })
                }
            </NavigationContainer>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
