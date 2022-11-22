import React from "react";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Header />
      <View>
        {/* <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  texto: {},
});
