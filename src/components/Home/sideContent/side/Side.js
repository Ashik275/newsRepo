import React from 'react';
import Slider from 'react-slick';
import { gallery } from '../../../../dummyData';
import Heading from '../../../common/Heading/Heading';
import SocialMedia from '../social/SocialMedia'
import Tpost from '../tPost/Tpost';
import './Side.css'


const Side = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
    return (
        <>
            <Heading title="Stay Connected" />
            <SocialMedia />
            <Heading title="Subscribe" />
            <section className="subscribe">
                <h1 className="title">Subscride to our News stories</h1>
                <form action="">
                    <input type="text" placeholder='Email address...' />
                    <button>
                        <i className="fa fa-paper-plane"></i>Submit
                    </button>
                </form>
            </section>
            <section className='banner'>
                <img src='./images/sidebar-banner-new.jpg' alt='' />
            </section>

            <Tpost />

            <section className="catgeorys">
                <Heading title="Catgeorys" />
                {catgeory.map((val) => {
                    return (
                        <div className='category category1'>
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>

            <section className='gallery'>
                <Heading title='Gallery' />
                <Slider {...settings}>
                    {gallery.map((val) => {
                        return (
                            <div className='img'>
                                <img src={val.cover} alt='' />
                            </div>
                        )
                    })}
                </Slider>
            </section>

        </>
    );
};

export default Side;