import React from 'react';
import ContactInfo from '../components/contactInfo/ContactInfo';
import AboutBanner from '../components/aboutBanner/AboutBanner';
import OurStory from '../components/ourStory/OurStory';
import WhySection from '../components/whySection/WhySection';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <OurStory />
            <WhySection />
            <ContactInfo />
        </div>
    );
};

export default About;