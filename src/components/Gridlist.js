import React from 'react';
import '../components-css/gridlist.css';
import gridList from '../images/sir.png'
import { Slide } from 'react-awesome-reveal';
const Gridlist = () => {
    return (
        <div className='grid-list-section container'>
            <div className='grid-list-content'>
                <Slide direction='left' triggerOnce>
                    <div className='grid-list-img'>
                        <img src={gridList} alt='image' className='grid-list-image' />
                    </div>
                </Slide>
                <div className='grid-list-desc'>
                    <Slide direction='right' triggerOnce>
                        <h2>
                            Founder Message
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>

                        <div className='right-side-content'>
                            <div className='signature'>
                                <strong>RAVINDRAAN K</strong>
                                <p>Skyraan Trust</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
}

export default Gridlist;
