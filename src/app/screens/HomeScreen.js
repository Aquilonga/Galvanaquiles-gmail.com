import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  
  const peliculaInfo = {
    titulo: "THE WALKING DEAD",
    anio: 2010,
    genero: "Apocalipsis"
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bienvenido a AppPeliculas</Text>
      
      <Button
        title="Ir a Película"
        onPress={() => navigation.navigate('Pelicula', { datos: peliculaInfo })}
      />
      
      <View style={{ height: 10 }} /> 
      
      <Button
        title="Ir a Contacto"
        onPress={() => navigation.navigate('Contacto')}
      />
    </View>
  );
}
