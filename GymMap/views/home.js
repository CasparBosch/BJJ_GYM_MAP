//imports
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

//home function, hold navigation buttons
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text
                style={styles.button}
                onPress={() => navigation.navigate("Map", { screen: "Maps" })}
            >
                Map
            </Text>

            <Text
                style={styles.button}
                onPress={() =>
                    navigation.navigate("Settings", {
                        screen: "Settings",
                    })
                }
            >
                Settings
            </Text>

            <Text
                style={styles.button}
                onPress={() =>
                    navigation.navigate("Collection", {
                        screen: "Collection",
                    })
                }
            >
                Collection
            </Text>
        </View>
    );
}

//style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
