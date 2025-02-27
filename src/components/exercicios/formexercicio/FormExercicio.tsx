import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../models/Categoria"
import { RotatingLines } from "react-loader-spinner"

function FormExercicio() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
    })
    const [produto, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { id } = useParams<{ id: string }>()

    async function buscarExercicioPorId(id: string) {
        try {
            await listar(`/exercicios/${id}`, setExercicio)
        } catch (error: any) {
            alert('Erro ao Buscar Exercicio')
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Erro ao Buscar Categoria')
        }
    }

    async function buscarCategorias() {
        try {
            await listar(`/categorias`, setCategorias)
        } catch (error: any) {
            alert('Erro ao Buscar Categorias')
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarExercicioPorId(id)
        }
    }, [id])

    useEffect(() => {
        setExercicio({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

        /**
         * Através de uma Desestruturação, guardamos as propriedades type, value, name
         * do input que disparou o evento change em constantes
         */
        const { type, value, name } = e.target

        /**
         * Atribuímos o valor (value) do input na variável valor
         */
        let valor: string | number = value

        /**
         * Checamos se o tipo do input é number ou range ou se ao converter o valor para 
         * number ele não retorna NaN - Not a Number (não é um numero) e checamos se o 
         * valor é diferente de vazio
         * 
         * Se as condições acimas forem satisfeitas, significa que temos um numero, logo 
         * precisamos converter para um numero do tipo float, com 2 casas decimais, 
         * porque o único campo do tipo number do fomulário é o preço.
         */
        if (['number', 'range'].includes(type) || (!isNaN(Number(value)) && value !== '')) {
            valor = parseFloat(Number(value).toFixed(2))
        }

        /**
         * Na sequência, atualizamos o Estado Exercicio
         */
        setExercicio({
            ...produto,
            [name]: valor,
            categoria: categoria,
        })
    }

    function retornar() {
        navigate('/exercicios')
    }

    async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/exercicios`, produto, setExercicio)

                alert('Exercicio atualizado com sucesso')
            } catch (error: any) {
                alert('Erro ao atualizar o Exercicio!')
            }
        } else {
            try {
                await cadastrar(`/exercicios`, produto, setExercicio)

                alert('Exercicio cadastrado com sucesso')
            } catch (error: any) {
                alert('Erro ao cadastrar o Exercicio!')
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.nome === ''

    return (
        <div className="container flex flex-col items-center mx-auto">
            <h1 className="my-8 text-4xl text-center">
                {id !== undefined
                    ? 'Editar Exercicio'
                    : 'Cadastrar Exercicio'}
            </h1>

            <form
                className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovoExercicio}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">
                        Nome do Exercicio
                    </label>
                    <input
                        value={produto.nome}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o nome do Exercicio"
                        name="nome"
                        required
                        className="p-2 bg-white border-2 rounded border-slate-700"
                    />
                </div>

                {/* <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">
                        Preço do Exercicio
                    </label>

                    <input
                        value={produto.preco}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="number"
                        step=".01"
                        placeholder="Adicione aqui o preço do Exercicio"
                        name="preco"
                        required
                        className="p-2 bg-white border-2 rounded border-slate-700"
                    />
                </div> */}

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">
                        Foto do Exercicio
                    </label>

                    <input
                        value={produto.foto}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui a foto do Exercicio"
                        name="foto"
                        required
                        className="p-2 bg-white border-2 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria do Exercicio</p>
                    <select
                        name="categoria"
                        id="categoria"
                        className="p-2 bg-white border-2 rounded border-slate-700"
                        onChange={(e) =>
                            buscarCategoriaPorId(
                                e.currentTarget.value
                            )
                        }
                    >
                        <option value="" selected disabled>
                            Selecione uma Categoria
                        </option>
                        {categorias.map((categoria) => (
                            <>
                                <option
                                    value={
                                        categoria.id
                                    }
                                >
                                    {categoria.nome}
                                </option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={carregandoCategoria}
                    className="flex justify-center w-1/2 py-2 mx-auto font-bold text-white rounded disabled:bg-slate-200 bg-slate-400 hover:bg-slate-800"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>
                            {id !== undefined
                                ? 'Atualizar'
                                : 'Cadastrar'}
                        </span>
                    )}
                </button>
            </form>
        </div>
    )
}

export default FormExercicio