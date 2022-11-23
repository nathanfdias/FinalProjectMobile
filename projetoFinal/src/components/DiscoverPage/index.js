import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import Stars from 'react-native-stars';

export default function DiscoverPage(props) {
    const navigation = useNavigation();

 return (
        <TouchableOpacity style={styles.content} onPress={props.onPress}>
            <Image source={props.cover} style={styles.cover} />
            <View style={{flexDirection: 'row', paddingTop:14, width:200, justifyContent:'space-between'}}>
                <Text style={styles.textPlace}>{props.produto}</Text>
                <View style={{backgroundColor:'white', borderRadius:50, padding: 6}}>
                    <Feather name='heart' size={14} color='black' />
                </View>
            </View>
            <Text style={styles.textCountry}>{props.categoria}</Text>
            {/* Linha */}
            <View style={{borderBottomWidth: 1, borderBottomColor: '#0004', width: '100%', paddingTop: 18}}></View>
            <View style={{flexDirection: 'row', paddingTop:20, width:200, justifyContent:'space-between', paddingHorizontal: 8}}>
                <Stars default={5} count={5} half={true} starSize={20}
                    fullStar={<Ionicons name="md-star" size={16} style={styles.myStarStyle}/>}
                    emptyStar={<Ionicons name="md-star-outline" size={24} />}
                    halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarStyle}/>}
                />
                <Text style={{color: '#FFF'}}>5,0</Text>
            </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    content:{
        height: 278,
        backgroundColor: '#0003',
        padding: 6,
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 14,
    },
    cover:{
        width: 200,
        height: 140,
        borderRadius: 20,
    },
    textPlace:{
        fontSize: 20,
        color: '#FFF',
        paddingLeft: 8, 
    },
    textCountry:{
        fontSize: 12,
        color: '#FFF',
        alignSelf: 'flex-start', 
        paddingLeft: 8,
        paddingTop: 8
    },
    flag:{
        width: 30,
        height: 20,
        backgroundColor: '#FFF',
        marginRight: 18,
    },
    myStarStyle:{
        color: '#E7A74e',
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});