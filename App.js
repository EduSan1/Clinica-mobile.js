import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { HomePage } from "./src/pages/Home";
import RegisterPage from "./src/pages/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <SafeAreaView>
        //     <StatusBar />
        //     <ScrollView contentInsetAdjustmentBehavior="automatic">
        //         <HomePage></HomePage>
        //     </ScrollView>
        // </SafeAreaView>

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Register" component={RegisterPage} />
            </Stack.Navigator>
        </NavigationContainer>
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
