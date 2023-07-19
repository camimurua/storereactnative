import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import PRODUCTS from '../../constants/data/products.json';

function ProductDetail({navigation, route}) {
    const { productId, color } = route.params;
    const product = PRODUCTS.find((product) => product.id == productId);

    return (
        <View style={styles.container}>
            <View style={[styles.imageContainer, {backgroundColor: color}]}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain"/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}> {product.currency.code} {product.price}</Text>
                <Text style={styles.tagsTitle}>Tags:</Text>
                <View style={styles.tagsContainer}>
                    {
                        product.tags.map((tag) => (
                            <View key={tag} style={[styles.tagContainer, {backgroundColor: color}]}>
                                <Text style={styles.tag}>{tag}</Text>
                            </View> 
                        ))
                    }
                </View>
            </View>
        </View>
    );
}

export default ProductDetail;