import React from 'react';
import { useRoute } from '@react-navigation/native';
import { atualizarProduto } from "../../services/api";
import { api } from "../../services/api"
import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker'

export default function ProdutoAtualizar({ route }) {
    const { item } = route.params
    const navigation = useNavigation();
    const [nome, setNome] = useState(item.nome)
    const [valor, setValor] = useState(item.valor)
    const [descricao, setDescricao] = useState(item.descricao)
    const [imagem, setImagem] = useState(item.fotoLink)
    const [quantidade, setQuantidade] = useState(item.qtdEstoque)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [nomeCategoria, setNomeCategoria] = useState([
        { label: 'INFORMATICA', value: 'INFORMATICA' },
        { label: 'ESCRITORIO', value: 'ESCRITORIO' },
        { label: 'LIVRARIA', value: 'LIVRARIA' }
    ]);


    const cadastrar = async (e) => {
        if (nome == '' || valor == '' || descricao == '' || imagem == '') {
            alert('Campos obrigatórios em branco')
        } else {
            const produto = {
                nome: nome,
                valor: 1,
                descricao: descricao,
                nomeCategoria: "INFORMATICA",
                fotoLink: imagem,
                qtdEstoque: 1,
                idCategoria: 1,
                idFuncionario: 1,
                nomeFuncionario: "admin",
                dataFabricacao: "2019-10-01T00:00:00Z"
            }
            await api.put(`/${item.id}`, produto)
            alert("Atualizado com sucesso")
            navigation.goBack()
        }
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
                    <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={nome} onChangeText={setNome} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Valor:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} keyboardType='numeric' placeholder='' placeholderTextColor='#FFFFFF' value={valor.toString()} onChangeText={setValor} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Quantidade:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} keyboardType='numeric' placeholder='' placeholderTextColor='#FFFFFF' value={quantidade.toString()} onChangeText={setQuantidade} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Categoria:</Text>
                <DropDownPicker style={styles.drop}
                    open={open}
                    value={item.nomeCategoria}
                    items={nomeCategoria}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setNomeCategoria}
                />

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Descrição:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder='' placeholderTextColor='#FFFFFF' value={descricao} onChangeText={setDescricao} name='' id='' />
                </View>

                <Text style={{ fontSize: 18, color: '#FFF', alignSelf: 'flex-start', paddingHorizontal: 26 }}>Imagem:</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder='' keyboardType='url' placeholderTextColor='#FFFFFF' value={imagem} onChangeText={setImagem} name='' id='' />
                </View>

                <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => cadastrar()}>
                    <Text style={{ color: '#003580' }}>Atualizar</Text>
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
