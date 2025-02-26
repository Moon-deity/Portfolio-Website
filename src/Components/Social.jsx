import React from 'react'

const Social = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-10 my-[52px] max-[1070px]:grid-cols-1">
        <a
          href="https://github.com/Moon-deity"
          target="blank"
          className="justify-self-end max-[1070px]:justify-self-center w-5/6"
        >
          <div className="max-[1070px]:flex-row max-[920px]:flex-col max-[920px]:h-64 w-full h-64 max-[1070px]:h-32 border-4 rounded-4xl flex flex-col justify-center items-center bg-gradient-to-b from-teal-700 to-teal-100 hover:bg-gradient-to-br hover:from-teal-300 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img
              src="Github.svg"
              alt="Github"
              className="h-[200px] max-[1070px]:h-[100px] max-[920px]:h-[200px]"
            />
            <p className="text-3xl text-neutral-800 max-[1070px]:text-5xl max-[920px]:text-3xl">
              Github.com/Moon-deity
            </p>
          </div>
        </a>
        <a
          href="https://bit.ly/harshit_insta"
          target="blank"
          className="justify-self-start max-[1070px]:justify-self-center w-5/6"
        >
          <div className="max-[1070px]:flex-row max-[920px]:flex-col max-[920px]:h-64 bg-gradient-to-b from-neutral-700 to-neutral-400 w-full h-64 max-[1070px]:h-32 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-neutral-800 hover:to-neutral-50 border-neutral-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img
              src="Instagram.svg"
              alt="Instagram"
              className="h-[200px] max-[1070px]:h-[100px] max-[920px]:h-[200px]"
            />
            <p className="text-3xl text-neutral-800 max-[1070px]:text-5xl max-[920px]:text-3xl">
              bit.ly/harshit_insta
            </p>
          </div>
        </a>
        <a
          href="mailto:harshit_work@outlook.com"
          target="blank"
          className="justify-self-end max-[1070px]:justify-self-center w-5/6"
        >
          <div className="max-[1070px]:flex-row max-[920px]:flex-col max-[920px]:h-64 bg-gradient-to-b from-neutral-700 to-neutral-400 w-full h-64 max-[1070px]:h-32 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-neutral-800 hover:to-neutral-50 border-neutral-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img
              src="Mail.svg"
              alt="Email"
              className="h-[200px] max-[1070px]:h-[100px] max-[920px]:h-[200px]"
            />
            <p className="text-3xl text-neutral-800 max-[1070px]:text-5xl max-[920px]:text-3xl">
              Harshit_work@outlook.com
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/harshit-yadav-310843335"
          target="blank"
          className="justify-self-start max-[1070px]:justify-self-center w-5/6 max-[1070px]:row-end-4"
        >
          <div className="max-[1070px]:flex-row max-[920px]:flex-col max-[920px]:h-64 bg-gradient-to-b from-teal-700 to-teal-100 w-full h-64 max-[1070px]:h-32 max-[1070px]:gap-3 border-4 rounded-4xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-300 hover:to-teal-50 border-teal-800 hover:-translate-2 hover:ease-in hover:duration-300 hover:shadow-teal-950 hover:shadow-2xl">
            <img
              src="Linkedin.svg"
              alt="Linkedin"
              className="h-[180px] pb-8 max-[1070px]:h-[80px] max-[1070px]:pb-0 max-[920px]:pb-8 max-[920px]:h-[180px]"
            />
            <p className="text-3xl max-[1070px]:text-5xl text-neutral-800 max-[920px]:text-3xl">
              bit.ly/harshit_linkedin
            </p>
          </div>
        </a>
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

export default Social