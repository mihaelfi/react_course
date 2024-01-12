import "./Clock.css";
import { useEffect,useState } from "react";

function Clock(): JSX.Element {

    
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {

        //will run once
        setTimeout(() => {
                updateCurrentTime();
        }, 1000)
    }, [currentTime])

    function updateCurrentTime(){
        let date =  new Date();
        setCurrentTime(`${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`);
    }

    return (
        <div className="Clock">
                <span>{currentTime}</span>
        </div>
    );
}

export default Clock;
