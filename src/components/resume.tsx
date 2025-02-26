import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import {useState} from "react"

import React from '../assets/React.png'
import css from '../assets/CSS3.png'
import Express from '../assets/Express.png'
import GitHub from '../assets/GitHub.png'
import HTML5 from '../assets/HTML5.png'
import JavaScript from '../assets/JavaScript.png'
import MongoDB from '../assets/MongoDB.png'
import Mongoose from '../assets/Mongoose.png'
import MySQL from '../assets/MySQL.png'
import Node from '../assets/Node.png'
import Postman from '../assets/Postman.png'
import Redux from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind.png'
import TypeScript from '../assets/TypeScript.png'


export default function resume() {

const personal = {
    firstName: 'Yute',
    lastName: 'Lilitprapun',
    career: 'Software Engineer',
    phone: '929-235-5371',
    email: 'yudthsoponvit@gmail.com',
    location: 'NEW YORK',
    linked: 'Linkedin.com/in/yuteoctober',
    major: 'Bachelor of International Business',
    school: 'Ramkhamhaeng University',
    year: '2011-2015'

}

const techStack = [
  { name: "JavaScript", image: JavaScript },
  { name: "TypeScript", image: TypeScript },
  { name: "React", image: React },
  { name: "HTML5", image: HTML5 },
  { name: "CSS3", image: css },
  { name: "Tailwind", image: Tailwind },
  { name: "Redux", image: Redux },
  { name: "Node.js", image: Node },
  { name: "Express", image: Express },
  { name: "MySQL", image: MySQL },
  { name: "MongoDB", image: MongoDB },
  { name: "Mongoose", image: Mongoose },
  { name: "GitHub", image: GitHub },
  { name: "Postman", image: Postman },
];

const sectionOne = {
  position: (
    <>
      <b>SOFTWARE ENGINEER</b> | <b>FREELANCE</b>
    </>
  ),
  detail: [
    <>
      Designed and developed a customizable <b>clothes store platform</b>, 
      enabling clients to personalize images, texts, and colors via an 
      <b> admin login system</b>, using <b>MongoDB</b> and <b>Node.js </b> 
      for the <b>back-end</b>.
    </>,
    <>
      Achieved a <b>25% increase</b> in <b>page visits</b> through <b>SEO optimization</b> strategies, resulting in a <b>21% boost in order volume</b>.
    </>
  ]
};

const sectionTwo = [
  {
    position: (
      <>
        <b>WINDOWS95 | UX/UI | FULLSTACK </b>
      </>
    ),
    detail: [
      <>
        Developed <b>UX and UI</b> clone of <b>Windows 95</b>, 
        responsive across devices from <b>Mobile</b> to <b>Desktop</b> along with 
        core functionalities using <b>React</b>.
      </>,
      <>
        Implemented key <b>UX functionalities</b> like <b>Drag and Drop</b>, <b>hiding</b>, <b>expanding</b>, and focusing on icons and
        folders to mimic the classic <b>Windows 95 experience</b>.
      </>,
      <>
        Integrated a fully functional <b>Minesweeper</b> game and a <b>real-time chat application</b>, using <b>MongoDB</b>,
        <b>Web-socket</b> and <b>Node.js</b> for <b>back-end</b> support, to enhance interactivity.
      </>
    ]
  },
  {
    position: (
      <>
        <b>STICKYNOTE | FULLSTACK</b>
      </>
    ),
    detail: [
      <>
        Architected database schema and drove the implementation of <b>back-end</b> infrastructure by 
        building out <b>RESTful APIs</b> using <b>Node.js</b> and <b>Express</b>.
      </>,
      <>
        Implemented full-scale <b>CRUD </b>operations to manage data.
      </>,
      <>
        Integrated <b>JWT</b> and <b>bcrypt</b> to authenticate users' login and data.
      </>,
      <>
        Implemented <b>drag-and-drop</b> functionality on the front-end for users to 
        manage their notes using <b>React</b>.
      </>
    ]
  },
  {
    position: (
      <>
        <b>OPENNFT | E-COMMERCE</b>
      </>
    ),
    detail: [
      <>
        Pioneered the creation of an <b>E-Commerce platform</b>, specializing in the sale of <b>NFT digital art</b>, 
        responsive across devices from <b>Mobile</b> to <b>Desktop</b>.
      </>,
      <>
        Integrated <b>Axios</b> to fetch data from <b>API</b> to display on the <b>front-end</b>.
      </>,
      <>
        Engineered and optimized <b>sorting algorithms</b> to enhance search and filter functionalities.
      </>
    ]
  }
];




function handleOpenLink(index:number) {
  switch(index) {
    case 0: window.open('https://yuteoctober.github.io/wins95Portfolio/', '_blank'); break;
    case 1: window.open('https://opennft.netlify.app/', '_blank'); break;
    case 2: window.open('https://fullstack-stickynotes.netlify.app/', '_blank'); break;
    default: break; 
  }
}





  return (
    <div className="md:min-w-[800px] lg:w-[900px] md:max-w-6x1 w-auto bg-white absolute top-0 left-1/2 -translate-x-1/2">
      {/* Header */}
      <header className="bg-gray-700 p-8 flex flex-col md:flex-row items-center md:items-start gap-6 text-white">
        <div className="relative">
            <h1 className="text-4xl font-light mb-2 flex gap-6">
                <span className="relative transform origin-center hover:scale-108 transition-transform duration-500 cursor-default">{personal.firstName}</span>
                <span className="relative transform origin-center hover:scale-108 transition-transform duration-500 cursor-default">{personal.lastName}</span>
            </h1>
          <p className="text-[18px] right-22 relative transform origin-center hover:text-grey-500 cursor-default">{personal.career}</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-[300px] bg-[#f8f3f1] p-6">
          <section className="mb-8">
            <h2 className="text-gray-700 font-medium text-xl mb-4">CONTACT</h2>
            <div className="space-y-3 relative md:left-1/3 left-1/2 -translate-x-1/3">
              <div className="flex w-[250px] items-center gap-3 text-gray-600 hover:text-blue-600 transform origin-center hover:scale-105 transition-transform duration-500 cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex w-[250px] items-center gap-3 text-gray-600 hover:text-blue-600 transform origin-center hover:scale-105 transition-transform duration-500 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>{personal.email}</span>
              </div>
              <div className="flex w-[250px] items-center gap-3 text-gray-600 hover:text-blue-600 transform origin-center hover:scale-105 transition-transform duration-500 cursor-default">
                <MapPin className="w-5 h-5" />
                <span>{personal.location}</span>
              </div>
              <div className="flex w-[250px] items-center gap-3 text-gray-600 hover:text-blue-600 transform origin-center hover:scale-105 transition-transform duration-500 cursor-pointer">
                <Linkedin className="w-5 h-5" />
                <span className="whitespace-nowrap">{personal.linked}</span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-gray-700 font-medium text-xl mb-4">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">{personal.major}</p>
                <p className="text-gray-600">{personal.school}</p>
                <p className="text-gray-600">{personal.year}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-gray-700 font-medium text-xl mb-4">Tech Stack</h2>
            <div className="p-2 text-gray-600 grid grid-cols-3 gap-3">
              {techStack.map((icon, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-4 flex flex-col items-center rounded-sm transition-transform transform hover:scale-105 shadow-md hover:shadow-lg duration-200"
                >
                  <img src={icon.image} alt={icon.name} className="w-[34px]" />
                  <p className="text-[13px] cursor-default">{icon.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 p-8">
          <section className="mb-8">
            <div className="bg-[#f8f3f1] px-4 py-2 mb-4">
              <h2 className="text-gray-700 font-medium text-xl">PROFESSIONAL EXPERIENCE</h2>
            </div>
            <ul className="list-disc ml-1 text-gray-600 text-left text-[14px]">
              {sectionOne.position}
              {sectionOne.detail.map((text, index) => (
                <li key={index} className="ml-4">
                  {text}
                </li>
              ))}
            </ul>
          </section>
              
          <section>
            <div className="bg-[#f8f3f1] px-4 py-2 mb-4">
              <h2 className="text-gray-700 font-medium text-xl">PROJECTS</h2>
            </div>
            <div className="space-y-6">
            {sectionTwo.map((text, index) => (
              <ul key={index} className="list-disc ml-1 text-gray-600 text-left text-[14px] cursor-pointer ">
                <li className="cursor-pointer hover:text-blue-600 list-none w-fit transform origin-center hover:scale-105 transition-transform duration-500 "
                  onClick={() => handleOpenLink(index)}
                >
                  {text.position}
                </li>
                {text.detail.map((textLi, liIndex) => (
                  <li key={liIndex} className="ml-4 cursor-text">
                    {textLi}
                  </li>
                ))}
              </ul>
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

