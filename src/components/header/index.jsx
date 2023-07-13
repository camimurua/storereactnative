import { View, Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";

const Header = ({title, style}) => {
    const { width } = useWindowDimensions();
    const isTablet = width > 650;

    return (
        <View style={[isTablet? styles.containerTablet : styles.container, style]}>
            {
                title == 'Categories' ?
                <Text style={isTablet? styles.categoryTitleTablet : styles.categoryTitle}>{title} </Text> :
                <Text style={isTablet? styles.productsTitleTablet : styles.productsTitle}>{title} </Text> 
            }
        </View>
    );
};

export default Header;