import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';
import { styles } from "./styles";

const Categories = ({ onSelectCategory }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList 
        data={CATEGORIES} 
        style={styles.categoryContainer}
        contentContainerStyle={styles.listCategory}
        renderItem={({item}) => <CategoryItem {...item} onSelectCategory={onSelectCategory}/>}
        keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}/>
      </View>
    </SafeAreaView>
  );
}

export default Categories;
