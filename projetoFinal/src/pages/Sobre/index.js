import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    StatusBar, TouchableOpacity, SafeAreaView, Linking
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import CardGit from '../../components/CardGit';
import { getUsers } from '../../services/apiGitClient';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading/Loading';

export default function Sobre() {
    const [user, setUser] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const userList = await getUsers();
        setUser(userList)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <View style={styles.container}>
                {loading && <Loading />}
                <View style={styles.header}>
                    <View style={{ width: 54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Feather name='github' size={28} color='white' onPress={() => Linking.openURL('https://github.com/nathanfdias/FinalProjectMobile')} />
                    </View>
                    <View style={{ width: 54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Feather name='log-out' size={28} color='#FFF' onPress={() => navigation.navigate('/SignIn')} />
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={{ fontSize: 50, color: '#FFF' }}>Sobre nós</Text>
                    <View style={{ width: '66%', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('/')}>
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
                        </View >
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#FFF' }}>
                            <Text style={styles.textPage}>
                                Sobre
                            </Text>
                        </View>
                    </View>
                </View>
                <SafeAreaView>
                    <FlatList data={user} keyExtractor={item => item.id} renderItem={({ item }) => <CardGit item={item} />} />
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#003580',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    input: {
        fontSize: 13,
        width: '40%',
        height: 38,
        color: '#FFF',
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        paddingHorizontal: 20,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#0003',
        color: '#FFF'
    },
    main: {
        height: 130,
        backgroundColor: '#003580',
        paddingHorizontal: 30,
        width: '100%',
    },
    textPage: {
        fontSize: 18,
        paddingBottom: 16,
        color: '#FFF',
    },
    mainDiscover: {
        height: 340,
        backgroundColor: '#003580',
        borderTopWidth: 1, borderTopColor: '#0003',
        flexDirection: 'row',
        padding: 20,
        paddingLeft: 30,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginBottom: 250
    },
})