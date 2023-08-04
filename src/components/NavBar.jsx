import React, { useState, useRef } from 'react'
import download from '../assets/download.png'


const NavBar = () => {
    const [sections, setSections] = useState(
        [
            {
                name: "Request for Loan",
                ref: useRef(null),
                index: 0,
            },
            {
                name: "Get all loan requests",
                ref: useRef(null),
                index: 1,

            },
            {
                name: "Repayment Schedule",
                ref: useRef(null),
                index: 2,
            }
        ]
    )

    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const scrollToSection = (index) => {
        setActiveSectionIndex(index);
        refs[index].current.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div className="nav">
            <img src={download} alt="Logo" />
            <div className="left-items">
                {sections.map((section) => (
                    <a key={section.name} onClick={() => scrollToSection(section.index)}>
                        {section.name}
                    </a>
                ))}
            </div>
        </div>)
}

export default NavBar