import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Products from '../pages/Products';
import Cadastro from '../pages/Cadastro';
import Sobre from '../pages/Sobre';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="/Welcome" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="/SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="/" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="/Detail" component={Detail} options={{headerShown: false}}/>
            <Stack.Screen name="/Products" component={Products} options={{headerShown: false}}/>
            <Stack.Screen name="/Cadastro" component={Cadastro} options={{headerShown: false}}/>
            <Stack.Screen name="/Sobre" component={Sobre} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}