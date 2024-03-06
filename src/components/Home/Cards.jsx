import React,{Component} from 'react'
import Card from './Card'
import Img1 from '../../assets/image.webp'
import Img2 from '../../assets/img.png'
import Img3 from '../../assets/h.png'

class Cards extends Component{
    render(){
        return(
            <div className="cards-container">
                <Card imgsrc={Img1}/>
                <Card imgsrc={Img2}/>
                <Card imgsrc={Img3}/>
          
            </div>
        );
    }
}

export default Cards;
