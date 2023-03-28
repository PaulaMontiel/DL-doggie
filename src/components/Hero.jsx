import React from "react";
import '../assets/css/hero.css'
import doggieHero from '../assets/img/hills-hero.png';
import doggie2 from '../assets/img/Ecorange_Websitebanner_HR.jpg';
import doggie3 from '../assets/img/zeedog-kong-desktop.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Hero () {
    return (
        <section id="header" className="jumbotron text-center background-hero" >
            <div className="">
                <Carousel>
                    <Carousel.Item interval={1500} className="item">
                        <img
                            className="d-block w-100 img-hero"
                            src={doggieHero}
                            alt="dog"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500} className="item">
                        <img
                            className="d-block w-100 img-hero2"
                            src={doggie2}
                            alt="Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500} className="item">
                        <img
                            className="d-block w-100 img-hero3"
                            src={doggie3}
                            alt="three"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section >
    )
}