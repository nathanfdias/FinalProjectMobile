import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import * as Animatable from 'react-native-animatable';

export default function NetworkInformation() {
  const netInfo = useNetInfo()
  const [backgroundColor, setBackgroundCollor] = useState(true)
  const [messageConnection, setMessageConnection] = useState('Conectado!')
  const component = useRef(null)

  useEffect(() => {
    if (netInfo.isConnected) {
      setMessageConnection('Conectado')
      setBackgroundCollor('#208717')
      component.current.fadeOut(5000)
    } else {
      component.current.slideInDown()
      setMessageConnection('Sem Conexão :(')
      setBackgroundCollor('#B6470D')
    }
  }, [netInfo])

  return (
    <Animatable.View style={styles.container} ref={component}>
      <View style={[styles.containerComponent, { backgroundColor }]}>
        <Text style={styles.textMessageConnection}>{messageConnection}</Text>
      </View>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    borderRadius: 50,
  },
  containerComponent: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMessageConnection: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
})