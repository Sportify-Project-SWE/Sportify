import React from "react";

const Card = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Runner" className="img"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Runner</h4>
            </div>
        </div>
    );
}


export default Card;