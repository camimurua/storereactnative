import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { styles } from "./styles";
import { Input } from '../../components';
import { useState } from 'react';
import { COLORS } from '../../themes';
import { Ionicons } from '@expo/vector-icons'; 
import PRODUCTS from '../../constants/data/products.json';

const Products = ({ navigation, route }) => {
    const {categoryId, color} = route.params;

    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [borderColor, setBorderColor] = useState(COLORS.search);

    const onHandleChangeText = (text) => {
        setSearch(text);
        filteredBySearch(text);
    }

    const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId == categoryId);

    const filteredBySearch = (query) => {
        let updatedProductList = [...filteredProductsByCategory];
        updatedProductList = updatedProductList.filter((product) =>{
            return product.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
        });
        setFilteredProducts(updatedProductList);
    }

    const clearSearch = () => {
        setSearch('');
        setFilteredProducts([]);
    }

    const onSelectProduct = ({ productId, name }) => {
        navigation.navigate('ProductDetail', { productId, color, name });
    }

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Input 
                    onHandleChangeText={onHandleChangeText}
                    value={search}
                    placeholder='Search'
                    borderColor={borderColor}
                />
                {
                    search.length > 0 && (
                    <Ionicons style={styles.clearIcon} onPress={clearSearch} name="close-circle" size={20} color={COLORS.black} />
                    )
                }
                
            </View>
            <FlatList 
                style={styles.products}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => onSelectProduct({ productId: item.id, name: item.name })} style={styles.productContainer}>
                        <ImageBackground source={{uri:item.image}} style={[styles.productImage, {backgroundColor: color}]} resizeMethod='resize' resizeMode='contain'/>
                        <View style={styles.productDetail}>
                            <Text style={styles.productName} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                            <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.productsConten}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            {
                filteredProducts.length == 0  && search.length > 0 && (
                    <View style={styles.notFound}>
                        <Text style={styles.notFoundText}>No products found</Text>
                    </View>
                )
            }
        </View>
    );
}

export default Products;