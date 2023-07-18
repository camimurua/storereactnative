import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products } from '../screens';
import { COLORS } from '../themes';
import { TouchableOpacity, Text } from 'react-native';
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
            headerTintColor: COLORS.white
        }}>
            <Stack.Screen name='Categories' component={Categories}/>
            <Stack.Screen name='Products' component={Products} options={({navigation, route}) => ({
                headerStyle: {
                    backgroundColor: route.params.color
                },
                headerLeft: () => (
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
                    </TouchableOpacity>
                )
            })}/>
        </Stack.Navigator>
    );
}

export default ShopNavigator;