import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="w-screen bg-indigo-800 bg-opacity-90 flex align-middle h-12 font-semibold text-white justify-between p-10">
            <div className="self-center flex gap-10 text-2xl">
                <img src="" alt="" />
                <Link to="/" className="hover:underline hover:text-indigo-">Home</Link>
                <Link to="/cars" className="hover:underline">Carros</Link>
                <Link to="/car-register" className="hover:underline">Registrar Carro</Link>
                <Link to="/drivers" className="hover:underline">Motorista</Link>
                <Link to="/driver-register" className="hover:underline">Registrar Motorista</Link>
            </div>
            <div className="flex self-center gap-10 text-xl ">
                <Link to="/register" className="hover:underline">Cadastrar</Link>
                <Link to="/login" className="hover:underline">Entrar</Link>
            </div>
        </header>
    );
}

export default Header