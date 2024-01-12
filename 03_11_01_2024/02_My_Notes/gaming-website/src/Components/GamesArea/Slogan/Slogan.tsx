import { useEffect, useState } from "react";
import "./Slogan.css";

function Slogan(): JSX.Element {
    const [slogan, setSlogan] = useState<string>("");

    useEffect(() => {

        //will run once
        setTimeout(() => {
            setSlogan("Alrightest game ever");
            console.log(Math.random());
        }, 1000)
    }, [])


    return (
        <div className="Slogan">
            <span>{slogan}</span>

        </div>
    );
}

export default Slogan;
