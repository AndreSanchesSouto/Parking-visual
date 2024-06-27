import Header from "../components/Header";
import { FormEvent, useRef } from "react";
import { api } from "../../services/api";

function Register() {

    const nameRef = useRef<HTMLInputElement>(null)
    const surnameRef = useRef<HTMLInputElement>(null)
    const cpfRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const cellphoneRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPassRef = useRef<HTMLInputElement>(null)
    
    function secondPage(event: FormEvent){
        event.preventDefault()
        console.log(
            nameRef.current?.value,
            surnameRef.current?.value
        )

    }

    function thirdPage(event: FormEvent) {
        event.preventDefault()
        console.log(
            cpfRef.current?.value,
            emailRef.current?.value,
            cellphoneRef.current?.value
        )

    }

    function concatName(fisrtName: string, surname: string) {
        return fisrtName + " " + surname
    }

    async function handleRegisterValet(event: FormEvent) {

        event.preventDefault()
        
        const fullname = concatName(nameRef.current?.value + '', surnameRef.current?.value+'')

        api.post("/register", {
            fullname: fullname,
            cpf: cpfRef.current!.value,
            email: emailRef.current!.value,
            cellphone: cellphoneRef.current!.value,
            password: passwordRef.current!.value
        })

        alert(`Usuário '${fullname}' craido com sucesso`)

        nameRef.current!.value = ""
        surnameRef.current!.value = ""
        cpfRef.current!.value = ""
        emailRef.current!.value = ""
        cellphoneRef.current!.value = ""
        passwordRef.current!.value = ""
        confirmPassRef.current!.value = ""
    }

    return(
    <>
        <Header/>
        <div className="bg-indigo-90 w-screen h-screen bg-[url('../components/img.jpg')] bg-cover flex justify-center items-center">
            <div>
                <div className="max-w-4xl bg-indigo-950 bg-opacity-95 shadow-2xl rounded-2xl text-white py-5 flex justify-around align-middle">
                    <div className="flex flex-col justify-center max-w-sm">
                        <h1 
                        className="font-bold text-4xl"
                        >
                            Cadastro de usuário
                        </h1>
                        <h2 className="text-sm">
                            Responda o que se pede para realizar o cadastro no sistema, para mais informações clique <a href=" "className="text-purple-400">aqui...</a>
                        </h2>
                    </div>
                    <div className="flex ">
                        <form className="flex flex-col max-w-xs gap-5 text-lg"
                        onSubmit={ secondPage }
                        >
                            <label className="flex flex-col gap-1">
                                <span 
                                className="px-3"
                                >
                                    Nome
                                </span>
                                <input 
                                type="text" 
                                className="rounded-lg px-3 py-1 text-black bg-stone-300" 
                                required
                                ref={ nameRef }
                                />
                            </label>
                            <label className="flex flex-col gap-1">
                                <span className="px-3"
                                >
                                    Sobrenome
                                </span>
                                <input 
                                type="text" 
                                className="rounded-lg px-3 py-1 text-black bg-stone-300" 
                                required
                                ref={ surnameRef }
                                />
                            </label>
                            <div className="w-full flex justify-end">

                                <input 
                                type="submit" 
                                value="Avançar" 
                                className="text-base w-max hover:text-yellow-400"
                                />
                            </div>
                        </form>
                    </div>  
                </div>
                <div className="m-auto max-w-4xl mt-5 bg-indigo-950 bg-opacity-95 shadow-2xl rounded-2xl text-white p-5 ">
                    <div className="w-full flex gap-5 flex-col">
                        <h2 className="text-2xl font-semibold text-center mb-3">Informações para contato</h2>
                        <form 
                        className="w-max text-lg"
                        onSubmit={ thirdPage }
                        >
                            <div className="flex gap-x-7 gap-y-3 m-auto ">
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">CPF</label>
                                    <input 
                                    type="text" 
                                    className="rounded-lg px-3 py-1 text-black bg-stone-300 text-lg"
                                    required
                                    ref={ cpfRef }
                                    />              
                                </div>  
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">Email</label>
                                    <input 
                                    type="text" 
                                    className="rounded-lg px-3 py-1 text-black bg-stone-300 text-lg"
                                    ref={ emailRef }
                                    />              
                                </div>  
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">Telefone</label>
                                    <input 
                                    type="text" 
                                    className="rounded-lg px-3 py-1 text-black bg-stone-300 text-lg"
                                    ref={ cellphoneRef }
                                    />              
                                </div>  
                                    
                            </div> 
                            <div className="w-full flex pt-4 shrink-0 justify-end">
                                <button className="text-base w-max hover:text-yellow-400"
                                >
                                    Avançar
                                </button>
                            </div>            
                        </form>
                    </div>
                </div>
                <div className="m-auto max-w-4xl mt-5 bg-indigo-950 bg-opacity-95 shadow-2xl rounded-2xl text-white p-5 ">
                    <form 
                    className="grid grid-cols-2 gap-5"
                    onSubmit={ handleRegisterValet }
                    >
                        <div className="m-auto">
                            <label className="flex flex-row px-3 mb-2 text-xl">Senha</label>
                            <input 
                            type="password" 
                            className="px-3 py-1 rounded-lg text-black bg-stone-300"
                            required
                            ref={ passwordRef }
                            />
                        </div>
                        <div className="m-auto">
                            <label className="flex flex-row px-3 mb-2 text-xl">Confirmar Senha</label>
                            <input 
                            type="password" 
                            className="px-3 py-1 rounded-lg text-black bg-stone-300"
                            required
                            ref={ confirmPassRef }

                            />
                        </div>
                        <div className="col-span-2 m-auto">
                            <input 
                            type="submit" 
                            value="Cadastrar" 
                            className="bg-orange-400 shadow-lg font-bold rounded-xl text-indigo-950 p-2 hover:duration-100 hover:bg-green-400 hover:"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default Register