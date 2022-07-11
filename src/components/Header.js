import React from "react";

function Header({name}) {

    function handle(event) {
        console.log(event.target)
    }

    return(
        <header>
            <h1 onClick={handle}>{name}</h1>
        </header>
    )
}

export default Header