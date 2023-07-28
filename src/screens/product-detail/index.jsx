import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.slice';

function ProductDetail({navigation, route}) {
    const { productId, color } = route.params;
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);
    const product = products.find((product) => product.id === productId);

    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

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
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProductDetail;