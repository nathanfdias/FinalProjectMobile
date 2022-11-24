import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DiscoverPage from '../../components/DiscoverPage';
import Stuffs from '../../components/Stuffs';

import { useState, useContext } from "react";

import { ProdutoAPI } from "../../services/api";

export default function Popular() {
    const navigation = useNavigation();
    const { produtos} = ProdutoAPI();
    // const [produtoMap, setProdutoMap] = useState([]);


 return (
   <View>
        <View style={styles.main}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Descubra</Text>
            <View style={{width:'66%', height:70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#FFF'}}>
                    <TouchableOpacity>
                        <Text style={[styles.textPage]}>
                            Popular
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('/Products')}>
                        <Text style={styles.textPage}>
                            Produtos
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('/Sobre')}>
                        <Text style={styles.textPage}>
                            Sobre
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mainDiscover}>
            <DiscoverPage cover={{uri: produtos[1]?.fotoLink}} produto={produtos[1]?.nome} categoria={produtos[1]?.nomeCategoria} onPress={() => navigation.navigate('/Products/Detail' , { id: 2 })}/>
            <DiscoverPage cover={{uri: produtos[2]?.fotoLink}} produto={produtos[2]?.nome} categoria={produtos[2]?.nomeCategoria} onPress={() => navigation.navigate('/Products/Detail' , { id: 3 })}/>
            <DiscoverPage cover={{uri: produtos[6]?.fotoLink}} produto={produtos[6]?.nome} categoria={produtos[6]?.nomeCategoria} onPress={() => navigation.navigate('/Products/Detail' , { id: 7 })}/>
        </ScrollView>
        <View style={styles.footer}>
            <Text style={{paddingHorizontal: 30, color: '#FFF', fontSize: 18, paddingBottom: 26}}>Comprando conosco:</Text>
            <Stuffs name='phone' title='Comunicação'/>
            <Stuffs name='truck' title='Envio rápido'/>
            <Stuffs name='thumbs-up' title='Avaliação'/>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    main:{
        height: 130,
        backgroundColor: '#003580',
        paddingHorizontal: 30,
        width: '100%',
    },
    textPage:{
        fontSize: 18,
        paddingBottom: 16,
        color: '#FFF',
    },
    mainDiscover:{
        height: 340,
        backgroundColor: '#003580',
        borderTopWidth: 1, borderTopColor: '#0003',
        flexDirection: 'row',
        padding: 20,
        paddingLeft: 30,
    },
    footer:{
        width: '100%',
        backgroundColor: '#003580',
    }
})