import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    View,
} from 'react-native';


const Input = ({ name, value, iconName, title, hasError, isMandatory, mask, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={isMandatory && hasError ? styles.titleError : styles.title}>{title}{isMandatory ? "* " : null}:</Text>
            <View style={isMandatory && hasError ? styles.inputErrorContainer : styles.inputContainer}>
                <MaterialIcons name={iconName} size={Dimensions.get("window").width * 0.05} color={isMandatory && hasError ? "#ff5a51" : "#616afc"} />
                <TextInput value={mask ? mask(value) : value} style={isMandatory && hasError ? styles.inputError : styles.input} name={name} {...props} autoCorrect={false} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.12,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 20

    },
    title: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.03,
        textAlignVertical: 'center',
        fontSize: 16,
        color: "#616afc",
        fontWeight: "300"
    },
    titleError: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.03,
        textAlignVertical: 'center',
        fontSize: 16,
        color: "#ff5a51",
        fontWeight: "300"
    },
    inputContainer: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.07,
        backgroundColor: "#f1f1fc",
        borderColor: "#a1aafc",
        borderBottomWidth: 3,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        color: "#616afc"
    },
    inputErrorContainer: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.07,
        backgroundColor: "#fff1f1",
        borderColor: "#ff5a51",
        borderBottomWidth: 3,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        color: "#ff5a51"
    },
    input: {
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").height * 0.07,
        paddingLeft: 10,
        color: "#616afc"
    },
    inputError: {
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").height * 0.07,
        paddingLeft: 10,
        color: "#ff5a51"
    }
});

export default Input;
