import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">As a chef, my philosophy is simple .</p>
        </div>
        <p className="p__opensans"> let the ingredients speak for themselves. Each dish is a canvas, and I am merely the artist, highlighting the natural flavors and textures that nature provides. Cooking is not just about nourishing the body; it's about feeding the soul. At Garnish Gourmet, we strive to create dishes that not only delight the palate but also evoke emotions and memories, making every meal a truly unforgettable experience. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef </p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
