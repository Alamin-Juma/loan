import React, { useState, useRef } from 'react';
import download from '../assets/download.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [sections, setSections] = useState([
    {
      name: "Request for Loan",
      path: "/",
      ref: useRef(null),
      index: 0,
    },
    {
      name: "Get all loan requests",
      path: "/loan-requests",
      ref: useRef(null),
      index: 1,
    },
    {
      name: "Repayment Schedule",
      path: "/repayment-schedule",
      ref: useRef(null),
      index: 2,
    },
  ]);

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const scrollToSection = (index) => {
    setActiveSectionIndex(index);
    sections[index].ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nav">
      <img src={download} alt="Logo" />
      <div className="left-items">
        {sections.map((section) => (
          <Link key={section.name} to={section.path}>
            {section.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
