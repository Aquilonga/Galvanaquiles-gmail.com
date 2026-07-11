import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, View } from 'react-native';


interface CardProps {
  titulo: string;
  children: React.ReactNode;
}


function Card({ titulo, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.cardImage}
      />
      
      {/* Usamos el componente propio del proyecto para el título */}
      <ThemedText style={styles.cardTitle}>{titulo}</ThemedText>
      
      <View style={styles.cardBody}>
        {children}
      </View>
      
      <Button
        title="Ver más"
        onPress={() => Alert.alert('Info', `Presionaste la tarjeta: ${titulo}`)}
        color="#007AFF"
      />
    </View>
  );
}

export default function SaludoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.headerTitle}>Mis Tarjetas (Práctica 02)</ThemedText>
      
      <Card titulo="Aprender React Native">
        <ThemedText style={styles.cardText}>
          JSX nos permite usar componentes nativos como View y Text.
        </ThemedText>
      </Card>

      <Card titulo="¿Qué son las Props?">
        <ThemedText style={styles.cardText}>
          Son las propiedades que le pasamos a un componente para pasarle datos dinámicos.
        </ThemedText>
      </Card>

      <Card titulo="El superpoder de Children">
        <ThemedText style={styles.cardText}>
          Children nos deja meter cualquier componente o texto adentro de las etiquetas.
        </ThemedText>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#000', // Forzamos color oscuro para que se lea en la tarjeta blanca
  },
  cardBody: {
    marginBottom: 15,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});