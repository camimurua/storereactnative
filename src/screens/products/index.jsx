import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "./styles";
import { Input } from '../../components';
import { useState } from 'react';
import { COLORS } from '../../themes';
import { Ionicons } from '@expo/vector-icons'; 
import PRODUCTS from '../../constants/data/products.json';

const Products = ({onHandleGoBack, categoryId}) => {
    const [search, setSearch] = useState('');
    const [borderColor, setBorderColor] = useState(COLORS.primary);
    const onHandleBlur = () => {
        
    }
    const onHandleChangeText = (text) => {
        setSearch(text);
    }
    const onHandleFocus = () => {

    }
    const filteredProd = PRODUCTS.filter((product) => product.categoryId == categoryId);

    return (
        <View style={styles.container}> 
            <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
                <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Input 
                    onHandleBlur={onHandleBlur}
                    onHandleChangeText={onHandleChangeText}
                    onHandleFocus={onHandleFocus}
                    value={search}
                    placeholder='Search'
                    borderColor={borderColor}
                />
                <Ionicons name="search-circle" size={40} color={COLORS.black} />
                {
                    search.length > 0 &&
                    <Ionicons name="close-circle" size={40} color={COLORS.black} />
                }
                
            </View>
            <FlatList 
                data={filteredProd}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default Products;