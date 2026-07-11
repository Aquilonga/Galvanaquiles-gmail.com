import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactoScreen from '../screens/ContactoScreen';
import HomeScreen from '../screens/HomeScreen';
import PeliculaScreen from '../screens/PeliculaScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pelicula" component={PeliculaScreen} />
      <Stack.Screen name="Contacto" component={ContactoScreen} />
    </Stack.Navigator>
  );
}