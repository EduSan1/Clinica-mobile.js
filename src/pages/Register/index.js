import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

const RegisterPage = () => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        telephone: "",
        phone: "",
        mail: "",
        responsibleName: "",
        responsiblePhone: ""
    })

    // const [hasError, setHasError] = useState({
    //     name: false,
    //     telephone: false,
    //     phone: false,
    //     mail: false
    // })

    const [hasError, setHasError] = useState(false)

    const handlerOnChange = (text, input) => {
        setUserDetails({ ...userDetails, [input]: text })
    }

    const registerUser = () => {
        // for (let key of Object.keys(hasError)) {
        //     const error = hasError
        //     console.log("err => ", error)
        //     if (userDetails[key] === "") setHasError({[key] : true})

        //     // console.log(key, " => ", userDetails[key])
        // }

        if (userDetails.name === "" || userDetails.mail === "" || userDetails.phone === "" || userDetails.telephone === "") {
            setHasError(true)
            ToastAndroid.show("Responda todos os dados obrigatórios!", 10)
        } else {
            setHasError(false)
            ToastAndroid.show("Cadastro concluido com sucesso!", 10)
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.title}>Symbian</Text>
                <Text style={styles.subTitle}>Bem-vindo</Text>
                <Text style={styles.subTitle}>Para Continuar realize seu cadastro</Text>
            </View>
            <View>
                <Input isMandatory={true} hasError={hasError} iconName="person-outline" name="name" value={userDetails.name} title="Nome" onChangeText={(text) => handlerOnChange(text, 'name')} />
                <Input isMandatory={true} hasError={hasError} iconName="local-phone" name="telephone" value={userDetails.telephone} title="Telefone" onChangeText={(text) => handlerOnChange(text, 'telephone')} />
                <Input isMandatory={true} hasError={hasError} iconName="phone-iphone" name="phone" value={userDetails.phone} title="Celular" onChangeText={(text) => handlerOnChange(text, 'phone')} />
                <Input isMandatory={true} hasError={hasError} iconName="mail-outline" name="mail" value={userDetails.mail} title="E-mail" onChangeText={(text) => handlerOnChange(text, 'mail')} />
                <Input isMandatory={false} iconName="person-outline" name="responsibleName" value={userDetails.responsibleName} title="Nome do responsável" onChangeText={(text) => handlerOnChange(text, 'responsibleName')} />
                <Input isMandatory={false} iconName="phone-iphone" name="responsiblePhone" value={userDetails.responsiblePhone} title="Telefone do responsável" onChangeText={(text) => handlerOnChange(text, 'responsiblePhone')} />
            </View>
            <View>
                <Button title="Cadastre-se" action={registerUser}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        width: "100%",
        height: 200,
        display: 'flex',
        alignContent: 'center',
        justifyContent: "space-around",
        marginBottom: 10,
        backgroundColor: "#d1d1fc",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80

    },
    title: {
        textAlign: "center",
        fontSize: 25,
        color: "#616afc",
        fontWeight: "500"
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#616afc",
        fontWeight: "300"
    }
});

export default RegisterPage;
