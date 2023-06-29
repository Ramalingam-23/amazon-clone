import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/EOSS/UNREC/Onecard/Jewellery/Jewl_3000._CB603607935_.jpg" alt=""></img>
      
        <div className="home__row">
            <Product title="The lean startup" 
                    id="123"
                    price={149.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}/>
            <Product title="Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
                    id="456"
                    price={5999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71iDFYr3AIL._SY355_.jpg"/> 
        </div>
        <div className="home__row">
            <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    id="789"
                    price={150000}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51+iB9+5HKL._SX679_.jpg"/>
            <Product title="Amazon Echo (3rd Generation) | Smart Speaker With Alexa, Charcol Fabric"
                    id="101112"
                    price={2999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61IfOpQwIEL._SX679_.jpg"/>
            <Product title="Iphone 14pro Max"
                    id="131415"
                    price={127000}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg"/>
        </div>
        <div className="home__row">
            <Product title="Philips BT1232/15 Skin-Friendly Beard Trimmer - DuraPower Technology"
                    id="161718"
                    price={2000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61n4jyp69IL._SX679_.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default Home
