// components/PersonalInfo.tsx
import React from "react";
import { FaPhone, FaEnvelope, FaFilePdf, FaLinkedin, FaGithub } from "react-icons/fa";

const PersonalInfo = () => {
    return (
        <div className="w-full p-6 bg-gray-800 rounded-lg md:mr-6 lg:mr-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Information</h2>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center text-white">
                    <FaPhone className="mr-2" />
                    <p>
                        <span className="font-bold">Phone:</span> +91 9915402165
                    </p>
                </div>
                <div className="flex items-center text-white">
                    <FaEnvelope className="mr-2" />
                    <p>
                        <span className="font-bold">Email:</span> garg07825@gmail.com
                    </p>
                </div>
                <div className="flex items-center text-white">
                    <FaFilePdf className="mr-2" />
                    <p>
                        <span className="font-bold">Download my resume:</span>{" "}
                        <a
                            href="https://drive.google.com/file/d/18JYpkafjML1AGXf7eThqUl81RkZXdMVh/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Click here
                        </a>
                    </p>
                </div>
                <div className="flex items-center text-white">
                    <FaLinkedin className="mr-2" />
                    <a
                        href="https://www.linkedin.com/in/sahil-garg-0002march72/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
                <div className="flex items-center text-white">
                    <FaGithub className="mr-2" />
                    <a
                        href="https://github.com/SahilPB11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </div>
    );
};

export default PersonalInfo;
