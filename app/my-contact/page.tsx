// // pages/contact.tsx

// import React from 'react';
// import ContactForm from '@/components/ContactForm'; // Adjust the path to where your ContactForm component resides

// const ContactPage: React.FC = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black">
//             {/* Centered Content */}
//             <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">
//                 <h1 className="text-3xl mb-4 text-center text-white">Get in Touch</h1>

//                 {/* Using the ContactForm Component */}
//                 <ContactForm />
//             </div>
//         </div>
//     );
// };

// export default ContactPage;

// pages/contact.tsx
// pages/contact.tsx
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


