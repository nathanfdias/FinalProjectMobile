import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ProdutoAPI } from "../../services/api";
import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import { Feather } from '@expo/vector-icons';


import { useNavigation } from "@react-navigation/native";

import { CartContext } from '../../Context/cart';

export default function ProdutoUnico() {
    const route = useRoute();
    const { produtos, carregando } = ProdutoAPI(`/${route.params.id}`);
    const navigation = useNavigation();

    const { handleAddItemToCart } = useContext(CartContext);

    return (
      <ScrollView style={styles.container}>
           <View style={styles.header}>
               <ImageBackground source={require('../../assets/backgroundproduto.png')} style={styles.image} resizeMode='cover'>
                   <View style={styles.child} >
                       <View style={styles.iconsTop}>
                           <TouchableOpacity onPress={() => navigation.navigate('/Products')}>
                               <Feather name='arrow-left' size={24} color='white' />
                           </TouchableOpacity>
                           <View style={{backgroundColor:'#FFF', borderRadius:50, padding: 6}}>
                               <Feather name='heart' size={18} color='black' />
                           </View>
                       </View>
                       <Text style={{fontSize:24, color:'#FFF', alignSelf: 'flex-start', paddingHorizontal:26}}>Produto: {produtos.nome}</Text>
                   </View>
               </ImageBackground>
           </View>
           <View style={styles.main}>
               <View style={{borderBottomWidth: 3, borderBottomColor: '#FFF9', width: 64, alignSelf: 'center', marginTop: 24}}></View>
               <View style={styles.boxes}>
                   <View style={styles.box}>
                       <Feather name='tag' size={30} color='white' style={{paddingHorizontal:20}}/>
                       <View style={{justifyContent:'flex-start', width:110}}>
                           <Text style={{fontSize: 18, color: '#FFF'}}>R${produtos.valor}</Text>
                           <Text style={{fontSize: 12, color: '#FFF5'}}>Preço</Text>
                       </View>
                   </View>
                   <View style={styles.box}>
                       <Feather name='file' size={30} color='white' style={{paddingHorizontal:20}}/>
                       <View style={{justifyContent:'flex-start', width:110}}>
                           <Text style={{fontSize: 16, color: '#FFF'}}>{produtos.nomeCategoria?.toLowerCase()}</Text>
                           <Text style={{fontSize: 12, color: '#FFF5'}}>Categoria</Text>
                       </View>
                   </View>
               </View>
               <View style={styles.text}>
                   <Text style={{fontSize:18, color:'#FFF'}}>Descrição:</Text>
                   <Text style={{fontSize:12, color:'#FFF4', marginTop:14}}>{produtos.descricao}</Text>
               </View>
               <View style={styles.text}>
                   <Text style={{fontSize:18, color:'#FFF'}}>Galeria</Text>
                   <View style={[styles.images, {marginTop: 16}]}>
                       <View>
                           <Image source={{uri: produtos?.fotoLink}} style={{width:156, height:230, marginVertical:6 ,borderRadius: 12, marginLeft: 10}}/>
                       </View>
                       <View style={{height: 230, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            handleAddItemToCart(
                                produtos.id,
                                produtos.fotoLink,
                                produtos.nome,
                                produtos.valor
                            )
                            alert(`Produto: ${produtos.nome} adicionado ao carrinho!`)
                        }}>
                                <Text style={{color:'#003580'}}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={() => navigation.navigate('/Products')}>
                                <Text style={{color:'#003580'}}>Voltar a loja</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={() => navigation.navigate('/Cart')}>
                            <Feather name='shopping-cart' size={20} color='black' style={{paddingHorizontal:20}}/>
                        </TouchableOpacity>
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
       },
       button:{
           width: 150,
           height: 26,
           alignItems:'center',
           justifyContent: 'center',
           backgroundColor: '#FFF',
           borderRadius: 4,
           marginLeft: 18,
       }
   })
