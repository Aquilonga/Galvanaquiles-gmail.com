import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.texto}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí tu contraseña"
        secureTextEntry={true}
        value={contraseña}
        onChangeText={setContraseña}
      />

     
      {nombre !== '' && contraseña !== '' && (
        <Text style={styles.bienvenida}>Hola, {nombre}</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    marginTop: 50,
  },
  texto: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginTop: 10,
    borderColor: 'gray',
    borderRadius: 5,
  },
  bienvenida: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'blue',
  },
});
