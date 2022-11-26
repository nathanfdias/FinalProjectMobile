import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../config/firebaseconfig";

export default function HomeHeader() {
  const navigation = useNavigation();
  const auth = getAuth();

  const logoutFirebase = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("/SignIn");
      })
      .catch((error) => {});
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.header}>
      <View
        style={{
          width: 54,
          height: 54,
          backgroundColor: "#0003",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}>
        <Feather
          name='shopping-cart'
          size={28}
          color='white'
          onPress={() => {
            navigation.navigate("/Cart");
          }}
        />
      </View>
      <View
        style={{
          width: 54,
          height: 54,
          backgroundColor: "#0003",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}>
        <Feather
          name='log-out'
          size={28}
          color='#FFF'
          onPress={() => {
            logoutFirebase();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003580",
    height: 120,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  input: {
    fontSize: 13,
    width: "40%",
    height: 38,
    color: "#FFF",
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    paddingHorizontal: 20,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#0003",
    color: "#FFF",
  },
});
