import React from "react";
import { Text, Pressable, StyleSheet, Dimensions } from "react-native";

const Button = ({action, title}) => {

    return (
        <Pressable style={styles.container} onPress={() => action()}>
            <Text  style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container : {
        width:Dimensions.get("window").width * 0.8,
        height:Dimensions.get("window").height * 0.07,
        backgroundColor: "#f1f1fc",
        borderColor: "#a1aafc",
        borderWidth: 3,
        borderRadius:20,
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
    },
    text : {
        fontSize:16,
        color: "#616afc",
        fontWeight:"400"
    }
})

export default Button