import React from 'react'

const About = () => {
  return (
    <>
      <div className="text-center flex justify-evenly my-[118px]">
        <div className="w-1/4 border-6 hover:bg-gradient-to-br hover:from-teal-100 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl rounded-2xl flex flex-col gap-5">
          <h1 className="text-6xl">Education</h1>
          <h3>
            <div className="text-3xl text-teal-800">Course:</div>
            <div className="text-2xl">Bachlor of Technology</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Major:</div>
            <div className="text-2xl">Civil Engineering</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Institution:</div>
            <div className="text-2xl">IIT Roorkee</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Location:</div>
            <div className="text-2xl">Roorkee, Uttarakhand, India</div>
          </h3>
        </div>
        <div className="w-1/4 border-6 hover:bg-gradient-to-br hover:from-teal-100 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl rounded-2xl flex flex-col gap-5">
          <h1 className="text-6xl">Intrested in</h1>
          <h3>
            <div className="text-3xl text-teal-800">Skill:</div>
            <div className="text-2xl">Web Development</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Skill:</div>
            <div className="text-2xl">AI and Machine learning</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Hobby:</div>
            <div className="text-2xl">Playing online games</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Course:</div>
            <div className="text-2xl">Civil Engineering</div>
          </h3>
        </div>
        <div className="w-1/4 border-6 hover:bg-gradient-to-br hover:from-teal-100 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl rounded-2xl flex flex-col gap-5">
          <h1 className="text-6xl">Location</h1>
          <h3>
            <div className="text-3xl text-teal-800">Room No:</div>
            <div className="text-2xl">BF-51</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Hostel:</div>
            <div className="text-2xl">Rajendra Bhawan</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Institution:</div>
            <div className="text-2xl">IIT Roorkee</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-800">Location:</div>
            <div className="text-2xl">Roorkee, Uttarakhand, India</div>
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span class="material-symbols-outlined copyright-icon mx-2">
          copyright
        </span>
        <span className="text-4xl">By Moon</span>
        <span className="text-teal-800 text-4xl">Deity</span>
      </div>
    </>
  );
}

export default About