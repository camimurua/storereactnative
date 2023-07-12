import { View, Text } from "react-native";
import { styles } from "./styles";

const Header = ({title, style}) => {
    return (
        <View style={[styles.container, style]}>
            {
                title == 'Categories' ?
                <Text style={styles.categoryTitle}>{title} </Text> :
                <Text style={styles.productsTitle}>{title} </Text> 
            }
        </View>
    );
};

export default Header;