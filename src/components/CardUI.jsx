import React from "react";

const Card = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Runner" className="img"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-details">{props.detail}</p>
                <a href="#" className='card-btn'>Shop Now</a>
            </div>
        </div>
    );
}


export default Card;