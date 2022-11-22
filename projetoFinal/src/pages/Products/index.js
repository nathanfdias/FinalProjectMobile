import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

import { ProdutoAPI } from '../../services/api';

export default function Products() {
    const navigation = useNavigation();
    const [produtoFiltrado, setProdutoFiltrado] = useState("");
    const [url, setUrl] = useState("");
    const { produtos, carregando} = ProdutoAPI();

    useEffect(() => {
        console.log(produtos)
        setUrl(urlLink(navigation.pathname));
    }, [navigation]);
    
    const urlLink = (url) => {
        if (!url == "/Products") {
            return `/`;
        }
        return `/Products`;
    };

    const render = ({item}) => {
        return(
            <View>
                <Image style={{width: 120, height: 120}} source={{uri:item.fotoLink}}/>
                <View >
                    <Text>{item.nome}</Text>
                    <Text>{`R$ ${item.valor.toFixed(2)}`}</Text>
                    {/* <NavLink
                        to={`${url}/${item.id}`}
                        className="buttons"
                    >
                        <button>Detalhes</button>
                    </NavLink> */}
                </View>
            </View>
        );    
    }

    const ProdutoFiltrar = () => {
        console.log("Produto filtrar...")
        const produtosFiltrados = produtos?.filter((produto) =>
            produto.nome.toUpperCase().includes(produtoFiltrado)
        );
        return (
            <FlatList data={produtos} keyExtractor={(item) => item.id} renderItem={render} showsVerticalScrollIndicator={false}/>
        );
    };

    const Carregando = () => {
        return (
            <>
                <View>
                    <Text>CARREGANDO PRODUTOS</Text>
                </View>
            </>
        );
    }


 return (
   <View >
       <View style={styles.header}>
            <View style={styles.inputArea}>
                <TextInput style={styles.input} placeholder='Search' placeholderTextColor="#FFF" value={produtoFiltrado} onChange={(e) => setProdutoFiltrado(e.target.value)} name="" id=""/>
                    <Feather name='search' size={18} color='white' />   
            </View>
            <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
            <Feather name='log-out' size={28} color='#FFF'/>
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Mostruário</Text>
            <View style={{width:'66%', height:70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('/')}>
                        <Text style={[styles.textPage]}>
                            Popular
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#FFF'}}>
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
        <View style={styles.produtosContainer}>
            {(() => {
                if (carregando) {
                    return <Carregando />;
                } else {
                    return <ProdutoFiltrar />;
                }
            })()}
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
    input:{
        fontSize: 13,
        width: '40%',
        height: 38,
        color: '#FFF',
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '60%',
        paddingHorizontal: 20,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#0003',
        color: '#FFF'
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
    produtosContainer:{
        width: '100%',
        flexGrow: 1,
    }
})