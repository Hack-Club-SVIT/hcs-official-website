import { FaDiscord } from "react-icons/fa";
import { useState } from "preact/hooks";
export default function Hero() {
  return (
    <section
      className="bg-primary h-screen flex flex-col
     items-center justify-around lg:flex-row lg:justify-start lg:px-24 lg:py-0 lg:items-center"
    >
      <main className="px-5 my-8 text-white flex flex-col justify-between justify-items-start">
        <div className="font-extrabold text-6xl lg:text-9xl">This is </div>
        <div className="text-stroke text-4xl tracking-normal my-6 lg:my-0  lg:text-8xl font-semibold">
          Hack Club SVIT
        </div>
        <div className="text-2xl  lg:text-4xl tracking-wider my-5">
          A Community of 1500+ Sexy students
        </div>
        <button className="bg-primary-red text-3xl w-fit px-5 py-3 rounded-lg">
          Join Now
        </button>
      </main>
      <div className="w-full lg:flex-1">
        <img
          src="/hcs.png"
          className="w-full h-auto self-end justify-self-end lg:absolute lg:h-auto lg:w-2/4  lg:bottom-0 lg:right-0"
        />
      </div>
    </section>
  );
}
