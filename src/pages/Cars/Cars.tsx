import { useEffect, useState } from "react";
import Header from "../components/Header"
import { api } from "../../services/api";

interface CarProps {
    id: string,
    plate: string,
    name: string,
    year: string,
    isMercosul: boolean
}

function Drivers() {

    const [cars, setCars] = useState<CarProps[]>([])

    useEffect(() => {
        loadCars()
    },[])

    async function loadCars() {
        const list = await api.get("/cars")
        setCars(list.data)
    }

    let n=1
    function count() {
        return n++
    }

    async function handleDelete(plate: string) {
        await api.delete("/car-delete", {
            params: {
                plate: plate
            }
        })

        loadCars()
    }

    return(
        <>
            <Header />
            <div className="flex max-w-5xl mx-auto my-10">
                <table className="text-center w-full">
                    <thead>
                        <tr>
                            <th className="border bg-blue-300 px-5 py-2">Posição</th>
                            <th className="border bg-blue-300 px-5 py-2">Placa</th>
                            <th className="border bg-blue-300 px-5 py-2">Nome</th>
                            <th className="border bg-blue-300 px-5 py-2">Ano</th>
                            <th className="border bg-blue-300 px-5 py-2">MERCOSUL</th>
                        </tr>
                    </thead>

                    {
                        cars.map((car) =>
                        <tbody 
                        key={car.plate}
                        >
                            <tr>
                                <td className="border bg-blue-300 px-5 py-2">{count()}</td>
                                <td className="border bg-blue-300 px-5 py-2">{ car.plate }</td>
                                <td className="border bg-blue-300 px-5 py-2">{ car.name }</td>
                                <td className="border bg-blue-300 px-5 py-2">{ car.year }</td>
                                <td className="border bg-blue-300 px-5 py-2">{ car.isMercosul? "SIM" : "NÃO" }</td>
                                <td>
                                    <button 
                                    className="bg-red-500 text-white rounded-2xl p-1 flex justify-start"
                                    onClickCapture={() => { handleDelete(car.plate) }}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                           
                    )}

                </table>
            </div>
        </>
    );
}

export default Drivers