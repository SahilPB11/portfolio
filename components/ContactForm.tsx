"use client"
// import React, { useState } from "react";
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const { name, email, message } = formData;
//     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//     const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
//     const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

//     if (!serviceId || !templateId || !userId) {
//       console.error('Missing EmailJS environment variables');
//       alert('An error occurred. Please try again later.');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           from_name: name,
//           email_id: email,
//           message: message
//         },
//         userId
//       );

//       alert('Your message has been sent!');
//       // Clear the form fields after successful submission
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('There was an error sending your message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
//       <div className="mb-3">
//         <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
//         />
//       </div>
//       <div className="mb-3">
//         <textarea
//           placeholder="Your message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
//         disabled={isSubmitting}
//       >
//         Send a message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;


// components/ContactForm.tsx
// components/ContactForm.tsx
import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, message } = formData;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error('Missing EmailJS environment variables');
      alert('An error occurred. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          email_id: email,
          phone_number: phone,
          message: message
        },
        userId
      );

      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Display success message (consider using a more user-friendly approach)
      alert('Your message has been sent!');
    } catch (error) {
      // Display error message (consider using a more user-friendly approach)
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-4">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="tel"
          placeholder="Phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
        disabled={isSubmitting}
      >
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
