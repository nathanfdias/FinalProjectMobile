import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View, StyleSheet, Image, Linking, ScrollView } from "react-native"


const CardGit = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity   onPress={() => Linking.openURL(item.html_url)}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={{uri: item.avatar_url}} style={styles.foto}/>
                    <Text style={styles.textPageTitulo}>{item.name}</Text>
                </View>
                <ScrollView style={styles.detalhes}>
                    <Text style={styles.textPage}>{item.location}</Text>
                    <Text style={styles.textPage}>{item.company}</Text>
                    <Text style={styles.textPage}>{item.blog}</Text>
                    <Text style={styles.textPage}>{item.bio}</Text>
                    <Text style={styles.textPage}>Seguidores: {item.followers}</Text>
                </ScrollView>
            </View>
        </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
container: {
    margin: 10,
    width: 170,
    backgroundColor: 'black',
    alignItems: 'center',
},
card: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#171717',
    shadowOpacity: 0.6,
    shadowRadius: 6,
},
detalhes: {
    height: 120,
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginHorizontal: 4,
    backgroundColor: '#003580',
    width: '100%',
    // borderBottomRightRadius: 90,
    shadowColor: '#171717',
    shadowOpacity: 0.6,
    shadowRadius: 6,
},
foto: {
    width: 100,
    height:100,
    borderRadius:50,
    marginBottom: 20
},
textPageTitulo: {
    fontSize: 14,
    color: '#000',
},
textPage:{
    fontSize: 12,
    color: '#fff',
},
})

export default CardGit;