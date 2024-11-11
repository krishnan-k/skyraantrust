import React from 'react';
import imgLeftSide from '../images/about.png';
import { Fade } from 'react-awesome-reveal';
import '../components-css/grid.css'
import Bredcump from './Bredcump';
const Imageleft = () => {
    return (
        <>
            <Bredcump />
            <div className='grid-conetent-section container grid-left-image'>
                <div className='grid-content'>
                    <Fade cascade>
                        <h2>
                            About Skyraan Trust
                        </h2>
                        <p>Skyraan Trust is a dedicated organization committed to uplifting communities through compassionate care, education, and support. Our mission is to bring positive change to the lives of those in need, whether through providing scholarships, supporting disaster relief, or promoting environmental development. Guided by values of integrity and transparency, Skyraan Trust works tirelessly to empower individuals and foster a sense of hope and opportunity. We believe in the power of collective effort, where each contribution, no matter how small, can lead to significant impact. Together, we are building a brighter future for all.</p>
                    </Fade>
                </div>
                <div className='grid-img-section'>
                    <img src={imgLeftSide} alt='grid-left-img' className='grid-left-image' />
                </div>
            </div>
        </>
    );
}

export default Imageleft;
