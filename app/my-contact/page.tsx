// pages/contact.tsx

import React from 'react';
import ContactForm from '@/components/ContactForm'; // Adjust the path to where your ContactForm component resides

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            {/* Centered Content */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">
                <h1 className="text-3xl mb-4 text-center text-white">Get in Touch</h1>

                {/* Using the ContactForm Component */}
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
