import "./Sale.css"
import sale1ImageSrc from "../../../Assets/Images/Sale/sale1.jpg";
import sale2ImageSrc from "../../../Assets/Images/Sale/sale2.png";

function Sale(): JSX.Element {
    
    const discount = Math.floor(Math.random() * 100) + 0;
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth()) + 1;

    const imgChoic = Math.floor(Math.random() * 100);

    let imgSrc;

    if(imgChoic> 50){
        imgSrc = sale1ImageSrc;
    }else{
        imgSrc = sale2ImageSrc;
    }

    return (
        <div className="Sale">
            <span>
               Only now , on {currentMonth}/{currentYear}: {discount}% DISCOUNT!
            </span>
            <img src={imgSrc} alt="someimgae" ></img>
        </div>
    );
}

export default Sale;