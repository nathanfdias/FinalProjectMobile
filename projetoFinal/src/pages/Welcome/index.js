import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Animatable.Image animation='flipInX' delay={100} source={require('../../assets/logo.png')} style={styles.logoImg}/>
            </View>
            <Animatable.View delay={700} animation='fadeInUp' style={styles.footer}>
                <Text style={styles.title}>Os melhores veículos você encontra na AsphaltCoding</Text>
                <Text style={styles.txt}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7B0000',
    },
    logo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg:{
        width: 100,
        height: 100,
    },
    footer:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: '24%',
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 18,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#7B0000',
        borderRadius: 50,
        paddingVertical: '5%',
        width: '60%',
        alignSelf: 'center',
        bottom: '15%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

})