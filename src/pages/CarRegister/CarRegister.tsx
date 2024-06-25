import Header from "../components/Header"

function CarRegister() {

    return (
      <>
        <Header/>
        <form className="flex flex-col gap-8 bg-red-700 max-w-lg m-auto p-10 my-10 rounded-3xl">
            <div className="m-auto">
                <label className="text-2xl font-bold font-serif text-dark-purple space-y-1 w-full">
                <span className="px-6">Placa:</span>
                <input
                    className="text-xl font-serif border-dark-purple border-2 rounded-xl py-3 block px-6 bg-grey focus:outline-none w-full"
                    placeholder="ABC-123"
                    type="text"
                    required
                />
                </label>
            </div>
            <div className="m-auto">
                <label className="text-2xl font-bold font-serif text-dark-purple space-y-1 w-full">
                <span className="px-6">Nome:</span>
                <input
                    className="text-xl font-serif border-dark-purple border-2 rounded-xl py-3 block px-6 bg-grey focus:outline-none w-full"
                    placeholder="Nome do carro..."
                    type="text"
                    required
                />
                </label>
            </div>
            <div className="m-auto">
                <label className="text-2xl font-bold font-serif text-dark-purple space-y-1 w-full">
                <span className="px-6">Ano:</span>
                <input
                    className="text-xl font-serif border-dark-purple border-2 rounded-xl py-3 block px-6 bg-grey focus:outline-none w-full"
                    placeholder="Ano de fabricação..."
                    type="text"
                    required
                />
                </label>
            </div>
            <div className="m-auto">
                <label className="text-2xl font-bold font-serif text-dark-purple space-y-1 w-full">
                <input 
                type="checkbox"
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
  