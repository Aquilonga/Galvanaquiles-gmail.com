import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // 1. Los dos estados básicos que te pide la teoría
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
        secureTextEntry={true} // Esto oculta los caracteres
        value={contraseña}
        onChangeText={setContraseña}
      />

      {/* 2. El mensaje de bienvenida solo aparece si ambos campos tienen texto */}
      {nombre !== '' && contraseña !== '' && (
        <Text style={styles.bienvenida}>Hola, {nombre}</Text>
      )}
    </View>
  );
}

// Estilos re simples, parecidos a los del ejemplo del PDF
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