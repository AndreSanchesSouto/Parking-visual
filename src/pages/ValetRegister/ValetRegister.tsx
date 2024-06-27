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
            <form 
            className="flex flex-col justify-around"
            onSubmit={ handleRegisterValet }>
                <div className=" bg-indigo-950 w-full bg-opacity-95 shadow-2xl gap-20 py-10 px-20 rounded-2xl text-white p-5 flex justify-around align-middle">
                    <div className="flex flex-col justify-center max-w-sm">
                        <h1 
                        className="font-bold text-5xl"
                        >
                            Cadastro de usuário
                        </h1>
                        <h2 className="text-md">
                            Responda o que se pede para realizar o cadastro no sistema, para mais informações clique <a href=" "className="text-purple-400">aqui...</a>
                        </h2>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col gap-5 text-lg"
                        >
                            <label className="flex flex-col gap-1">
                                <span 
                                className="px-3"
                                >
                                    Nome
                                </span>
                                <input 
                                type="text" 
                                className="rounded-lg px-3 py-1 text-black bg-stone-300 text-sm" 
                                placeholder="Primeiro nome"
                                size={25}
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
                                className="rounded-lg px-3 py-1 text-black bg-stone-300 text-sm" 
                                placeholder="Sobrenome"
                                size={25}
                                required
                                ref={ surnameRef }
                                />
                            </label>
                        </div>
                    </div>  
                </div>
                <div className="mt-5 bg-indigo-950 bg-opacity-95 shadow-2xl rounded-2xl text-white p-5 w-full">
                    <div className="w-full flex gap-5 flex-col">
                        <h2 className="text-3xl font-semibold text-center">Informações para contato</h2>
                        <div 
                        className=" text-lg"
                        >
                            <div className="flex gap-x-7 gap-y-3 justify-center">
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">CPF</label>
                                    <input 
                                    type="text" 
                                    className="rounded-lg px-3 py-1 text-black bg-stone-300 text-sm"
                                    placeholder="XXX.XXX.XXX-XX"
                                    required
                                    ref={ cpfRef }
                                    />              
                                </div>  
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">Email</label>
                                    <input 
                                    type="text" 
                                    className="rounded-lg px-3 py-1 text-black bg-stone-300 text-sm"
                                    placeholder="seuemail@mail.com"
                                    size={30}
                                    ref={ emailRef }
                                    />              
                                </div>  
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">Telefone</label>
                                    <input 
                                    type="text" 
                                    className="rounded-lg px-3 py-1 text-black bg-stone-300 text-sm"
                                    placeholder="(xx)9.xxxx-xxxx"
                                    ref={ cellphoneRef }
                                    />              
                                </div>  
                                    
                            </div>           
                        </div>
                    </div>
                </div>
                <div className="m-auto mt-5 bg-indigo-950 bg-opacity-95 shadow-2xl rounded-2xl text-white p-5 w-full">
                    <div 
                    className=""
                    onSubmit={ handleRegisterValet }
                    >
                        <div className="flex justify-around">
                            <div>
                                <label className="flex px-3 mb-2 text-xl">Senha</label>
                                <input 
                                type="password" 
                                className="px-3 py-1 rounded-lg text-black bg-stone-300 text-sm"
                                placeholder="senha"
                                required
                                size={25}
                                ref={ passwordRef }
                                />
                            </div>
                            <div>
                                <label className="flex px-3 mb-2 text-xl">Confirmar Senha</label>
                                <input 
                                type="password" 
                                className="px-3 py-1 rounded-lg text-black bg-stone-300 text-sm"
                                placeholder="confirmar senha"
                                required
                                size={25}
                                ref={ confirmPassRef }

                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <input 
                            type="submit" 
                            value="Cadastrar" 
                            className="bg-orange-400 shadow-lg font-bold rounded-xl text-indigo-950 p-2 hover:duration-100 hover:bg-green-400 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
    );
}

export default Register