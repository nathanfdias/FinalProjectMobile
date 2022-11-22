import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Cadastro</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput placeholder="Digite um email" style={styles.input} />
          <Text style={styles.title}>Senha</Text>
          <TextInput placeholder="Sua senha" style={styles.input} />
          <Text style={styles.title}>Confirme sua senha</Text>
          <TextInput placeholder="Sua senha" style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={() => alert('Cadastrado com sucesso!')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('/SignIn')}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#003580",
    },
    containerHeader: {
      marginTop: "14%",
      marginBottom: "8%",
      paddingStart: "5%",
    },
    message: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#FFF",
    },
    containerForm: {
      backgroundColor: "#FFF",
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button:{
      backgroundColor: '#003580',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      color: "#FFF",
      fontSize: 18,
      fontWeight: 'bold',
    },
    registerText:{
      color: "#a1a1a1",
    }
});