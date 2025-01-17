import React from "react";
import "../styles/accordion.css";

const experiences = [
  {
    company: "DISCO",
    title: "🪩 Manager, Web Development & Design",
    duration: "June 2024 - Present",
    location: "Austin, Texas, USA",
    current: true,
    bullets: [
      "I lead a team of web developers and designers to deliver enterprise web applications that support cloud-based AI legal management solutions to help law practitioners analyze and manage litigation.",
    ],
  },
  {
    company: "ShakeWell Creative",
    title: "💻 Lead Front End Developer & UI Designer",
    duration: "Sep 2022 - June 2024",
    location: "Austin, Texas, USA",
    current: false,
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
    company: "DoStuff Media",
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
  return React.createElement(
    "div",
    { className: "experience-list" },
    experiences.map((exp, index) =>
      React.createElement(
        "div",
        { key: index, className: "content" },
        React.createElement("p", { className: "location" }, exp.location),
        React.createElement("h5", null, exp.company),
        React.createElement(
          "p",
          { className: "job-title" },
          React.createElement("strong", null, exp.title)
        ),
        React.createElement(
          "ul",
          null,
          exp.bullets.map((bullet, bulletIndex) =>
            React.createElement("li", { key: bulletIndex }, bullet)
          )
        ),
        React.createElement("p", { className: "duration" }, exp.duration),
        exp.current && React.createElement("p", { className: "current" })
      )
    )
  );
}
