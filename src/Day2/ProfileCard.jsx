import React from "react";
import "./ProfileCard.css";
import profile from './images/profile.png'

const skills = [
  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB",
  "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis",
  "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
];

export default function ProfileCard() {
  return (
    <div className="card">
      <img
        src={profile} // 这里换成你的头像图片路径
        alt="profile"
        className="avatar"
      />
      <h2 className="name">
        ASABENEH YETAYEH <span className="verified">✔</span>
      </h2>
      <p className="title">Senior Developer, Finland</p>

      <h3 className="skills-title">SKILLS</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </div>

      <p className="joined">🕒 Joined on Aug 30, 2020</p>
    </div>
  );
}
