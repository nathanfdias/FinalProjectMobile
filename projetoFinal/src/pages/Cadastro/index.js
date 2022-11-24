import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseconfig";

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const auth = getAuth();

  const registerFirebase = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("/SignIn", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorRegister(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation='fadeInLeft'
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Cadastro</Text>
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
        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput
          placeholder='Sua senha'
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setConfirmarSenha(text)}
          value={confirmarSenha}
        />
        {errorRegister === true ? (
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons
              name='alert-circle'
              size={24}
              color='#bdbdbd'
            />
            <Text style={styles.warningAlert}>Usuário já cadastrado!</Text>
          </View>
        ) : (
          <View />
        )}
        {email === "" ||
        senha === "" ||
        confirmarSenha === "" ||
        senha !== confirmarSenha ? (
          <TouchableOpacity
            disabled={true}
            style={styles.button}
            onPress={() => navigation.navigate("/")}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={registerFirebase}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("/SignIn")}>
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
});
