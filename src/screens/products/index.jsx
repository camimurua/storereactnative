import { View, Text, Button } from 'react-native';
import { styles } from "./styles";

const Products = ({onHandleGoBack}) => {
    return (
        <View style={styles.container}> 
            <Button title="Go back" onPress={onHandleGoBack}/>
            <Text>Category selected</Text>
        </View>
    );
}

export default Products;