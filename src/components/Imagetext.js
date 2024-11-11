import React from 'react';
import '../components-css/imagetext.css'
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
const Imagetext = () => {
    return (
        <Zoom>
            <div className='image-text-section'>
                <div className='img-box-inner'>
                    <h2>Volunteer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button className='viewall image-btn btn text-capitalize' type="button">
                        <Link to="/blog">join us now</Link>
                    </button>
                </div>
            </div>
        </Zoom>
    );
}

export default Imagetext;
