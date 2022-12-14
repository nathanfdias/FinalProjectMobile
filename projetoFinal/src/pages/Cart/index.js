import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { CartContext } from '../../Context/cart';

export default function Cart() {
    const navigation = useNavigation();
    let totalPrice = 0;
    const {
        productsCart,
        clearCart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        removalItem,
    } = useContext(CartContext);

 return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
                <TouchableOpacity onPress={() => navigation.navigate('/Products')}>
                    <Feather name='chevron-left' size={28} color='white'/>   
                </TouchableOpacity>
            </View>
            <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
                <TouchableOpacity onPress={() => navigation.navigate('/')}>
                    <Feather name='home' size={28} color='#FFF'/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Carrinho</Text>
            <View style={{height:70}}>
            </View>
        </View>

        {productsCart?.map((produtos) => {
        const subTotal = produtos.valor * produtos.quantidade;
        totalPrice += subTotal;

            return(
                <View style={styles.boxProduto}>
                    <Image source={{uri: produtos.fotoLink}} style={{width: 80, height: 80}}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text >        
                            {produtos.nome}
                        </Text>
                        <Text>
                            Valor Unit: R$ {produtos.valor}
                        </Text>
                        </View>
                        <View style={{flexDirection:'row', width: 60, justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={() => handleRemoveItemToCart(produtos.id)}>
                                <Text style={styles.quantidade}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantidade}>{produtos.quantidade}</Text>
                            <TouchableOpacity onPress={() => handleAddItemToCart(
                                      produtos.id,
                                      produtos.fotoLink,
                                      produtos.nome,
                                      produtos.valor
                                    )}>
                                <Text style={styles.quantidade}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => removalItem(produtos.id)}>
                            <Feather name='x-circle' size={20}/>
                        </TouchableOpacity>
                </View>
            )
        })}

        <View style={{width: '100%', alignItems: 'flex-end', paddingRight: 20, paddingTop: 10}}>
            <Text style={{fontStyle: 'italic', color: '#003580'}}>Quantidade de Items: {productsCart.length}</Text>
        </View>
        <View style={styles.valorTotal}>
            <Text style={{fontSize:14}}>Valor Total: R$ {totalPrice}</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={clearCart}>
                <Text style={styles.button}>Limpar Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Compra em Manuten????o')}>
                <Text style={styles.button}>Finalizar Compra</Text>
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
    boxProduto:{
        height: 100,
        width: '100%',
        backgroundColor: '#0001',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    quantidade:{
        fontSize: 16,
    },
    button:{
        backgroundColor: '#003580',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    buttons:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingHorizontal: 50,
    },
    valorTotal: {
        marginTop: 20,
        paddingHorizontal: 50,
    }
})