import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    return (
        <header>
            <nav className=" my-4 px-10  flex justify-between items-center">
                <Link to='/' className="font-bold text-customRed text-2xl">Dev Cluster</Link>
                <div className="flex items-center">
                    <CiUser />
                    <h1 className="text-sm ml-3">User@gmail.com</h1>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;