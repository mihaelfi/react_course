import { useEffect } from "react";
import "./Page404.css";
import { useNavigate } from "react-router-dom";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <p>Wrong Page</p>
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-760x400.webp" alt="img"></img>
            <div className="spacer"></div>
        </div>
    );
}

export default Page404;
