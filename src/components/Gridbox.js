import React from 'react';
import '../components-css/gridbox.css';
import box1 from '../images/education.png';
import box2 from '../images/specialcare.png';
import box3 from '../images/childrensHome.png';
import box4 from '../images/disaster.png';
import box5 from '../images/environment.png';
import { Fade } from 'react-awesome-reveal';

const Gridbox = () => {
    return (
        <div className='grid-box-content container'>
            <div className='grid-box-inner'>
                <h2>What We Do</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className='img-inner-content row'>
                <Fade cascade damping={0.1} className='grid-box col-md-2'>
                    <figure>
                        <img src={box1} alt='Education and Scholarship' className='box-image' />
                        <figcaption>Education & Scholarship</figcaption>
                    </figure>
                </Fade>
                <Fade cascade damping={0.1} className='grid-box col-md-2'>
                    <figure>
                        <img src={box2} alt='Special Care' className='box-image' />
                        <figcaption>Special Care</figcaption>
                    </figure>
                </Fade>
                <Fade cascade damping={0.1} className='grid-box col-md-2'>
                    <figure>
                        <img src={box3} alt='Children\' className='box-image' />
                        <figcaption>Children's Home</figcaption>
                    </figure>
                </Fade>
                <Fade cascade damping={0.1} className='grid-box col-md-2'>
                    <figure>
                        <img src={box4} alt='Disaster Relief' className='box-image' />
                        <figcaption>Disaster Relief</figcaption>
                    </figure>
                </Fade>
                <Fade cascade damping={0.1} className='grid-box col-md-2'>

                    <figure>
                        <img src={box5} alt='Environment Development' className='box-image' />
                        <figcaption>Environment Development</figcaption>
                    </figure>

                </Fade>
            </div>
        </div>
    );
}

export default Gridbox;
