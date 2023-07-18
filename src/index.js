import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "./themes";
import { useFonts } from "expo-font";
import RootNavigator from "./navigations";

/* const categoryDefault  = {
    categoryId: null,
    color: COLORS.primary
};
 */
export default function App() {
    const [loaded] = useFonts({
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf')
    });
    /* const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

    const headerTitle = isCategorySelected ? 'Products' : 'Categories';

    const onHandleSelectCategory = ({categoryId, color}) => {
        setSelectedCategory({categoryId, color});
        setIsCategorySelected(!isCategorySelected);
    }
    const onHandleNavigate = () => {
        setIsCategorySelected(!isCategorySelected);
        setSelectedCategory(categoryDefault);
    } */

    if(!loaded){
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size='large'/>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <RootNavigator />
        </SafeAreaView>
    );
}

{/* <View style={styles.container}>
    <Header title={headerTitle} style={{backgroundColor: selectedCategory.color}}/>
        {
            isCategorySelected ? 
            <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory}/> 
            : 
            <Categories onSelectCategory={onHandleSelectCategory}/>
        }
</View> */}