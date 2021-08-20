import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: Dimensions.get('screen').height,
    },
    welcomeText: {
        fontSize: 50,
        fontWeight: "bold",
    },
    bottom: {
        width: "80%",
        height: Dimensions.get('screen').height*0.6,
        borderColor: "#FC3C0D",
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white"
    },
    inputContainer: {
        width: "90%",
        height: 300,
        justifyContent: "space-evenly",
        marginBottom: 30,
        marginTop: 20,
    },
    input: {
        width: "100%",
        borderWidth: 2,
        height: 50,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: "#FC3C0D",
    },
    inputText: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        width: 120,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#FC3C0D",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    textContainer: {
        width: "80%",
        height: 60,
        alignItems: "center",
        justifyContent: "space-between",
    },
    firstText: {
        fontSize: 16,
    },
    secondText: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 16,
    }
});