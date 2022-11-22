import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

export default function HomeHeader() {
 return (
    <View style={styles.header}>
    <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <Feather name='shopping-cart' size={28} color='white' />   
    </View>
    <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
    <Feather name='log-out' size={28} color='#FFF'/>
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
})