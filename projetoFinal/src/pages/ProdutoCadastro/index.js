import React from 'react';
import { useRoute } from '@react-navigation/native';
import { cadastrarProduto } from "../../services/api";
import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker'

export default function ProdutoCadastro() {
    const route = useRoute();
    const navigation = useNavigation();
    const [produtos, setProdutos] = useState()
    const [nome, setNome] = useState()
    const [valor, setValor] = useState()
    const [descricao, setDescricao] = useState()
    const [imagem, setImagem] = useState()
    const [quantidade, setQuantidade] = useState()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [nomeCategoria, setNomeCategoria] = useState([
        { label: 'INFORMATICA', value: 'INFORMATICA' },
        { label: 'ESCRITORIO', value: 'ESCRITORIO' },
        { label: 'LIVRARIA', value: 'LIVRARIA' }
    ]);


    const cadastrar = async (e) => {

        const produto = {
            nome: nome,
            valor: valor,
            descricao: descricao,
            nomeCategoria: value,
            fotoLink: imagem,
            qtdEstoque: quantidade,
            idCategoria: 1,
            idFuncionario: 1,
            nomeFuncionario: "admin",
            dataFabricacao: "2019-10-01T00:00:00Z"

        }
        console.log(produto)
        await cadastrarProduto(produto);
        alert("Cadastrado com sucesso")
    }

    return (
        <View style={styles.container}>
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
                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Nome:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setNome} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Valor:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} keyboardType='numeric' placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setValor} name='' id='' />
                </View>
                
                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Quantidade:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} keyboardType='numeric' placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setQuantidade} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Categoria:</Text>
                <DropDownPicker style={styles.drop}
                    open={open}
                    value={value}
                    items={nomeCategoria}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setNomeCategoria}
                />

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Descrição:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setDescricao} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Imagem:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder='' keyboardType='url' placeholderTextColor='#FFFFFF' value={produtos} onChangeText={setImagem} name='' id='' />
                </View>

                <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => cadastrar()}>
                    <Text style={{ color: '#003580' }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    header: {},
    image: {
        height: 280,
        width: '100%',
    },
    iconsTop: {
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 26,
    },
    main: {
        marginTop: -40,
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        backgroundColor: '#003580',
        height: 600,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 34,
        paddingHorizontal: 42,
    },
    button: {
        width: 150,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 4,
        marginLeft: 18,
    },
    input: {
        fontSize: 13,
        height: 38,
        color: "#FFFFFF",
        padding: 10,
    },
    inputArea: {
        width: "90%",
        height: 48,
        borderRadius: 16,
        backgroundColor: "#0003",
        color: "#FFFFFF",
        margin: 5,
    },
    drop: {
        backgroundColor: "#0003",
        color: "#FFFFFF",
        width: '90%',
        borderColor: "#0003",
        margin: 5,
        marginLeft: 21,
        paddingHorizontal: 26
    },
})
