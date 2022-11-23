import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ProdutoAPI } from "../../services/api";
import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Feather } from '@expo/vector-icons'

import { useNavigation } from "@react-navigation/native";

import { DataContext } from '../../Context/DataContext';

export default function ProdutoUnico() {
    const ctx = useContext(DataContext);
    const { produtos, carregando } = ProdutoAPI(`/${ctx.info}`);
    const navigation = useNavigation();

    console.log(produtos);

 return (
    <View>
        <View style={styles.header}>
            <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
                    <Feather name='arrow-left' size={28} color='white' />   
            </View>
            <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
            <Feather name='log-out' size={28} color='#FFF'/>
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Produto</Text>
            <View style={{height:70}} />
        </View>
        <View style={styles.produtoContainer}>
            <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: produtos.fotoLink }}
            />
            <View style={{flexDirection:'column'}}>
                <Text style={styles.textDescript}>{produtos.nome}</Text>
                <Text style={styles.textDescript}>{produtos.descricao}</Text>
                <Text style={styles.textDescript}>{`Valor: R$ ${produtos.valor}`}</Text>
            </View>
        </View>
        <View style={{width: '100%', marginTop: 30, alignItems:'center'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'#fff', fontSize: 16}}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    </View>
 );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#003580',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
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
    container: {
        flex: 1,
    },
    produtoContainer:{
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textDescript:{
        marginVertical: 6,
        marginLeft: 30,
        maxWidth: 200,
    },
    button:{
        width: 180,
        height: 26,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#003580',
    }
})