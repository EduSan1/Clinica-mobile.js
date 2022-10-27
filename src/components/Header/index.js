import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = ({ text }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Symbian</Text>
            <Text style={styles.subTitle}>Bem-vindo</Text>
            {text && <Text style={styles.subTitle}>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "auto",
        paddingTop: 30,
        display: "flex",
        alignContent: "center",
        justifyContent: "space-around",
        marginBottom: 10,
        backgroundColor: "#d1d1fc",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        color: "#616afc",
        fontWeight: "500",
        marginBottom: 25,
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#616afc",
        fontWeight: "300",
        marginBottom: 25,
    },
});
