import React from 'react';
import footerLogo from '../images/logo_2.png';
import facebook from '../images/fb_logo.png';
import instagram from '../images/insta_logo.png';
import twitter from '../images/x_logo.png';
import youtube from '../images/yt_logo.png';
import { Link } from 'react-router-dom';
import '../components-css/footer.css'
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-content'>
                <div className='footer-details'>
                    <div className='footer-logo'>
                        <Link to="/"><img src={footerLogo} alt='footer-logo' className='footer-logo' />
                            <h2>Skyraan Trust</h2>
                        </Link>

                    </div>
                    <div className='footer-des'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='social-media'>
                        <img src={facebook} alt='img' className='social-icons' />
                        <img src={instagram} alt='img' className='social-icons' />
                        <img src={twitter} alt='img' className='social-icons' />
                        <img src={youtube} alt='img' className='social-icons' />
                    </div>
                </div>
                <div className='footer-details'>
                    <h3>Links</h3>
                    <div className='navigation'>
                        <ul>
                            <li className='text-capitalize'><Link className='text-decoration-none' to="/about">Who we are</Link></li>
                            <li className='text-capitalize'><Link className='text-decoration-none' to="/service">What we do</Link></li>
                            <li className='text-capitalize'><Link className='text-decoration-none' to="/blog">Blog</Link></li>
                            <li className='text-capitalize'><Link className='text-decoration-none' to="/volunteers">Volunteers</Link></li>
                            <li className='text-capitalize'><Link className='text-decoration-none' to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-details'>
                    <h3>Address</h3>
                    <div className='address'>
                        <li>
                            <IoLocationOutline />
                            <p>No.17, Sri Venkateshwara Towers, FCI Rd, opp. Fire Station,
                                Gandhimaa Nagar, Peelamedu, Coimbatore,
                                Tamil Nadu 641004.</p>
                        </li>

                    </div>
                    <div className='address'>
                        <li> <LuPhoneCall /><Link to='tel: +91 9150555033' className="link">+91 9150555033</Link></li>
                        <li><MdOutlineMail /><Link to='mailto:skyraantrust@gmail.com'>skyraantrust@gmail.com</Link></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
