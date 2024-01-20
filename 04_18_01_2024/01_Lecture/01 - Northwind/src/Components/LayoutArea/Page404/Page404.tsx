import "./Page404.css";
import imageSource from "../../../Assets/Images/404.png";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <img src={imageSource} />
        </div>
    );
}

export default Page404;
