import { useEffect, useState } from "react";
import { SupplierModel } from "../../../Models/SupplierModel";
import { suppliersService } from "../../../Services/SupplierService";
import "./SupplierList.css";

function SupplierList(): JSX.Element {
    const [suppliers, setSuppliers] = useState<SupplierModel[]>([]);

    useEffect(() => {
        suppliersService.getAllProducts()
            .then(
                dbProducts => {
                    setSuppliers(dbProducts);
                }
            ).catch(
                err => { alert(err.message) }
            )
    })

    return (
        <div className="SupplierList">
            <table>
                <tr>
                    <th>Company Name</th>
                    <th>City</th>
                </tr>
            {suppliers.map(p =>
                <tr>
                    <td key={p.id}>{p.company}</td>
                    <td key={p.id}>{p.city}</td>
                </tr>
                )}
            </table>
        </div>
    );
}

export default SupplierList;
