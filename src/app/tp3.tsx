import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function TP3() {

  const [activo, setActivo] = useState(false);

  return (
    <View style={styles.container}>



      <View style={styles.rowContainer}>
        

        <View style={[styles.caja, styles.cajaUno]} />

        <Pressable onPress={() => setActivo(!activo)}>
          <View style={[
            styles.caja, 
            activo ? styles.cajaDosActiva : styles.cajaDosInactiva 
          ]} />
        </Pressable>

        <View style={[styles.caja, styles.cajaTres]} />
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffffff', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  rowContainer: {

    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    width: '100%', 
    height: 120,
  },
  caja: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
 
  cajaUno: {
    backgroundColor: 'red', 
  },
  cajaTres: {
    backgroundColor: 'blue', 
  },
 
  cajaDosInactiva: {
    backgroundColor: 'orange',
  },
  cajaDosActiva: {
    backgroundColor: 'green',
  },
});