import React,{Component} from 'react'
import Card from './CardUI'
import Img1 from '../assets/image.webp'
import Img2 from '../assets/img.png'
import Img3 from '../assets/card3.jpg'


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={Img1} title="Best Products" detail="Shop with the best sporting good store"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={Img2} title="Gear up for the season" detail="Shop for newest and latest gear"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={Img3} title="Sportify Exclusives" detail="Shop for exclusives you can only find here on Sportify!"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
