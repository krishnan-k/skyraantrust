import React from 'react';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import Gridbox from '../components/Gridbox';
import Gridlist from '../components/Gridlist';
import Blog from '../components/Blog';
import Imagetext from '../components/Imagetext';
import Imagebanner from '../components/Imagebanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Grid />
      <Gridbox />
      <Gridlist />
      <Blog />
      <Imagetext />
      <Imagebanner />
      <Footer/>
    </div>
  );
}

export default Home;
