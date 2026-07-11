import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


function InicioScreen() {
  return (
    <View style={styles.centrado}>
      <Text style={styles.texto}>Pantalla de Inicio</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={styles.centrado}>
      <Text style={styles.texto}>Perfil del Usuario</Text>
    </View>
  );
}

function ConfiguracionScreen() {
  return (
    <View style={styles.centrado}>
      <Text style={styles.texto}>Configuración del Sistema</Text>
    </View>
  );
}


function AcercaDeScreen() {
  return (
    <View style={styles.centrado}>
      <Text style={styles.texto}>Acerca de esta Aplicación (TP7)</Text>
    </View>
  );
}


function LoginScreen({ onLogin }) {
  return (
    <View style={styles.centrado}>
      <Text style={styles.titulo}>Por favor, Iniciá Sesión</Text>
      <Button title="Ingresar a la App" onPress={onLogin} />
    </View>
  );
}


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function AppTabs({ setAutenticado }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2196f3' }, 
        headerTintColor: '#fff',
        headerTitleAlign: 'center', 
        tabBarActiveTintColor: '#2196f3',
      }}
    >
      <Tab.Screen 
        name="Inicio" 
        component={InicioScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={PerfilScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Configuración" 
        component={ConfiguracionScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <NavigationContainer independent={true}>
      {!autenticado ? (
    
        <LoginScreen onLogin={() => setAutenticado(true)} />
      ) : (
   
        <Drawer.Navigator initialRouteName="ContenidoPrincipal">
          <Drawer.Screen 
            name="ContenidoPrincipal" 
            options={{ title: 'Menú Principal' }}
          >
            {() => <AppTabs setAutenticado={setAutenticado} />}
          </Drawer.Screen>
          <Drawer.Screen name="Acerca de" component={AcercaDeScreen} />
          <Drawer.Screen name="Salir">
            {() => (
              <View style={styles.centrado}>
                <Text style={styles.texto}>¿Querés cerrar sesión?</Text>
                <Button title="Cerrar Sesión" color="red" onPress={() => setAutenticado(false)} />
              </View>
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
  },
});