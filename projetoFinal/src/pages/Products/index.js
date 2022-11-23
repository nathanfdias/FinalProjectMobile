import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
// import { TextInput } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import { ProdutoAPI } from "../../services/api";

export default function Products() {
  const navigation = useNavigation();
  const [produtoFiltrado, setProdutoFiltrado] = useState("");
  const [url, setUrl] = useState("");
  const { produtos, carregando } = ProdutoAPI();

  useEffect(() => {
    console.log(produtos);
    setUrl(urlLink(navigation.pathname));
  }, [navigation]);

  const urlLink = (url) => {
    if (!url == "/Products") {
      return `/`;
    }
    return `/Products`;
  };
  
console.log(produtos)
  const render = ({ item }) => {
    return (
      <View style={styles.produtos}>
        <Image
          style={{ width: 250, height: 250 }}
          source={{ uri: item.fotoLink }}
        />
        <View style={styles.descricao}>
          <Text style={styles.titulo}>{item.nome}</Text>
          <Text style={styles.subTitulo}>{`R$ ${item.valor.toFixed(2)}`}</Text>
          {/* <NavLink
                        to={`${url}/${item.id}`}
                        className="buttons"
                    >
                        <button>Detalhes</button>
                    </NavLink> */}
                    
        </View>
      </View>
    );
  };

  const ProdutoFiltrar = () => {
  
    const produtosFiltrados = produtos?.filter((produto) =>
      produto.nome.toUpperCase().includes(produtoFiltrado.toUpperCase())
    );

    return (
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={render}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
      />
    );
  };

  const Carregando = () => {
    return (
      <>
        <View>
          <Text>CARREGANDO PRODUTOS</Text>
        </View>
      </>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder='Search'
            placeholderTextColor='#FFFFFF'
            value={produtoFiltrado}
            onChangeText={setProdutoFiltrado}
            name=''
            id=''
          />
          <Feather
            name='search'
            size={18}
            color='#FFFFFF'
          />
        </View>
        <View
          style={{
            width: 54,
            height: 54,
            backgroundColor: "#0003",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}>
          <Feather
            name='log-out'
            size={28}
            color='#FFFFFF'
          />
        </View>
      </View>
      <View style={styles.main}>
        <Text style={{ fontSize: 50, color: "#FFFFFF" }}>Mostruário</Text>
        <View
          style={{
            width: "66%",
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("/")}>
              <Text style={[styles.textPage]}>Popular</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#FFFFFF" }}>
            <TouchableOpacity onPress={() => navigation.navigate("/Products")}>
              <Text style={styles.textPage}>Produtos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("/Sobre")}>
              <Text style={styles.textPage}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.produtosContainer}>
        {(() => {
          if (carregando) {
            return <Carregando />;
          } else {
            return <ProdutoFiltrar />;
          }
        })()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003580",
    height: 120,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  input: {
    fontSize: 13,
    width: "40%",
    height: 38,
    color: "#FFFFFF",
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    paddingHorizontal: 20,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#0003",
    color: "#FFFFFF",
  },
  main: {
    height: 130,
    backgroundColor: "#003580",
    paddingHorizontal: 30,
    width: "100%",
  },
  textPage: {
    fontSize: 18,
    paddingBottom: 16,
    color: "#FFFFFF",
  },
  produtosContainer: {
    width: "100%",
    flexGrow: 1,
    paddingBottom: 80,
  },
  produtos: {
    alignItems: "center",
    padding: 30,
  },
  descricao: {
    backgroundColor: "#003580",
    width: "75%",
    borderBottomRightRadius: 45,
  },
  titulo: {
    color: "#F0F8FF",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitulo: {
    color: "#B0E0E6",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
});