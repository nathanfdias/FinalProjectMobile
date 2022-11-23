import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  return (
    <View style={styles.container}>
      <Animatable.View
        animation='fadeInLeft'
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo</Text>
      </Animatable.View>
      <Animatable.View
        animation='fadeInUp'
        style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite um email'
          type='text'
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Sua senha'
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />
        {errorLogin === true ? (
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons
              name='alert-circle'
              size={24}
              color='#bdbdbd'
            />
            <Text style={styles.warningAlert}> Email ou Senha Inválidos!</Text>
          </View>
        ) : (
          <View />
        )}
        {/* DECOMENTAR ABAIXO PARA IMPEDIR DE ENTRAR SEM DIGITAR SENHA */}
        {/* {email === "" || senha === "" ? (
          <TouchableOpacity
            disabled={true}
            style={styles.button}
            onPress={() => navigation.navigate("/")}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("/")}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        )} */}

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta?{" "}
            <Text
              style={styles.linkSubscribe}
              onPress={() => navigation.navigate("/Cadastro")}>
              Cadastre-se
            </Text>
          </Text>
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
  button: {
    backgroundColor: "#003580",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#4d5156",
  },
  linkSubscribe: {
    color: "#1877f2",
  },
});
