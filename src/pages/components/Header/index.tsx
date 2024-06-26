import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="w-screen bg-blue-500 flex align-middle h-12 font-semibold text-white justify-between p-10">
            <div className="self-center flex gap-10 text-2xl ">
                <img src="" alt="" />
                <Link to="/">Home</Link>
                <Link to="/cars">Carros</Link>
                <Link to="/car-register">Registrar Carro</Link>
                <Link to="/drivers">Motorista</Link>
                <Link to="/driver-register">Registrar Motorista</Link>
            </div>
            <div className="flex self-center gap-10 text-xl ">
                <Link to="/register">Cadastrar</Link>
                <Link to="/login">Entrar</Link>
            </div>
        </header>
    );
}

export default Header