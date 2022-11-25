import React from 'react';
import { useRoute } from '@react-navigation/native';
import  { cadastrarProduto } from "../../services/api";
import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { CartContext } from '../../Context/cart';

export default function ProdutoCadastro() {
    const route = useRoute();
    const navigation = useNavigation();
    const [produtos, setProdutos] = useState()
    const [nome, setNome] = useState()
    const [valor, setValor] = useState()
    const [descricao, setDescricao] = useState()
    const [nomeCategoria, setNomeCategoria] = useState()
    const [imagem, setImagem] = useState()


    const cadastrar = async (e) => {

            const produto = {
                nome: nome,
                valor: valor,
                descricao: descricao,
                nomeCategoria: nomeCategoria,
                fotoLink: imagem, 
                qtdEstoque : 1,
                idCategoria: 1,
                idFuncionario: 1,
                nomeFuncionario: "admin",
                dataFabricacao: "2009-01-21T00:00:00Z"

            }
            console.log(produto)
            await cadastrarProduto(produto);
            alert("Cadastrado com sucesso")
    }

    return (
      <ScrollView style={styles.container}>
           <View style={styles.header}>
               <ImageBackground source={require('../../assets/backgroundproduto.png')} style={styles.image} resizeMode='cover'>
                   <View style={styles.child} >
                       <View style={styles.iconsTop}>
                           <TouchableOpacity onPress={() => navigation.navigate('/Products')}>
                               <Feather name='arrow-left' size={24} color='white' />
                           </TouchableOpacity>
                       </View>
                   </View>
               </ImageBackground>
           </View>
           <View style={styles.main}>
            <Text style={{fontSize:24, color:'#FFF', alignSelf: 'flex-start', paddingHorizontal:26}}>Produto: {nome}</Text>
            <View style={styles.inputArea}>
                <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setNome} name='' id='' />
            </View>
               <View style={{borderBottomWidth: 3, borderBottomColor: '#FFF9', width: 64, alignSelf: 'center', marginTop: 24}}></View>
               <View style={styles.boxes}>
                   <View style={styles.box}>
                       <Feather name='tag' size={30} color='white' style={{paddingHorizontal:20}}/>
                       <View style={{justifyContent:'flex-start', width:110}}>
                           <Text style={{fontSize: 18, color: '#FFF'}}>R$: {valor}</Text>
                           <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setValor} name='' id='' />
                       </View>
                   </View>
                   <View style={styles.box}>
                       <Feather name='file' size={30} color='white' style={{paddingHorizontal:20}}/>
                       <View style={{justifyContent:'flex-start', width:110}}>
                            <Text style={{fontSize: 12, color: '#FFF5'}}>Categoria</Text>
                            <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setNomeCategoria} name='' id='' />
                       </View>
                   </View>
               </View>
               <View style={styles.text}>
                   <Text style={{fontSize:18, color:'#FFF'}}>Descrição:</Text>
               </View>
                   <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setDescricao} name='' id='' />
                  </View>
               <View style={styles.text}>
                   <Text style={{fontSize:18, color:'#FFF'}}>Imagem:</Text>
                   <View style={[{marginTop: 16}]}>
                   </View>
               </View>
                   <View style={styles.inputArea}>
                        <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setImagem} name='' id='' />
                    </View>
                    <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={() => cadastrar()}>
                                <Text style={{color:'#003580'}}>Cadastrar</Text>
                        </TouchableOpacity>
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
           alignItems: 'center',
           padding: 5
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
       button:{
           width: 150,
           height: 26,
           alignItems:'center',
           justifyContent: 'center',
           backgroundColor: '#FFF',
           borderRadius: 4,
           marginLeft: 18,
       },
       input: {
        fontSize: 13,
        height: 38,
        color: "#FFFFFF",
      },
      inputArea: {
        width: "90%",
        height: 48,
        borderRadius: 16,
        backgroundColor: "#0003",
        color: "#FFFFFF",
        margin:5
      },
   })
