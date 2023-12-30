import React from "react";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg md:text-xl font-semibold mb-2 custom-gradient-text">
        {title}
      </h2>
      <ul className="text-5xl list-disc pl-5 md:text-base">
        {skills.map((skill, index) => (
          <li key={index} className="text-base">
            {skill}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .custom-gradient-text {
          background: linear-gradient(
            90deg,
            rgb(204, 79, 97),
            rgb(255, 234, 155)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default SkillCategory;
