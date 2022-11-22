import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://ecommerce-api-react-serratec.herokuapp.com/produto",
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
