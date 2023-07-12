import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 15
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
    },
    goBack: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10
    },
    goBackText: {
      fontSize: 14,
      color: COLORS.text
    },
    products: {
      flex: 1
    },
    notFound: {
      flex: 1,
      alignItems: 'center'
    },
    clearIcon: {
      position: 'absolute',
      zIndex: 2,
      right: 5
    },
    productsConten: {
      gap: 15,
      paddingVertical: 25
    },
    productContainer: {
      paddingVertical: 20,
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      paddingHorizontal: 10,
      width: '45%',
      marginHorizontal: 10
    },
    productImage: {
      width: '100%',
      height: 120
    }
});