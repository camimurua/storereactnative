import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "./themes";
import { useFonts } from "expo-font";
import RootNavigator from "./navigations";
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    const [loaded] = useFonts({
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf')
    });

    if(!loaded){
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size='large'/>
            </View>
        )
    }

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <RootNavigator />
            </SafeAreaView>
        </Provider>
    );
}