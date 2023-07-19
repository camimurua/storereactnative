import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail } from '../screens';
import { COLORS } from '../themes';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from './styles';

const Stack = createNativeStackNavigator();

function ShopNavigator(){
    return (
        <Stack.Navigator initialRouteName='Categories' screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTitleStyle: {
                fontFamily: 'Inter-Bold',
                fontSize: 17
            },
            headerTintColor: COLORS.white,
            animation: 'fade_from_bottom'
        }}>
            <Stack.Screen name='Categories' component={Categories}/>
            <Stack.Screen name='Products' component={Products} 
                options={({navigation, route}) => ({
                        headerStyle: {
                            backgroundColor: route.params.color
                        },
                        headerLeft: () => (
                            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
                            </TouchableOpacity>
                        ),
                        title: route.params.name
                    })}
            />
            <Stack.Screen name='ProductDetail' component={ProductDetail}
                options={({navigation, route}) => ({
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
                        </TouchableOpacity>
                    ),
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    );
}

export default ShopNavigator;