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
                className="bg-gray-200 p-4 flex flex-col items-center rounded-sm 
                           transition-transform transform hover:scale-105 shadow-md 
                           hover:shadow-lg duration-200"
              >
                  <img src={icon.image} alt={icon.name} className=" w-[34px]" />
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
              <h2 className="text-gray-700 font-medium text-xl">PROFESSIONAL PROFILE</h2>
            </div>
            <p className="text-gray-600">
              Use this area to quickly sell yourself and prove that you are awesome skills and achievements can truly
              help the company you're applying to. Keep Your Profile Concise. The goal is to make it short and powerful.
              A profile explains what you have to offer the employer and can help sell your candidacy. Therefore, even
              if employers only read your profile, they will still have a clear idea of your unique qualifications.
            </p>
          </section>

          <section>
            <div className="bg-[#f8f3f1] px-4 py-2 mb-4">
              <h2 className="text-gray-700 font-medium text-xl">EXPERIENCE</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg">ENTER JOB POSITION HERE</h3>
                <p className="text-gray-500">Company / Location / Date Range</p>
                <p className="mt-2 text-gray-600">
                  Describe your responsibilities in concise statements led by strong verbs. Focus on those skills and
                  strengths that you possess and that you have identified as being important to your field. Show
                  potential employers exactly how you will fit their position and their company.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-600">
                  <li>
                    Highlight your most relevant qualifications for the job by listing them first in the job
                    description.
                  </li>
                  <li>
                    While it is important to keep descriptions short, adding details and context can help show employers
                    why you'd be a good match for the position.
                  </li>
                  <li>
                    Employers want to know what you accomplished. Make it easy for them to see what you've done by using
                    numbers and percentages.
                  </li>
                  <li>
                    For example: Negotiated pricing points for customers on a daily basis with changing market
                    conditions resulting in customer annual transportation savings of over $500,000 per year.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">ENTER JOB POSITION HERE</h3>
                <p className="text-gray-500">Company / Location / Date Range</p>
                <p className="mt-2 text-gray-600">
                  Describe your responsibilities in concise statements led by strong verbs. Focus on those skills and
                  strengths that you possess and that you have identified as being important to your field.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

