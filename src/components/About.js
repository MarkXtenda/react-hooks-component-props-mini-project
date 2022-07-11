import React from "react";

function About({image = "https://via.placeholder.com/215", about}) {

    return(
        <React.Fragment>
            <aside>
                <img src={image} alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        </React.Fragment>
    );
}

export default About