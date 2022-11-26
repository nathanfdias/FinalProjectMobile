import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import { ProdutoAPI } from "../../services/api";
import { deleteProduto } from "../../services/api";
import { getProdutos } from "../../services/api";
import Loading from "../../components/Loading/Loading";

export default function Products() {
  const navigation = useNavigation();
  const [produtoFiltrado, setProdutoFiltrado] = useState("");
  const [url, setUrl] = useState("");
  const { produtos, carregando } = ProdutoAPI();
  const [produto, setproduto] = useState([])

  function infoId(item) {
    navigation.navigate("/Products/Detail", { id: item.id });
  }

  const deleteId = async (item) => {
    const deletarProduto = await deleteProduto(`${item.id}`);
    fetchData();
  }

  const editarProduto = async (item) => {
    navigation.navigate("/Products/Update", { item: item });
  }

  const fetchData = async () => {
    const produtoList = await getProdutos();
    setproduto(produtoList)
  }

  useEffect(() => {
    navigation.addListener('focus', () => fetchData())
  }, [])


  useEffect(() => {
    setUrl(urlLink(navigation.pathname));
  }, [navigation]);

  const urlLink = (url) => {
    if (!url == "/Products") {
      return `/`;
    }
    return "/Products";
  };

  const render = ({ item }) => {
    return (
      <View style={styles.produtos}>
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: item.fotoLink }}
        />
        <View style={styles.descricao}>
          <Text style={styles.titulo}>{item.nome.substring(0, 13)}</Text>
          <Text style={styles.subTitulo}>{`R$ ${item.valor}`}</Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => infoId(item)}>
            <Text style={{ color: "#003580" }}>Detalhes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => editarProduto(item)}>
            <Text style={{ color: "#003580" }}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => deleteId(item)}>
            <Text style={{ color: "#003580" }}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ProdutoFiltrar = () => {
    const produtosFiltrados = produto?.filter((produto) =>
      produto.nome.toUpperCase().includes(produtoFiltrado.toUpperCase())
    );

    return (
      <FlatList
        numColumns={2}
        style={{ width: "100%" }}
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={render}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const Carregando = () => {
    return (
      <>
        <View>
          <Loading />
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
            placeholder='Buscar'
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
            name='file-plus'
            size={28}
            color='#FFF'
            onPress={() => navigation.navigate("/Products/Create")}
          />
        </View>
      </View>
      <View style={styles.main}>
        <Text style={{ fontSize: 50, color: "#FFF" }}>Mostruário</Text>
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
    paddingBottom: 500,
  },
  produtos: {
    alignItems: "center",
    padding: 30,
  },
  descricao: {
    backgroundColor: "#003580",
    width: 150,
    borderBottomRightRadius: 45,
  },
  titulo: {
    color: "#F0F8FF",
    fontSize: 18,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitulo: {
    color: "#B0E0E6",
    fontSize: 14,
    lineHeight: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttons: {
    marginVertical: 8,
    paddingVertical: 3,
    paddingHorizontal: 6,
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderBottomRightRadius: 10,
  },
});
