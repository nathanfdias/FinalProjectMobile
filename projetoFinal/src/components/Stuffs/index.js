import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Stuffs(props) {
 return (
   <View style={styles.container}>
        <View style={styles.content}>
            <Feather name={props.name} size={56} color='white' style={styles.icon} /> 
        </View>
        <View style={styles.description}>
            <Text style={{fontSize: 22, color:'#FFF', paddingVertical: 6}}>{props.title}</Text>
            <Text style={{color: '#FFF4'}}>O(a) melhor do mercado</Text>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0003',
        height: 100,
        marginBottom: 10,
        width: '84%',
        alignSelf: 'center',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon:{
        paddingHorizontal: 18,
        paddingVertical: 18,
        alignSelf: 'center',
    },
    content:{
        height: 88,
        borderRadius: 25,
        backgroundColor: '#003579',
        opacity: 0.7,
        alignSelf: 'center', 
        marginLeft: 4,
        width:'28%',
    },
    description: {
        alignSelf: 'center',
        alignItems: 'flex-start',
        width: '72%',
        paddingLeft: 16,
    }
})