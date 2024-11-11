import React from 'react'
import '../components-css/blog.css';
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const Blog = () => {
    return (
        <div className='blog-content-section'>
            <div className='blog-content-area container'>
                <div className='blog-box-inner'>
                    <h2>Blog</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='blog-content-area'>
                    <Fade cascade damping={0.1} direction='up'>
                        <div className='main-blog'>
                            <div className='blog-img'>
                                <img src={blog1} alt='blog image' className='blog-image' />
                            </div>
                            <div className='blog-content'>
                                <h5>
                                    The Impact of Sports on Mental & Physical Well-being</h5>
                                <p>
                                    IntroductionSports have been an integral part of human culture for centuries, from ancient civilizations to the modern world. They have evolved from recreational activities to a multi-billion-dollar industry.
                                </p>
                                <button className='readmore btn text-capitalize' type="button">read more</button>
                            </div>
                        </div>
                    </Fade>
                    <Fade cascade damping={0.1} direction='up'>
                        <div className='main-blog'>
                            <div className='blog-img'>
                                <img src={blog2} alt='blog image' className='blog-image' />
                            </div>
                            <div className='blog-content'>
                                <h5>

                                    The Transforming Landscape of Indian Education</h5>
                                <p>
                                    IntroductionIndia's education system is one of the largest in the world, with over 250 million students enrolled in schools and universities. The count
                                </p>
                                <button className='readmore btn text-capitalize' type="button">read more</button>
                            </div>
                        </div>
                    </Fade>
                    <Fade cascade damping={0.1} direction='up'>
                        <div className='main-blog'>
                            <div className='blog-img'>
                                <img src={blog3} alt='blog image' className='blog-image' />
                            </div>
                            <div className='blog-content'>
                                <h5>

                                    As winter and war grip Ukraine</h5>
                                <p>
                                    On a cold and gloomy day in Veselianka village, in Ukraine’s southeastern Zaporizhzhia region, a few dozen people gather at a food distribution point
                                </p>
                                <button className='readmore btn text-capitalize' type="button">read more</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <button className='viewall btn text-capitalize' type="button">
                    <Link to="/blog">view all blog</Link>
                </button>
            </div>
        </div>
    )
}

export default Blog
