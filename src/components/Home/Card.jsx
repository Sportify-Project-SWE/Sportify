import React from "react";

const Card = props => {
    return(
        <div className="card-container">
            <img src={props.imgsrc} alt="Runner" className="img"/>
            <div className="card-body">
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
                <button>Shop Now</button>
            </div>
        </div>
    );
}


export default Card;