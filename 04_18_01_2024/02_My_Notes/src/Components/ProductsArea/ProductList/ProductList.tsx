import { useEffect, useState } from "react";
import "./ProductList.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productsService } from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(
                dbProducts => {
                    setProducts(dbProducts);
                }
            ).catch(
                err => { alert(err.message) }
            )
    })

    return (
        <div className="ProductList">
            <h1>Product List...</h1>
            {/* {products.map(p => <span key={p.id}>{p.name} | </span>)} */}
            {products.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}

export default ProductList;
