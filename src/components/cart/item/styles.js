import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 130,
        backgroundColor: COLORS.backgroundWhite,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 7,
        marginBottom: 2
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        maxWidth: 120,
        borderRadius: 7
    },
    image: {
        width: 100,
        height: 100
    },
    detailContainer: {
        justifyContent: 'space-between',
        maxWidth: 190,
        gap: 5
    },
    name: {
        fontSize: 13,
        fontFamily: 'Inter-SemiBold'
    },
    price: {
        fontSize: 13,
        fontFamily: 'Inter-Bold'
    },
    quantity: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        gap: 10
    },
    actionContainer: {
        flexDirection: 'row',
        gap: 20
    },
    increaseButton: {
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingHorizontal: 15
    },
    increaseButtonText: {
        color: COLORS.white,
        fontFamily: 'Inter-SemiBold',
    },
    decreaseButton: {
        paddingVertical: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        paddingHorizontal: 16
    },
    decreaseButtonText: {
        color: COLORS.white,
        fontFamily: 'Inter-SemiBold',
    },
    deleteButton: {
        paddingVertical: 10,
        backgroundColor: COLORS.tab,
        borderRadius: 20,
        paddingHorizontal: 10
    }
});