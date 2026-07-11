import { Button, Text, View } from 'react-native';

export default function ContactoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Información de Contacto</Text>
      <Text style={{ fontSize: 14, marginBottom: 20 }}>Email: soporte@apppeliculas.com</Text>
      
      <Button
        title="Volver al Inicio"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}