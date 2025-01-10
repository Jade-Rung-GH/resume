import React from "react";
import Navbar from "../components/Navbar";
import MainPhoto from "../assets/STV01529.jpeg";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
      <div className="w-screen h-screen font-roboto">
        <Navbar />

        {/* Content */}
        <div className="w-full h-[600px] flex justify-between px-40 pt-8">
          <div className="w-[600px] h-full flex flex-col gap-6">
            <h1 className="text-5xl text-slate-800 mt-8">
              Jaitnipithe Rungcharoenpisarn (Jade)
            </h1>
            <h1 className="text-lg font-light text-slate-800">
              I am a frontend developer experienced in JS, ReactJS, NodeJS.
              <br />
              Ex-Apple Retail with passion in gaming, cybersecurity, and travel.
            </h1>

            <div className="flex h-[50px] justify-start gap-8 text-slate-800 mt-4">
              <button className="border-2 border-slate-800 rounded-3xl px-5 transition ease-in-out delay-150 bg-orange-300 hover:scale-105 hover:bg-orange-400 duration-300">
                My Resume
              </button>
              <button className="border-2 border-slate-800 rounded-3xl px-5 transition ease-in-out delay-150 bg-orange-300 hover:scale-105 hover:bg-orange-400 duration-300">
                Contact Me
              </button>
            </div>
          </div>
          <img
            className="max-w-full max-h-full object-cover scale-75 rounded-2xl"
            src={MainPhoto}
            alt="Profile Pic"
          />
        </div>
        <div className="w-full flex justify-between h-[500px] px-40 text-slate-800">
          <h1 className="text-3xl py-2 mt-28">Skills</h1>
          <div className="grid grid-cols-3 gap-y-6">
            <div>
              <h1 className="font-medium underline pb-1">
                PROGRAMMING RELATED
              </h1>
              <div className="font-light">
                <h1>HTML + CSS (Tailwind)</h1>
                <h1>JavaScript</h1>
                <h1>Node.js</h1>
                <h1>Express.js</h1>
                <h1>Git</h1>
                <h1>MySQL</h1>
              </div>
            </div>
            <div>
              <h1 className="font-medium underline pb-1">SOFT SKILLS</h1>
              <div className="font-light">
                <h1>Team Management</h1>
                <h1>Client Consultation</h1>
                <h1>Public Speaking / MC</h1>
                <h1>Customer Service</h1>
                <h1>Problem Solving</h1>
                <h1>Escalation Management</h1>
                <h1>Conflict Management</h1>
              </div>
            </div>
            <div>
              <div className="font-medium underline pb-1">HARD SKILLS</div>
              <div className="font-light">
                <h1>Computer Hardware</h1>
                <h1>Hardware / Software Troubleshooting</h1>
                <h1>Linux</h1>
                <h1>Figma</h1>
                <h1>Event Management</h1>
              </div>
            </div>
            <div>
              <h1 className="font-medium underline pb-1">LANGUAGES</h1>
              <div className="font-light">
                <h1>English (Native)</h1>
                <h1>Thai (Native)</h1>
                <h1>Japanese (Conversational)</h1>
              </div>
            </div>
            <div>
              <h1 className="font-medium underline pb-1">ESSENTIALS</h1>
              <div className="font-light">
                <h1>Trello</h1>
                <h1>Microsoft Outlook</h1>
                <h1>Google Suites</h1>
                <h1>One Drive</h1>
                <h1>Social Media</h1>
                <h1>iCloud</h1>
                <h1>iWork</h1>
              </div>
            </div>
            <div>
              <h1 className="font-medium underline pb-1">ADDTIONALS</h1>
              <div className="font-light">
                <h1>Procreate</h1>
                <h1>Final Cut Pro</h1>
                <h1>CapCut</h1>
                <h1>iMovie</h1>
                <h1>Logic Pro</h1>
                <h1>GarageBand</h1>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
