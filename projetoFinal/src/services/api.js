import axios from "axios";
import { useEffect, useState } from "react";

export const api = axios.create({
  baseURL: "https://kifel.herokuapp.com/produto",
});

export function ProdutoAPI(url) {
  const [carregando, setCarregando] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return { produtos, carregando, error };
}


export const deleteProduto = async (id) => {
  try {
      const deleteProduto = await api.delete("/" + id)
      return deleteProduto
  } catch (e) {
      console.log(e)
  }
}

export const getProdutos = async () => {
  try {
      const { data } = await api.get()
      return data
  } catch (e) {
      console.log(e)
  }
}

export const cadastrarProduto = async (novoProduto) => {
  try {
      const produto = await api.post("/", novoProduto)
      return produto
  } catch (e) {
      console.log(e)
  }
}

export const atualizarProduto = async (produto) => {
  try {
      const atualizarProduto = await api.put(`/${produto.id}`, produto)
      return atualizarProduto
  } catch (e) {
      console.log(e)
  }
}

