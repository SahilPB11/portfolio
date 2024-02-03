import React from 'react';
import ContactForm from '@/components/ContactForm';
import PersonalInfo from '@/components/PersonalInfo';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-5">
            {/* Centered Content */}
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Personal Information */}
                <PersonalInfo />

                {/* Contact Form */}
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;


