import React from "react";
import "../styles/accordion.css";

const education = [
  {
    company: "Texas A&M University",
    title: "BA International Studies, Minor in Spanish",
    duration: "2008-2012",
    location: "College Station, Texas, USA",
    bullets: [""],
  },
  {
    company: "Universidad de Costa Rica",
    title: "Study Abroad",
    duration: "2009",
    location: "San José, Costa Rica",
    bullets: [""],
  },
];

export function EducationList() {
  return React.createElement(
    "div",
    { className: "experience-list" },
    education.map((edu, index) =>
      React.createElement(
        "div",
        { key: index, className: "content" },
        React.createElement("p", { className: "location" }, edu.location),
        React.createElement("h5", null, edu.company),
        React.createElement(
          "p",
          { className: "job-title" },
          React.createElement("strong", null, edu.title)
        ),
        React.createElement(
          "ul",
          null,
          edu.bullets.map((bullet, bulletIndex) =>
            React.createElement("li", { key: bulletIndex }, bullet)
          )
        ),
        React.createElement("p", { className: "duration" }, edu.duration),
        edu.current && React.createElement("p", { className: "current" })
      )
    )
  );
}
