import { useEffect, useState } from "react"
import Exercicio from "../../models/Exercicio"
import CardExercicios from "../cardprodutos/CardExercicios"

function ListarExercicios() {
    const [exercicios, setExercicios] = useState<Exercicio[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarExercicios() {
        setIsLoading(true)

        try {
            await listar('/exercicios', setExercicios)
        } catch (error: any) {
            console.log('Erro ao listar todos os Exercicios!')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarExercicios()
    }, [exercicios.length])

    return (
        <>
            {isLoading && (
                <PacmanLoader
                    color="#0D9488"
                    margin={0}
                    size={80}
                    speedMultiplier={2}
                    aria-label="Pacman-loading"
                    className="mx-auto my-8"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-4">
                    {!isLoading && exercicios.length === 0 && (
                        <span className="my-8 text-3xl text-center">
                            Nenhum exercicio foi encontrado
                        </span>
                    )}

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                        {exercicios.map((exercicio) => (
                            <CardExercicios
                                key={exercicio.id}
                                exercicio={exercicio}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarExercicios