import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        title='Detalhes'
        onPress={() => navigation.navigate("Detalhes")}>
        <MaterialCommunityIcons
          name='account-supervisor'
          size={24}
          color='white'
        />
      </TouchableOpacity>
      <TouchableOpacity
        title='Logout'
        onPress={() => logoutContext()}>
        <MaterialCommunityIcons
          name='map-marker-radius'
          size={24}
          color='white'
        />
      </TouchableOpacity>
      <TouchableOpacity
        title='Logout'
        onPress={() => logoutContext()}>
        <MaterialCommunityIcons
          name='logout'
          size={24}
          color='white'
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    padding: 15,
    height: 70,
    width: "100%",
    position: "relative",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    // borderColor: "thistle",
    backgroundColor: "#7B0000",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default Header;
