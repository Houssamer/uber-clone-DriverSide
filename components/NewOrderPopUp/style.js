import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 10,
        alignItems: "center"
    },
    popUp: {
        backgroundColor: "white",
        zIndex: 12,
        width: "90%",
        height: 300,
        position: "absolute",
        bottom: 20,
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 2,
        alignItems: "center"
    },
    buttons: {
        position: "absolute",
        bottom: 320,
        width: "90%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    acceptButton: {
        backgroundColor: "orange",
        width: "45%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        borderColor: "white",
        borderWidth: 2,
    },
    declineButton: {
        backgroundColor: "white",
        width: "45%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        borderColor: "lightgrey",
        borderWidth: 2,
    },
    acceptText: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "monospace"
    },
    declineText: {
        color: "black",
        fontWeight: "bold",
        fontFamily: "monospace",
    },
    profile: {
        width: "100%",
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    profileIcon: {
        backgroundColor: "orange",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 15,
    },
    durationText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    distanceText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    duration: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: 150,
        height: 50,
    },
    distance: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: 150,
        height: 50,
    },
    info: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
    }
});