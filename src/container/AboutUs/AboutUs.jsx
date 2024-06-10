import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Garnish Gourmet, where we believe that dining is not just about food, but an experience to savor and cherish. Nestled in the heart of India, our restaurant is a haven for food enthusiasts seeking authentic flavors, impeccable service, and a warm, inviting ambiance..</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 2011 by renowned chef Nischal Kumar, The Golden Spoon has been a beacon of fine dining in the heart of the city for over five decades.Nischal Kumar, a visionary in the culinary world, sought to create a dining experience that blended the elegance of Indian cuisine with the bold flavors of the Mediterranean.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;