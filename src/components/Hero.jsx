import React from "react";
import '../assets/css/hero.css'
import doggieHero from '../assets/img/faq-hero.png';
import doggie2 from '../assets/img/dog-ad.webp';
import doggie3 from '../assets/img/york.png';
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
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} className="item">
                        <img
                            className="d-block w-100 img-hero2"
                            src={doggie2}
                            alt="Two"
                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} className="item">
                        <img
                            className="d-block w-100 img-hero3"
                            src={doggie3}
                            alt="three"
                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image 3</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section >
    )
}