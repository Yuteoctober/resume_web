import { Mail, MapPin, Phone, Linkedin, Globe } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import React from '../assets/React.png';
import css from '../assets/CSS3.png';
import Express from '../assets/Express.png';
import GitHub from '../assets/GitHub.png';
import HTML5 from '../assets/HTML5.png';
import JavaScript from '../assets/JavaScript.png';
import MongoDB from '../assets/MongoDB.png';
import Mongoose from '../assets/Mongoose.png';
import MySQL from '../assets/MySQL.png';
import Node from '../assets/Node.png';
import Postman from '../assets/Postman.png';
import Redux from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind.png';
import TypeScript from '../assets/TypeScript.png';
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoLink } from "react-icons/io5";

type PersonalInfo = {
  firstName: string;
  lastName: string;
  career: string;
  phone: string;
  email: string;
  location: string;
  linked: string;
  portfolio: string;
  major: string;
  school: string;
  year: string;
};

const personal: PersonalInfo = {
  firstName: "Yute",
  lastName: "Lilitprapun",
  career: "Software Engineer",
  phone: "929-235-5371",
  email: "yudthsoponvit@gmail.com",
  location: "NEW YORK, NY",
  linked: "Linkedin.com/in/yuteoctober",
  portfolio: "Wins95Portfolio",
  major: "Bachelor of Information Systems",
  school: "Ramkhamhaeng University",
  year: "2011-2015",
};

type TechStack = {
  name: string;
  image: string;
};

type SectionDetail = {
  position: JSX.Element;
  detail: JSX.Element[];
};

type ResumeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};


export default function Resume({ darkMode, setDarkMode }: ResumeProps) {

  const techStack: TechStack[] = [
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

  const sectionOne: SectionDetail = {
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

  const sectionTwo: SectionDetail[] = [
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
          <b>OPENNFT | E-COMMERCE </b>
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
  ];
  
  function handleOpenLink(index: number): void {
    switch (index) {
      case 0: window.open('https://yuteoctober.github.io/wins95Portfolio/', '_blank'); break;
      case 1: window.open('https://opennft.netlify.app/', '_blank'); break;
      case 2: window.open('https://fullstack-stickynotes.netlify.app/', '_blank'); break;
      default: break;
    }
  }

  function handleContact(name: string): void {
    if (name.includes('Wins95')) {
      window.open('https://yuteoctober.github.io/wins95Portfolio/');
      return;
    }
    return;
  }

  const contact = [
    {icon: Phone, detail: personal.phone},
    {icon: Mail, detail: personal.email},
    {icon: MapPin, detail: personal.location},
    {icon: Linkedin, detail: personal.linked},
    {icon: Globe, detail: personal.portfolio},
  ]

  return (
    <div className={`${darkMode? 'bg-black' : ''} md:min-w-[800px] lg:w-[900px] md:max-w-6x1 w-[100svw] overflow-x-hidden absolute top-0 left-1/2 -translate-x-1/2`}>
        <div className="target absolute right-5 top-4" onClick={() => setDarkMode(!darkMode)}>
        <p className="text-[30px] duration-500 transition-opacity opacity-100">
          {darkMode ? (
            <IoSunny className="sun"/>
          ) : (
            <IoMoon className="moon"/>
          )}
        </p>
      </div>
    
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-gray-700'} duration-500 p-8 flex flex-col items-start gap-6 text-white`}>
        <div className="relative flex flex-col items-start">
          <h1 className={`${darkMode ? '' : 'text-white'} duration-500 font-light mb-2 flex gap-4`}>
            <span className="target md:text-[50px] text-[40px] relative duration-500 cursor-default">{personal.firstName}</span>
            <span className="target md:text-[50px] text-[40px] relative duration-500 cursor-default">{personal.lastName}</span>
          </h1>
          <p className="text-[18px] pl-2 transform cursor-default">{personal.career}</p>
        </div>
      </header>

      <div className={`${darkMode ? 'bg-black' : 'bg-white'} flex flex-col md:flex-row `}>
        {/* Left Column */}
        <div className={`${darkMode ? 'bg-[#151414]' : 'bg-[#f8f3f1]'} duration-500 w-full md:w-[300px] p-6`}>
          <section className="mb-8">
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl mb-4`}>CONTACT</h2>
            <div className="space-y-3 relative md:left-2 flex flex-col items-center">
                {contact.map((item) => (
                  <div className={`${darkMode ? 'text-white hover:text-blue-400 active:text-blue-400' : 'text-gray-600 hover:text-blue-600 active:text-blue-600'} flex w-[250px] items-center gap-3 duration-500`}
                    onClick={() => handleContact(item.detail)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className=" text-[15px]">{item.detail}</span>
                  </div>
                ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl mb-4`}>EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500`}>{personal.major}</p>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500`}>{personal.school}</p>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500`}>{personal.year}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl mb-4`}>Tech Stack</h2>
            <div className="p-2 text-gray-600 grid grid-cols-3 gap-3">
              {techStack.map((icon, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? 'bg-gray-800 shadow-lg hover:shadow-xl' : 'bg-gray-200 shadow-md hover:shadow-lg'
                  } p-4 flex flex-col items-center rounded-sm transition-transform transform hover:scale-105 duration-200`}
                >
                  <img src={icon.image} alt={icon.name} className="w-[30px]" />
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'} text-[12px] cursor-default relative top-2`}>
                    {icon.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className={`${darkMode ? 'bg-[#1a1919fa]' : ''} w-full md:w-[100%] p-8`}>
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-[#f8f3f1]'} duration-500 px-4 py-2 mb-4`}>
              <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl`}>PROFESSIONAL EXPERIENCE</h2>
            </div>
            <ul className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500 list-disc ml-1 text-left text-[14px]`}>
              {sectionOne.position}
              {sectionOne.detail.map((text, index) => (
                <li key={index} className="target ml-4">
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-[#f8f3f1]'} duration-500 px-4 py-2 mb-4`}>
              <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl`}>PROJECTS</h2>
            </div>
            <div className="space-y-6">
              {sectionTwo.map((text, index) => (
                <ul key={index} className="list-disc ml-1 text-gray-600 text-left text-[14px] ">
                  <li className={`${darkMode ? 'text-white' : 'text-gray-600'} flex duration-500  hover:text-blue-600 list-none `}
                    onClick={() => handleOpenLink(index)}
                  >
                    {text.position}
                    <IoLink className="text-[18px] relative ml-1 top-[2px]"/>
                  </li>
                  {text.detail.map((textLi, liIndex) => (
                    <li key={liIndex} className={`${darkMode ? 'text-white' : 'text-gray-600'} target duration-500 ml-4 cursor-text`}>
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
  );
}

