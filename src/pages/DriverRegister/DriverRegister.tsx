import Header from "../components/Header"
import {  FormEvent, useRef } from "react" 
import { api } from "../../services/api"

function DriverRegister() {

    const nameRef = useRef<HTMLInputElement>(null)
    const yearBornRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const cellphoneRef = useRef<HTMLInputElement>(null)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        api.post("/driver-register", {
            name: nameRef.current?.value,
            year_born: yearBornRef.current?.value,
            password: passwordRef.current?.value,
            cellphone: cellphoneRef.current?.value
        })

    }

    return(
        <>
            <Header/>
            <form
            className="flex flex-col gap-8 bg-blue-700 max-w-lg m-auto p-10 my-10 rounded-3xl"
            onSubmit={ handleSubmit }
            >
                <div className="">
                    <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                    <span className="px-6">Name:</span>
                    <input
                        className="text-xl text-black font-serif border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                        placeholder="Nome do motorista..."
                        type="text"
                        required
                        ref={ nameRef }
                    />
                    </label>
                </div>
                <div className="">
                    <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                    <span className="px-6">Ano de nascimento:</span>
                    <input
                        className="text-xl font-serif text-black border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                        placeholder="Ano que nasceu o motorista..."
                        type="text"
                        required
                        ref={ yearBornRef }
                    />
                    </label>
                </div>
                <div className="">
                    <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                    <span className="px-6">Senha de login</span>
                    <input
                        className="text-xl font-serif text-black border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                        placeholder="senha"
                        type="text"
                        required
                        ref={ passwordRef }
                    />
                    </label>
                </div>
                <div className="">
                    <label className="text-xl font-bold text-white font-serif text-dark-purple space-y-1 w-full">
                    <span className="px-6">Celular:</span>
                    <input
                        className="text-xl font-serif text-black border-dark-purple border-2 rounded-xl py-2 block px-6 bg-grey focus:outline-none w-full"
                        placeholder="Número telefone"
                        type="text"
                        required
                        ref={ cellphoneRef }
                    />
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
    );
}

export default DriverRegister