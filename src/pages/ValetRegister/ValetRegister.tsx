import Header from "../components/Header";

function Register() {

    return(
    <>
        <Header/>
        <div className="bg-indigo-90 w-screen h-screen">
            <div className="m-auto mt-10 max-w-4xl bg-indigo-950 bg-opacity-80 shadow-2xl rounded-2xl text-white p-5 flex justify-around ">
                <div className="flex flex-col justify-center max-w-sm">
                    <h1 
                    className="font-bold text-4xl"
                    >
                        Cadastro de usuário
                    </h1>
                    <h2 className="text-sm">
                        Responda o que se pede para realizar o cadastro no sistema, para mais informações clique <span className="text-purple-400">aqui...</span>
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
            <div className="m-auto max-w-4xl mt-5 bg-indigo-950 bg-opacity-80 shadow-2xl rounded-2xl text-white p-5 ">
                <div className="w-full flex gap-5 flex-col">
                    <h2 className="text-2xl font-semibold text-center mb-3">Informações para contato</h2>
                    <form className="grid grid-cols-3 gap-x-1    gap-y-3 m-auto">
                        <label className="">CPF: <input type="text" className="rounded-lg px-3 text-black text-lg"/></label>                
                        <label className="">Email: <input type="text" className="rounded-lg px-3 text-black text-lg"/></label>                
                        <label className="">Celular: <input type="text" className="rounded-lg px-3 text-black text-lg"/></label>        
                        <div className="w-full flex justify-end col-span-3">
                            <button className="text-base w-max hover:text-yellow-400"
                            >
                                Avançar
                            </button>
                        </div>            
                    </form>
                </div>
            </div>
            <div className="m-auto max-w-4xl mt-5 bg-indigo-950 bg-opacity-80 shadow-2xl rounded-2xl text-white p-5 ">
                <div className="grid grid-cols-2 gap-5">
                    <div className="m-auto">
                        <label className="flex flex-row justify-center mb-2 text-xl">Senha</label>
                        <input type="password" className="px-3 py-1 rounded-lg text-black"/>
                    </div>
                    <div className="m-auto">
                        <label className="flex flex-row justify-center mb-2 text-xl">Confirmar Senha</label>
                        <input type="password" className="px-3 py-1 rounded-lg text-black"/>
                    </div>
                    <div className="col-span-2 m-auto">
                        <input type="submit" value="Cadastrar" className="bg-sky-100 rounded-xl text-indigo-950 p-2 hover:bg-yellow-400"/>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}

export default Register