import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [usuarioGuardado, setUsuarioGuardado] = useState('');

  
  useEffect(() => {
    const cargarSesion = async () => {
      const valor = await AsyncStorage.getItem('usuario_email');
      if (valor) {
        setUsuarioGuardado(valor);
      }
    };
    cargarSesion();
  }, []);

 
  const handleLogin = async () => {
  
    if (!email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const formatoEmail = /\S+@\S+\.\S+/;
    if (!formatoEmail.test(email)) {
      Alert.alert('Error', 'El formato del correo no es válido');
      return;
    }

  
    if (password.length < 4) {
      Alert.alert('Error', 'La contraseña debe tener al menos 4 caracteres');
      return;
    }

   
    await AsyncStorage.setItem('usuario_email', email);
    setUsuarioGuardado(email);
    Alert.alert('Éxito', 'Inicio de sesión correcto');
  };

  const handleCerrarSesion = async () => {
    await AsyncStorage.removeItem('usuario_email');
    setUsuarioGuardado('');
    setEmail('');
    setPassword('');
    Alert.alert('Sesión Cerrada', 'Se borraron los datos del dispositivo');
  };

  return (
    <View style={styles.contenedor}>
      {usuarioGuardado ? (
       
        <View style={styles.centrado}>
          <Text style={styles.bienvenida}>¡Bienvenido de nuevo!</Text>
          <Text style={styles.subtexto}>Sesión activa: {usuarioGuardado}</Text>
          <Button title="Cerrar sesión" color="red" onPress={handleCerrarSesion} />
        </View>
      ) : (
      
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Iniciar Sesión</Text>

          <Text style={styles.label}>Correo Electrónico:</Text>
          <TextInput
            placeholder="ejemplo@correo.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />

          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            placeholder="Mínimo 4 caracteres"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}
          />

          <View style={{ marginTop: 10 }}>
            <Button title="Ingresar" onPress={handleLogin} />
          </View>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  centrado: {
    alignItems: 'center',
  },
  formulario: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  bienvenida: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtexto: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
});