import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from '../../themes/index';

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    containerTablet: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    categoryTitle: {
        fontSize: 20,
        color: COLORS.text,
        fontFamily: 'Inter-Bold'
    },
    productsTitle: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: 'Inter-Bold'
    },
    categoryTitleTablet: {
        fontSize: 35,
        color: COLORS.text,
        fontFamily: 'Inter-Bold'
    },
    productsTitleTablet: {
        fontSize: 35,
        color: COLORS.white,
        fontFamily: 'Inter-Bold'
    }
});