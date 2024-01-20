import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/suppliers"}>Suppliers</NavLink>
            <NavLink to={"/contactUs"}>Contact Us</NavLink>

            {/* a tags are not good because they refresh the whole page */}
            {/* <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/contactUs">Contact Us</a> */}
        </div>
    );
}

export default Menu;
