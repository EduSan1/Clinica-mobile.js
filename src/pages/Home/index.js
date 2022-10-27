import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ToastAndroid,
    useColorScheme,
    View,
    Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import api from "../../constants/api";
import Button from "../../components/Button";
import { HomeCard } from "./Card";

export const HomePage = ({ navigation }) => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        api.get("/patient").then((res) => {
            setPatients(res.data.data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Pacientes</Text>

            <ScrollView style={styles.cardContainer}>
                {patients.map((patient) => {
                    return <HomeCard patient={patient} />;
                })}
            </ScrollView>
            <Button
                action={() => navigation.navigate("Register")}
                title={"Cadastrar novo paciente"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get("window").height,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#f3f3ff",
        paddingBottom: 40,
    },
    cardContainer: {
        width: "90%",
        overflow: "hidden",
        marginTop: 30,
        marginBottom: 30,
    },
    title: {
        width: "90%",
        fontSize: 25,
        color: "#616afc",
        marginTop: 20,
        marginBottom: 20,
        fontWeight: "500",
    },
    card: {
        width: "100%",
        height: "auto",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#d1d1fc",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        borderColor: "#a1aafc",
        borderWidth: 3,
        borderRadius: 20,
        marginBottom: 20,
    },
    textCard: {
        width: "100%",
        // height: Dimensions.get("window").height * 0.03,
        // textAlignVertical: "center",
        fontSize: 16,
        color: "#616afc",
        fontWeight: "300",
    },
});
