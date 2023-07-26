import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      backgroundColor: COLORS.backgroundWhite,
      paddingTop: 15
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
      color: COLORS.text,
      fontFamily: 'Inter-Medium'
    },
    products: {
      flex: 1
    },
    notFound: {
      flex: 1,
      alignItems: 'center'
    },
    notFoundText: {
      fontFamily: 'Inter-Regular'
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
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      width: '45%',
      marginHorizontal: 10
    },
    productImage: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    productDetail: {
      padding: 10,
      gap: 5
    },
    productName: {
      fontSize: 14,
      fontFamily: 'Inter-Medium'
    },
    productPrice: {
      fontSize: 15,
      fontFamily: 'Inter-Bold'
    }
});