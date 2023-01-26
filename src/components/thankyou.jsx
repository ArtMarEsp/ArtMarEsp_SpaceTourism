import React from "react";
import { Link } from "react-router-dom";

const ThankYouComponent = () => {
    return (
        <div className="thankyou wrapper">
            <div className="title-thankyou">
                <h1>
                    <span className="title">
                        ¡ T H A N K  Y O U !
                    </span>
                    <span className="subtitle">
                        We have received your reservation, soon one of our agents will contact you.
                    </span>
                </h1>
                <div className="thankyou-gif">
                    <iframe src="https://giphy.com/embed/xULW8v7LtZrgcaGvC0" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/justin-barnaby-xULW8v7LtZrgcaGvC0"></a></p>
                </div>
            </div>
            <div className="button-home">
                <Link to="/">
                    <div className="btn-home">
                        <span>H O M E</span>
                    </div>
                </Link>
            </div>
        </div>
    );

};

export default ThankYouComponent;