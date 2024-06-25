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

    return(
        <>
            <Header />
            <div className="bg-blue-300 flex max-w-5xl mx-auto my-10">
                <table className="text-center w-full">
                    <thead className="border">
                        <tr>
                            <th className="border px-5 py-2">Posição</th>
                            <th className="border px-5 py-2">Placa</th>
                            <th className="border px-5 py-2">Nome</th>
                            <th className="border px-5 py-2">Ano</th>
                            <th className="border px-5 py-2">MERCOSUL</th>
                        </tr>
                    </thead>

                    {
                        cars.map((car) =>
                        <tbody className="border" 
                        key={car.id}
                        >
                            <tr>
                                <td className="border px-5 py-2">{count()}</td>
                                <td className="border px-5 py-2">{ car.plate }</td>
                                <td className="border px-5 py-2">{ car.name }</td>
                                <td className="border px-5 py-2">{ car.year }</td>
                                <td className="border px-5 py-2">{ car.isMercosul? "SIM" : "NÃO" }</td>
                            </tr>
                        </tbody>
                    )}

                </table>
            </div>
        </>
    );
}

export default Drivers