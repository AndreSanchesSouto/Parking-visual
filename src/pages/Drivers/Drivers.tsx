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

    async function handleDelete(id: string) {
        await api.delete("driver-delete", {
            params: {
                id: id
            }
        })

        loadDrivers()
    }

    return(
        <>
            <Header />
            <div className="flex max-w-5xl mx-auto my-10">
                <table className="text-center w-full">
                    <thead className="">
                        <tr>
                            <th className="bg-blue-300 border px-5 py-2">Posição</th>
                            <th className="bg-blue-300 border px-5 py-2">Nome</th>
                            <th className="bg-blue-300 border px-5 py-2">Ano nascimento</th>
                            <th className="bg-blue-300 border px-5 py-2">Celular</th>
                        </tr>
                    </thead>

                    {
                        drivers.map((driver) => 
                            <tbody className="" 
                            key={driver.id}
                            >
                                <tr className="hover:bg-blue-400 hover:text-white hover:scale-105 hover:duration-200 hover:rounded-full bg-blue-300">
                                    <td className="border px-5 py-2">{count()}</td>
                                    <td className="border px-5 py-2">{driver.name}</td>
                                    <td className="border px-5 py-2">{driver.year_born}</td>
                                    <td className="border px-5 py-2">{driver.cellphone}</td>
                                    <td className="bg-white">
                                        <button 
                                        className="bg-red-500 text-white rounded-2xl p-1 flex justify-start "
                                        onClickCapture={() => { handleDelete(driver.id) }}
                                        >
                                            Deletar
                                        </button>
                                    </td>
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