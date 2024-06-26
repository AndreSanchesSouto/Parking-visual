import Header from "../components/Header";

function Register() {

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
                        <form className="flex flex-col max-w-xs gap-5 text-lg">
                            <label className="flex flex-col gap-1">
                                <span 
                                className="px-3"
                                >
                                    Nome
                                </span>
                                <input type="text" className="rounded-lg px-3 py-1 text-black" 
                                required
                                />
                            </label>
                            <label className="flex flex-col gap-1">
                                <span className="px-3"
                                >
                                    Sobrenome
                                </span>
                                <input type="text" className="rounded-lg px-3 py-1 text-black" 
                                required
                                />
                            </label>
                            <div className="w-full flex justify-end">
                                <button value="Avançar" className="text-base w-max hover:text-yellow-400"
                                >
                                    Avançar
                                </button>
                            </div>
                        </form>
                    </div>  
                </div>
                <div className="m-auto max-w-4xl mt-5 bg-indigo-950 bg-opacity-95 shadow-2xl rounded-2xl text-white p-5 ">
                    <div className="w-full flex gap-5 flex-col">
                        <h2 className="text-2xl font-semibold text-center mb-3">Informações para contato</h2>
                        <form className="w-max text-lg">
                            <div className="flex gap-x-7 gap-y-3 m-auto">
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">CPF</label>
                                    <input type="text" className="rounded-lg px-3 py-1 text-black text-lg"/>              
                                </div>  
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">Email</label>
                                    <input type="text" className="rounded-lg px-3 py-1 text-black text-lg"/>              
                                </div>  
                                <div className="flex flex-col">
                                    <label className="px-3 py-1">Telefone</label>
                                    <input type="text" className="rounded-lg px-3 py-1 text-black text-lg"/>              
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
                    <div className="grid grid-cols-2 gap-5">
                        <div className="m-auto">
                            <label className="flex flex-row px-3 mb-2 text-xl">Senha</label>
                            <input type="password" className="px-3 py-1 rounded-lg text-black"/>
                        </div>
                        <div className="m-auto">
                            <label className="flex flex-row px-3 mb-2 text-xl">Confirmar Senha</label>
                            <input type="password" className="px-3 py-1 rounded-lg text-black"/>
                        </div>
                        <div className="col-span-2 m-auto">
                            <input type="submit" value="Cadastrar" className="bg-sky-100 rounded-xl text-indigo-950 p-2 hover:bg-yellow-400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Register