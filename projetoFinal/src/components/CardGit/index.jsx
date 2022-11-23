import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View, StyleSheet, Image, Linking } from "react-native"


const CardGit = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity   onPress={() => Linking.openURL(item.html_url)}>
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{uri: item.avatar_url}} style={styles.foto}/>
                <Text style={styles.textPageTitulo}>{item.name}</Text>
            </View>
            <View style={styles.detalhes}>
                <Text style={styles.textPage}>{item.location}</Text>
                <Text style={styles.textPage}>{item.company}</Text>
                <Text style={styles.textPage}>{item.blog}</Text>
                <Text style={styles.textPage}>{item.bio}</Text>
                <Text style={styles.textPage}>Seguidores: {item.followers}</Text>
            </View>
        </View>
        </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center', 
    marginTop: 50,
    marginBottom: 50
},
card: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    width: '80%',
    shadowColor: '#171717',
    shadowOpacity: 0.6,
    shadowRadius: 6,
},
detalhes: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#003580',
    width: '80%',
    borderBottomRightRadius: 90,
    shadowColor: '#171717',
    shadowOpacity: 0.6,
    shadowRadius: 6,
},
foto: {
    width: 200,
    height:200,
    borderRadius:50,
    marginBottom: 20
},
textPageTitulo: {
    fontSize: 18,
    color: '#000',
},
textPage:{
    fontSize: 18,
    color: '#fff',
},
})

export default CardGit