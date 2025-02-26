import React from 'react'

const About = () => {
  return (
    <>
      <div className="text-center grid grid-cols-3 justify-items-center max-[1100px]:grid-cols-1 my-[118px] gap-y-16">
        <div className="bg-gradient-to-b from-teal-700 to-teal-100 w-3/4 border-6 hover:bg-gradient-to-br hover:from-teal-300 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl rounded-2xl flex flex-col gap-4">
          <h1 className="text-black text-6xl mt-3">Education</h1>
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
        <div className="bg-gradient-to-b from-neutral-700 to-neutral-400 w-3/4 border-6 hover:bg-gradient-to-br hover:from-neutral-800 hover:to-neutral-50 border-neutral-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl rounded-2xl flex flex-col gap-4">
          <h1 className="text-neutral-300 text-6xl mt-3">Intrested in</h1>
          <h3>
            <div className="text-3xl text-teal-950">Skill:</div>
            <div className="text-2xl">Web Development</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-950">Skill:</div>
            <div className="text-2xl">AI and Machine learning</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-950">Hobby:</div>
            <div className="text-2xl">Playing online games</div>
          </h3>
          <h3>
            <div className="text-3xl text-teal-950">Course:</div>
            <div className="text-2xl">Civil Engineering</div>
          </h3>
        </div>
        <div className="bg-gradient-to-b from-teal-700 to-teal-100 w-3/4 border-6 hover:bg-gradient-to-br hover:from-teal-300 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl rounded-2xl flex flex-col gap-4">
          <h1 className="text-6xl mt-3">Location</h1>
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
        <span className="material-symbols-outlined copyright-icon mx-2">
          copyright
        </span>
        <span className="text-4xl">By Moon</span>
        <span className="text-teal-800 text-4xl">Deity</span>
      </div>
    </>
  );
}

export default About