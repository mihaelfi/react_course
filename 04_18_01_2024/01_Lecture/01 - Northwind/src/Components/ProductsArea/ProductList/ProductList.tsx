import { useEffect, useState } from "react";
import { productsService } from "../../../Services/ProductsService";
import "./ProductList.css";
import { ProductModel } from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(dbProducts => setProducts(dbProducts))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">
            {products.map(p => <ProductCard key={p.id} product={p} /> )}
        </div>
    );
}

export default ProductList;
