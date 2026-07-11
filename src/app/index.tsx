import { createContext, useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const TemaContext = createContext();
const AuthContext = createContext();


function PantallaLogin() {
  const { login } = useContext(AuthContext);
  const { tema } = useContext(TemaContext);


  const esClaro = tema === 'claro';

  return (
    <View style={[styles.centrado, { backgroundColor: esClaro ? '#fff' : '#333' }]}>
      <Text style={[styles.titulo, { color: esClaro ? '#000' : '#fff' }]}>
        Pantalla de Login
      </Text>
      <Button title="Iniciar sesión" onPress={() => login('Yesica')} />
    </View>
  );
}

function PantallaInicio() {
  const { usuario, logout } = useContext(AuthContext);
  const { tema, alternarTema } = useContext(TemaContext);

  const esClaro = tema === 'claro';

  return (
    <View style={[styles.centrado, { backgroundColor: esClaro ? '#fff' : '#333' }]}>
      <Text style={[styles.texto, { color: esClaro ? '#000' : '#fff' }]}>
        Bienvenida, {usuario?.nombre} 👋
      </Text>
      <Text style={[styles.subtexto, { color: esClaro ? '#555' : '#ccc' }]}>
        Tema actual: {tema}
      </Text>
      
      <Button title="Cambiar tema" onPress={alternarTema} color="purple" />
      <View style={{ height: 15 }} />
      <Button title="Cerrar sesión" onPress={logout} color="red" />
    </View>
  );
}


function AppPrincipal() {
  const { usuario } = useContext(AuthContext);
  return usuario ? <PantallaInicio /> : <PantallaLogin />;
}


export default function App() {

  const [tema, setTema] = useState('claro');
  const [usuario, setUsuario] = useState(null);

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  const login = (nombre) => setUsuario({ nombre });
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      <TemaContext.Provider value={{ tema, alternarTema }}>
        <AppPrincipal />
      </TemaContext.Provider>
    </AuthContext.Provider>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtexto: {
    fontSize: 16,
    marginBottom: 20,
  },
});
