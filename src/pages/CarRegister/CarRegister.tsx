import Header from "../components/Header"
import { api } from "../../services/api"
import { FormEvent, useRef } from "react" 


function CarRegister() {

    const plateRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const yearRef = useRef<HTMLInputElement>(null)
    const isMercosulRef = useRef<HTMLInputElement>(null)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        await api.post("/car-register", {
            plate: plateRef.current?.value,
            name: nameRef.current?.value,
            year: yearRef.current?.value,
            mercosul: isMercosulRef.current?.checked
        })

    }

    return (
      <>
        <Header/>
        <form
        className="flex flex-col gap-8 bg-blue-700 max-w-lg m-auto p-10 my-10 rounded-3xl"
        onSubmit={ handleSubmit }
        >
            <div className="">
                <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                <span className="px-6">Placa:</span>
                <input
                    className="text-xl text-black font-serif border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                    placeholder="ABC-123"
                    type="text"
                    required
                    ref={plateRef}
                />
                </label>
            </div>
            <div className="">
                <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                <span className="px-6">Nome:</span>
                <input
                    className="text-xl font-serif text-black border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                    placeholder="Nome do carro..."
                    type="text"
                    required
                    ref={nameRef}
                />
                </label>
            </div>
            <div className="">
                <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                <span className="px-6">Ano:</span>
                <input
                    className="text-xl font-serif text-black border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                    placeholder="Ano do carro..."
                    type="text"
                    required
                    ref={yearRef}
                />
                </label>
            </div>
            <div className="px-6 text-white">
                <label className="text-xl font-bold font-serif text-dark-purple space-y-1 w-full">
                <input 
                type="checkbox"
                ref={isMercosulRef}
                />
                <span className="px-6">Placa MERCOSUL</span>
                </label>
            </div>
            <div>
                <input 
                className="bg-white font-bold flex max-w-32 w-full rounded-lg py-2 m-auto"
                value="Enviar"
                type="submit" />
            </div>
        </form>
      </>
    )
  }
  
  export default CarRegister
  