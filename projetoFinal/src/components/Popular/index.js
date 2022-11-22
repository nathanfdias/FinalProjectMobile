import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DiscoverPage from '../../components/DiscoverPage';
import Stuffs from '../../components/Stuffs';

export default function Popular() {
    const navigation = useNavigation();

 return (
   <View>
        <View style={styles.main}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Descubra</Text>
            <View style={{width:'66%', height:70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#FFF'}}>
                    <TouchableOpacity>
                        <Text style={[styles.textPage]}>
                            Popular
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mainDiscover}>
            <DiscoverPage cover={require('../../assets/teste.jpg')} produto='Produto' categoria='categoria' onPress={() => navigation.navigate('Detail')}/>
            <DiscoverPage cover={require('../../assets/teste.jpg')} produto='Produto' categoria='categoria' onPress={() => navigation.navigate('Detail')}/>
            <DiscoverPage cover={require('../../assets/teste.jpg')} produto='Produto' categoria='categoria' onPress={() => navigation.navigate('Detail')}/>
        </ScrollView>
        <View style={styles.footer}>
            <Text style={{paddingHorizontal: 30, color: '#FFF', fontSize: 18, paddingBottom: 26}}>Comprando conosco:</Text>
            <Stuffs name='phone' title='Comunicação'/>
            <Stuffs name='truck' title='Envio rápido'/>
            <Stuffs name='thumbs-up' title='Avaliação'/>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
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
    footer:{
        width: '100%',
        backgroundColor: '#003580',
    }
})