import { Link } from "react-router-dom";

const Header = () => {
    return (
    <nav id="navbar">
    <div className="navbar bg-[#2a303c]">
    <div className="navbar-start hidden sm:flex">
        <Link to="/portfolio" className="btn btn-ghost normal-case text-xl border-b-none">Juan Manuel Vila</Link>
        <Link to="/languages" className="btn btn-ghost normal-case text-xl"><span className="icon solid fa-file-code pr-2"></span>Languages</Link>
        <Link to="/proyects-and-work" className="btn btn-ghost normal-case text-xl"><span className="icon solid fa-layer-group pr-2"></span>My Proyects</Link>
        <Link to="/contact" className="btn btn-ghost normal-case text-xl"><span className="icon solid fa-address-card pr-2"></span>Contact</Link>
    </div>
    <div className="navbar-start sm:hidden w-full">
    <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/portfolio">Home</Link></li>
            <li><Link to="/languages"><span className="icon solid fa-file-code pr-2"></span>Languages</Link></li>
            <li><Link to="/proyects-and-work"><span className="icon solid fa-layer-group pr-2"></span>My Work</Link></li>
			<li><Link to="/contact"><span className="icon solid fa-address-card pr-2"></span>Contact</Link></li>
        </ul>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Juan Manuel Vila</Link>

        </div>
    </div>
    </div>
    </nav>
    )
}

export default Header;