import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

const Card = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Detalhes")} style={styles.taskContainer}>
            <Text style={styles.texto}>{item.titulo}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  taskContainer: {
      backgroundColor: "#f0f0f0",
      marginBottom: 16
  },
  texto: {
      fontSize: 24
  }
})


export default Card