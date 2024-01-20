import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import "./Routing.css";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Page404 from "../Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			
            <Routes>

                {/* Home: */}
                <Route path="/home" element={<Home />} />

                {/* Products: */}
                <Route path="/products" element={<ProductList />} />

                {/* Contact Us: */}
                <Route path="/contact-us" element={<ContactUs />} />

                {/* Default: */}
                <Route path="/" element={ <Navigate to="/home" /> } />

                {/* Page 404: */}
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
