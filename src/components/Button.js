import React, { useState } from "react";
import art from "../css/art.css"


const Button = () => {

    const [mudarButton, setMudarButton] = useState(false);

    const deveMudarButton = () => {
        mudarButton ? setMudarButton(false) : setMudarButton(true);
        console.log(mudarButton);
    }
  
    return (
    <div className="container">
        <div className={mudarButton ? "synButton" : "thwaveButton"} onClick={deveMudarButton}>
            Synthwave
        </div>
    </div>
    )
}

export default Button;
