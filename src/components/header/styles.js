import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from '../../themes/index';

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: COLORS.text,
        fontWeight: 'bold'
    }
});