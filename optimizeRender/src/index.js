import React from "react";
import { render } from "react-dom";

function APP() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>get things going</p>
        </div>
    )

}


render(<APP />, document.getElementById("root"))