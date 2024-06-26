import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="w-screen bg-blue-500 flex align-middle h-12 font-semibold text-white">
            <div className="self-center flex gap-10 text-2xl">
                <img src="" alt="" />
                <Link to="/">Home</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/car-register">Car Register</Link>
                <Link to="/drivers">Drivers</Link>
                <Link to="/driver-register">Driver Register</Link>
            </div>
        </header>
    );
}

export default Header