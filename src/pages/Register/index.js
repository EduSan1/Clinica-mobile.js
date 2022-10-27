import React, { useEffect, useState } from "react";
import { StyleSheet, ToastAndroid, View, ScrollView } from "react-native";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import api from "../../constants/api";

const RegisterPage = ({ navigation }) => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        telephone: "",
        phone: "",
        mail: "",
        responsibleName: "",
        responsiblePhone: "",
    });

    const [hasError, setHasError] = useState(false);

    const handlerOnChange = (text, input) => {
        setUserDetails({ ...userDetails, [input]: text });
    };

    const registerUser = async () => {
        if (
            userDetails.name === "" ||
            userDetails.mail === "" ||
            userDetails.phone === "" ||
            userDetails.telephone === ""
        ) {
            setHasError(true);
            ToastAndroid.show("Responda todos os dados obrigatórios!", 10);
        } else {
            setHasError(false);
            await api.post("/patient", userDetails).then((res) => {
                console.log(res.data);
            });
            ToastAndroid.show("Cadastro concluido com sucesso!", 10);
            navigation.navigate("Home");
        }
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
                <Header text="Para continuar realize seu cadastro" />
                <View>
                    <Input
                        isMandatory={true}
                        hasError={hasError}
                        iconName="person-outline"
                        name="name"
                        value={userDetails.name}
                        title="Nome"
                        onChangeText={(text) => handlerOnChange(text, "name")}
                    />
                    <Input
                        isMandatory={true}
                        hasError={hasError}
                        iconName="local-phone"
                        name="telephone"
                        value={userDetails.telephone}
                        title="Telefone"
                        onChangeText={(text) =>
                            handlerOnChange(text, "telephone")
                        }
                    />
                    <Input
                        isMandatory={true}
                        hasError={hasError}
                        iconName="phone-iphone"
                        name="phone"
                        value={userDetails.phone}
                        title="Celular"
                        onChangeText={(text) => handlerOnChange(text, "phone")}
                    />
                    <Input
                        isMandatory={true}
                        hasError={hasError}
                        iconName="mail-outline"
                        name="mail"
                        value={userDetails.mail}
                        title="E-mail"
                        onChangeText={(text) => handlerOnChange(text, "mail")}
                    />
                    <Input
                        isMandatory={false}
                        iconName="person-outline"
                        name="responsibleName"
                        value={userDetails.responsibleName}
                        title="Nome do responsável"
                        onChangeText={(text) =>
                            handlerOnChange(text, "responsibleName")
                        }
                    />
                    <Input
                        isMandatory={false}
                        iconName="phone-iphone"
                        name="responsiblePhone"
                        value={userDetails.responsiblePhone}
                        title="Telefone do responsável"
                        onChangeText={(text) =>
                            handlerOnChange(text, "responsiblePhone")
                        }
                    />
                </View>
                <View>
                    <Button title="Cadastre-se" action={registerUser}></Button>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#f3f3ff",
    },
    header: {
        width: "100%",
        height: 200,
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
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#616afc",
        fontWeight: "300",
    },
});

export default RegisterPage;
