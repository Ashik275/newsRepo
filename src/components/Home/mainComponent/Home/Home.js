import React from 'react';
import Side from '../../sideContent/side/Side';
import Life from '../life/Life';
import Music from '../musics/Musics';
import Ppost from '../Ppost/Ppost';
import Popular from './popular/Popular';
import './style.css'

const Home = () => {
    return (
        <>
            <main>
                <div className="container">
                    <section className='mainContent'>
                        <Popular />
                        <Ppost />
                        <Life></Life>
                        <Music />
                    </section>
                    <section className='sideContent'>
                        <Side />
                    </section>
                </div>
            </main>

        </>
    );
};

export default Home;