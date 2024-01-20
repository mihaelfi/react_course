import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Page404 from "../Page404/Page404";
import SupplierList from "../../SupplierArea/SupplierList/SupplierList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes >
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/suppliers" element={<SupplierList/>}/>
                <Route path="/contactUs" element={<ContactUs/>}/>
                {/* default route (shows the elements) */}
                {/* <Route path="/" element={<Home/>}/> */}

                {/* default route also, navigates to existing route. */}
                <Route path="/" element={<Navigate to="/home"/>}/>

                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
