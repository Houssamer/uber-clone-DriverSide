import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get("window").height*0.95,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});