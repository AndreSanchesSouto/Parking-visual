import Header from "../components/Header"
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface DriverProps {
    id: string,
    name: string, 
    year_born: string,
    password: string,
    cellphone: string 

}

function Drivers() {

  const [drivers, setDrivers] = useState<DriverProps[]>([])


    useEffect(() => {
        loadDrivers()
    },[]) 

    async function loadDrivers() {
        const list = await api.get("/drivers")
        setDrivers(list.data)
    }
    let n = 1
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
                            <th className="border px-5 py-2">Nome</th>
                            <th className="border px-5 py-2">Ano nascimento</th>
                            <th className="border px-5 py-2">Celular</th>
                        </tr>
                    </thead>

                    {
                        drivers.map((driver) => 
                            <tbody className="border" 
                            key={driver.id}
                            >
                                <tr>
                                    <td className="border px-5 py-2">{count()}</td>
                                    <td className="border px-5 py-2">{driver.name}</td>
                                    <td className="border px-5 py-2">{driver.year_born}</td>
                                    <td className="border px-5 py-2">{driver.cellphone}</td>
                                </tr>
                            </tbody>
                        )
                    }
                    
                </table>
            </div>
        </>
    );
}

export default Drivers