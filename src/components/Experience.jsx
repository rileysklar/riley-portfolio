import React, { useState } from "react";
import "../styles/accordion.css";

const experiences = [
  {
    company: "ShakeWell Creative",
    title: "💻 Lead Web Developer & UI Designer",
    duration: "Sep 2022 - Present",
    location: "Austin, Texas, USA",
    current: true,
    bullets: [
      "I lead a small team to deliver web applications for various clients, including Fortune 500 companies and state government agencies.",
    ],
  },
  {
    company: "Hero Digital",
    title: "🧑‍💻 Lead Production Designer",
    duration: "Jul 2022 - Sep 2022",
    location: "Austin, Texas, USA",
    bullets: [
      "Contract for Apple ",
      "Developed a high-fidelity prototype",
      "Skills: VizApp Visual Design, Adobe Creative Suite, Figma.",
    ],
  },
  {
    company: "DoStuff",
    title: "⚙️ Project Manager",
    duration: "Jun 2022 - Sep 2022",
    location: "Austin, Texas, USA",
    bullets: ["Managed content creators for promotional activities."],
  },
  {
    company: "Creative Services, Inc.",
    title: "📬 Digital Marketing Manager",
    duration: "Sep 2020 - Jul 2022",
    location: "Austin, Texas, USA",
    bullets: [
      "Designed website UI and managed website development.",
      "Implemented automated marketing campaigns in HubSpot.",
    ],
  },
  {
    company: "KEI Abroad",
    title: "🌎 Senior Regional Manager",
    duration: "Sep 2014 - Apr 2020",
    location: "Austin, Texas, USA",
    bullets: [
      "Facilitated student enrollment in study abroad programs across Spain, Thailand, and Costa Rica.",
      "Expanded organization's global presence and fostered international educational opportunities.",
    ],
  },
  {
    company: "SHI International Corp.",
    title: "📞 Inside Account Executive",
    duration: "Jan 2014 - Sep 2014",
    location: "Austin, Texas, USA",
    bullets: [
      "Exceeded sales targets through effective prospecting strategies.",
      "Managed sales pipeline and customer relationships to drive revenue growth.",
    ],
  },
  {
    company: "Centre d'Aprenentatge Empresarial",
    title: "🗣️ English Language Instructor",
    duration: "Sep 2013 - Nov 2013",
    location: "Lleida, Spain",
    bullets: ["Taught English language to professionals at various levels."],
  },
  {
    company: "Diversity Abroad",
    title: "🌐 Global Education Representative",
    duration: "Aug 2012 - Jul 2013",
    location: "Berkeley, California",
    bullets: [
      "Promoted global education access and diversity in study abroad programs.",
    ],
  },
  {
    company: "AmCham Costa Rica",
    title: "🇨🇷 Marketing Intern",
    duration: "May 2011 - Aug 2011",
    location: "San José, Costa Rica",
    bullets: [
      "Contributed to bilingual marketing campaigns targeting multinational companies.",
    ],
  },
];

export function ExperienceList() {
  return (
    <div className="experience-list">
      {experiences.map((experience, index) => (
        <div key={index} className="content">
          <p className="location">{experience.location}</p>
          <h5>{experience.company}</h5>
          <p className="job-title">
            <strong>{experience.title}</strong>
          </p>

          <ul>
            {experience.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
          <p className="duration">{experience.duration}</p>
          {experience.current && <p className="current"></p>}
        </div>
      ))}
    </div>
  );
}
