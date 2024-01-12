import { useEffect, useState } from "react";
import "./Slogan.css";

function Slogan(): JSX.Element {

    const [slogan, setSlogan] = useState<string>("");

    useEffect(() => {

        // Will run only once:
        setTimeout(() => {
            setSlogan("Best Games Ever!");
            console.log(Math.random());
        }, 5000);

    }, []);

    return (
        <div className="Slogan">
            <span>{slogan}</span>
        </div>
    );
}

export default Slogan;
