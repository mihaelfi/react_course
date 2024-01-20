import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductsService {

    // Get all products: 
    public async getAllProducts(): Promise<ProductModel[]> {

        // Fetch products from REST API: 
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);

        // Extract products: 
        const products = response.data;

        // Return:
        return products;
    }

}

export const productsService = new ProductsService();

