import React from 'react';

const socialMedia = () => {
    return (
        <>
            <section className="social">
                <div className="socBox">
                    <i className="fab fa-facebook"></i>
                    <span>124367 Likes</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-pinterest"></i>
                    <span>5600 Fans</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-twitter"></i>
                    <span>4,700 Followes</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-instagram"></i>
                    <span>12,000 Followes</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-youtube"></i>
                    <span>2,300 Subscribe</span>
                </div>
            </section>
        </>
    );
};

export default socialMedia;