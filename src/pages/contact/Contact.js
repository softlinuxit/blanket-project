import React from 'react';
import ContactBanner from '../../components/contactBanner/ContactBanner';
import ContactAbout from '../../components/contactAbout/ContactAbout';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactInfo from '../../components/contactInfo/ContactInfo';

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <ContactAbout />
            <ContactForm />
            <ContactInfo />
        </div>
    );
};

export default Contact;