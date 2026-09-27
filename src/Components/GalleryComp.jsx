import React from 'react'
import LightGallery from 'lightgallery/react';

import './css/Gallery.css'
import India from "../assets/India.jpg";
import Bali from "../assets/Bali.jpg";
import Venice from "../assets/Venice.jpg";
import Paris from "../assets/Paris.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import First from "../assets/First.jpg";
import Second from "../assets/Second.jpg";
import Third from "../assets/Third.jpg";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
        <div className=''>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                Our Gallery
            </h2>
            <hr className='text-cyan-500 w-[200px] bg-cyan-500 mx-auto h-1 mb-10'/>
        </div>

        <div className="App">
            <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            >
            <a href={India}>
                <img src={India} alt="India" />
            </a>

            <a href={First}>
                <img src={First} alt="First" />
            </a>

            <a href={Second}>
                <img src={Second} alt="Second" />
            </a>
            <a href={Bali}>
                <img src={Bali} alt="Bali" />
            </a>

            <a href={Venice}>
                <img src={Venice} alt="Venice" />
            </a>

            <a href={Paris}>
                <img src={Paris} alt="Paris" />
            </a>
            </LightGallery>
        
        </div>
    </div>
  )
}

export default GalleryComp