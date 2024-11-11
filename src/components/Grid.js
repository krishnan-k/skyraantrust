import React from 'react';
import gridImg from '../images/tree2.png';
import '../components-css/grid.css'
import { Fade } from 'react-awesome-reveal';
const Grid = () => {
    return (
        <div className='grid-conetent-section container'>
            <div className='grid-content'>
                <Fade cascade>
                    <h2>
                        Welcome to Skyraan Trust
                    </h2>
                    <p>Skyraan Trust is a secure online platform designed to foster confidence and transparency between users and service providers. The website prioritizes user safety by implementing advanced security measures and ensuring all transactions and communications are encrypted. Trust also offers a user-friendly interface that simplifies navigating through various services, allowing users to make informed decisions based on verified reviews and ratings.</p>
                </Fade>
            </div>
            <div className='grid-img-section'>
                <img src={gridImg} alt='grid-img' className='grid-image' />
            </div>
        </div>
    );
}

export default Grid;
