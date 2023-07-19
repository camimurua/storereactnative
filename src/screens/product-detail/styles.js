import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 20,
        paddingHorizontal: 15
    },
    imageContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    image: {
        width: '100%',
        height: 250
    },
    textContainer: {
        flex: 1,
        padding: 20,
        gap: 10
    },
    name: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 17
    },
    description: {
        fontFamily: 'Inter-Regular',
        fontSize: 14
    },
    price: {
        fontFamily: 'Inter-Bold',
        fontSize: 18
    },
    tagsTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: 16
    },
    tagsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10
    },
    tag: {
        color: COLORS.white
    },
    tagContainer: {
        padding: 10,
        borderRadius: 10
    }
});