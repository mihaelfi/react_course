import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { SupplierModel } from "../Models/SupplierModel";

class SupplierService{

    public async getAllProducts(): Promise<SupplierModel[]>{

        const response = await axios.get<SupplierModel[]>(appConfig.supplierUrl);

        const products = response.data;

        return products;


    }

}

export const suppliersService = new SupplierService();