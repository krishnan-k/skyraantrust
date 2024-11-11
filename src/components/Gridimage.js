import React from 'react'
import grid1 from '../images/eye.png';
import grid2 from '../images/target.png';
import grid3 from '../images/diamond.png';
import '../components-css/gridimage.css'
const Gridimage = () => {
    return (
        <div className='grid-image-section container'>
            <div className='grid-image-inner'>
                <div className='grid-inner-content'>
                    <img src={grid1} alt='grid-image' className='grid-icon-image' />
                    <h6>Our vision</h6>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
                <div className='grid-inner-content'>
                    <img src={grid2} alt='grid-image' className='grid-icon-image' />
                    <h6>Our Mission</h6>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
                <div className='grid-inner-content'>
                    <img src={grid3} alt='grid-image' className='grid-icon-image' />
                    <h6>Values</h6>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gridimage
