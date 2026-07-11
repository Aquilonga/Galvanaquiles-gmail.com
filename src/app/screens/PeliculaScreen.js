import { Button, Text, View } from 'react-native';

export default function PeliculaScreen({ route, navigation }) {
  
  const { datos } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Detalle de la Película</Text>
      <Text style={{ fontSize: 16 }}>Título: {datos.titulo}</Text>
      <Text style={{ fontSize: 16 }}>Año: {datos.anio}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>Género: {datos.genero}</Text>
      
      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}