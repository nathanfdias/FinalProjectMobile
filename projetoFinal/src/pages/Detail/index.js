import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function Detail() {
    const navigation = useNavigation();

 return (
   <ScrollView style={styles.container}>
        <View style={styles.header}>
            <ImageBackground source={require('../../assets/landscape4.jpg')} style={styles.image} resizeMode='cover'>
                <View style={styles.child} >
                    <View style={styles.iconsTop}>
                        <TouchableOpacity onPress={() => navigation.navigate('/')}>
                            <Feather name='arrow-left' size={24} color='white' />
                        </TouchableOpacity>
                        <View style={{backgroundColor:'#FFF', borderRadius:50, padding: 6}}>
                            <Feather name='heart' size={18} color='black' />
                        </View>
                    </View>
                    <Text style={{fontSize:24, color:'#FFF', alignSelf: 'flex-start', paddingHorizontal:26}}>Port Campbell National Park</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.main}>
            <View style={{borderBottomWidth: 3, borderBottomColor: '#FFF9', width: 64, alignSelf: 'center', marginTop: 24}}></View>
            <View style={styles.boxes}>
                <View style={styles.box}>
                    <Feather name='tag' size={30} color='white' style={{paddingHorizontal:20}}/>
                    <View style={{justifyContent:'flex-start', width:110}}>
                        <Text style={{fontSize: 18, color: '#FFF'}}>48 $</Text>
                        <Text style={{fontSize: 12, color: '#FFF5'}}>Price</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Feather name='watch' size={30} color='white' style={{paddingHorizontal:20}}/>
                    <View style={{justifyContent:'flex-start', width:110}}>
                        <Text style={{fontSize: 18, color: '#FFF'}}>2 hours</Text>
                        <Text style={{fontSize: 12, color: '#FFF5'}}>Duration</Text>
                    </View>
                </View>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:18, color:'#FFF'}}>Description</Text>
                <Text style={{fontSize:12, color:'#FFF4', marginTop:14}}>Anyone who loves fishing should visit another gem of Port Campbell National Park</Text>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:18, color:'#FFF'}}>Galerey</Text>
                <View style={[styles.images, {marginTop: 16}]}>
                    <View style={{flexDirection:'column'}}>
                        <Image source={require('../../assets/landscape1.jpg')} style={styles.imageGalerey}/>
                        <Image source={require('../../assets/landscape3.jpg')} style={styles.imageGalerey}/>
                    </View>
                    <View>
                        <Image source={require('../../assets/landscape5.jpg')} style={{width:156, height:230, marginVertical:6 ,borderRadius: 12, marginLeft: 12}}/>
                    </View>
                </View>
            </View>
        </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    header:{},
    image: {
        height: 280,
        width: '100%',
    },
    child: {
        height: 280,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    iconsTop:{
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 26,
    },
    main:{
        marginTop: -40,
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        backgroundColor: '#003580',
        height: 600,
    },
    boxes:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    box:{
        marginTop: 30,
        marginHorizontal: 6,
        width: 160,
        height: 70,
        backgroundColor: '#0003',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text:{
        marginTop: 34,
        paddingHorizontal: 42,
    },
    images:{
        flexDirection: 'row',
    },
    imageGalerey:{
        width: 160,
        height: 110,
        marginVertical: 6,
        borderRadius: 14,
    }
})