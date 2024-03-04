import React,{Component} from 'react'
import Card from './CardUI'
import Img1 from '../../assets/image.webp'
import Img2 from '../../assets/img.png'


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-space-evenly">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={Img1}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={Img2}/>
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
