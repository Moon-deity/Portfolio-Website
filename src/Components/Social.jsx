import React from 'react'

const Social = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-10 my-[52px]">
        <a href="https://github.com/Moon-deity" target="blank">
          <div className="justify-self-end w-5/6 h-64 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-100 hover:to-white border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img src="Github.svg" alt="Github" className="w-[200px]" />
            <p className="text-3xl text-teal-800">Github.com/Moon-deity</p>
          </div>
        </a>
        <a href="https://instagram.com/harshit_030207" target="blank">
          <div className="justify-self-start w-5/6 h-64 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-100 hover:to-white border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img src="Instagram.svg" alt="Instagram" className="w-[200px]" />
            <p className="text-3xl text-teal-800">
              Instagram.com/harshit_030207
            </p>
          </div>
        </a>
        <a href="mailto:harshit_work@outlook.com" target="blank">
          <div className="justify-self-end w-5/6 h-64 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-100 hover:to-white border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img src="Mail.svg" alt="Email" className="w-[200px]" />
            <p className="text-3xl text-teal-800">Harshit_work@outlook.com</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/harshit-yadav-310843335"
          target="blank"
        >
          <div className="justify-self-start w-5/6 h-64 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-100 hover:to-white border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img src="Linkedin.svg" alt="Linkedin" className="h-[180px] pb-8" />
            <p className="text-3xl text-teal-800">bit.ly/harshit_linkedin</p>
          </div>
        </a>
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

export default Social