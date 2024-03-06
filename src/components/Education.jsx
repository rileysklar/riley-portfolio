import React, { useState } from "react";
import "../styles/accordion.css";

const education = [
  {
    company: "Texas A&M University",
    title: "BA International Studies, Minor in Spanish",
    duration: "2008-2012",
    location: "College Station, Texas, USA",
    bullets: ["3.1 GPA"],
  },
  {
    company: "Universidad de Costa Rica",
    title: "Study Abroad",
    duration: "2009",
    location: "San José, Costa Rica",
    bullets: ["Spanish"],
  },
];

export function EducationList() {
  return (
    <div className="experience-list">
      {education.map((education, index) => (
        <div key={index} className="content">
          <p className="location">{education.location}</p>
          <h5>{education.company}</h5>
          <p className="job-title">
            <strong>{education.title}</strong>
          </p>

          <ul>
            {education.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
          <p className="duration">{education.duration}</p>
          {education.current && <p className="current"></p>}
        </div>
      ))}
    </div>
  );
}
