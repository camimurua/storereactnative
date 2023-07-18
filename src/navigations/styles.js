import { StyleSheet } from "react-native";
import { COLORS } from "../themes";

export const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    goBackText: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: 'Inter-Medium'
    }
});