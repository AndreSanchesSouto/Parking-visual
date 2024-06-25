import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="w-screen bg-blue-500 h-10">
            <div className="self-center flex space-x-56 row-auto text-2xl w-full align-middle">
                <Link to="/">Home</Link>
                <Link to="/car-register">Car Register</Link>
            </div>
        </header>
    );
}

export default Header