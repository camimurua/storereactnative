import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Cart" screenOptions={{
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
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}

export default CartNavigator;