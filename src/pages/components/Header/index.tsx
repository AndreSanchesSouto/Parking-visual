import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="w-screen bg-blue-500 h-10 m-auto">
            <div className="self-center flex space-x-56 row-auto text-2xl w-full align-middle">
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