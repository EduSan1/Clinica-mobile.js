import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const HomeCard = ({ patient }) => {
    // create
    // delete-outline
    return (
        <View key={patient.id} style={styles.card}>
            <Text style={styles.textCard}>Nome: {patient.name}</Text>
            <Text style={styles.textCard}>Celular: {patient.phone}</Text>
            <Text style={styles.textCard}>Telefone: {patient.telephone}</Text>
            <Text style={styles.textCard}>E-mail: {patient.mail}</Text>
            {patient.responsibleName && (
                <Text style={styles.textCard}>
                    Nome do responsável: {patient.responsibleName}
                </Text>
            )}
            {patient.responsiblePhone && (
                <Text style={styles.textCard}>
                    Telefone do responsável: {patient.responsiblePhone}
                </Text>
            )}
            <View style={styles.actionsContainer}>
                <MaterialIcons name={"create"} size={40} color={"#616afc"} />
                <MaterialIcons
                    name={"delete-outline"}
                    size={40}
                    color={"#616afc"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    actionsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
});
