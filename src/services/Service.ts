import axios from "axios";

const api = axios.create({
baseURL: 'colocar endereço deploy render '
})

export const consultar = async (url: string, setDados: Function) => {
const resposta = await api.get(url)
setDados(resposta.data)
}