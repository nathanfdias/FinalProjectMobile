import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View, StyleSheet, Image, Linking } from "react-native"


const CardGit = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.card} onPress={() => Linking.openURL(item.html_url)}>
                <Image source={{uri: item.avatar_url}} style={styles.foto}/>
                <Text style={styles.textPage}>{item.name}</Text>
                <Text style={styles.textPage}>{item.location}</Text>
                <Text style={styles.textPage}>{item.blog}</Text>
                <Text style={styles.textPage}>{item.company}</Text>
                <Text style={styles.textPage}>{item.bio}</Text>
                <Text style={styles.textPage}>Seguidores: {item.followers}</Text>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center', 
    marginTop: 50,
},
card: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 90,
    backgroundColor: '#003580',
    width: '90%',
    height: '90%',
    borderRadius: 40
},
foto: {
    width: 200,
    height:200,
    borderRadius:'50%',
    marginBottom: 20
},
textPage:{
    fontSize: 18,
    color: '#fff',
},
})

export default CardGit