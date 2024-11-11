import React from 'react'
import { Link } from 'react-router-dom'
import '../components-css/imagebanner.css'
import donate from '../images/donate.png'
import { Fade } from 'react-awesome-reveal'
const Imagebanner = () => {
    return (
        <Fade cascade damping={0.1} direction='up'>
            <div className='image-banner-section'>
                <div className='image-banner-content'>
                    <div className='donate-img'>
                        <img src={donate} alt='image' className='donateimage' />
                    </div>
                    <div className='img-box-inner'>
                        <h2>Make a Difference Today.</h2>
                        <p>Your contribution can bring hope and change lives.</p>
                        <button className='viewall image-btn btn text-capitalize' type="button">
                            <Link to="">Donate now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Imagebanner
