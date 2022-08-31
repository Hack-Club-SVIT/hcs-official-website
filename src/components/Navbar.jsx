import { FaDiscord } from "react-icons/fa";
import { useState } from "preact/hooks";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
export default function Navbar() {
  const Links = [
    {
      name: "Home",
      icon: FaDiscord,
    },
    {
      name: "Events",
      icon: BsFillCalendar2EventFill,
    },
    {
      name: "Team",
      icon: AiOutlineTeam,
    },
  ];
  const [isOpen, setIsopen] = useState(false);
  const toggleNavBar = () => {
    setIsopen((isOpen) => !isOpen);
    document.getElementById("navbar").classList.toggle("hidden");
  };
  return (
    <nav class="bg-primary text-barlow border-gray-200  py-2 sm:px-4 lg:px-0 sticky top-0 z-10">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNavBar}
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="hiddden w-full md:block md:w-auto transition-all"
          id="navbar"
        >
          <ul
            class="hidden md:flex lg:flex flex-col p-2 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700
          "
          >
            {Links.map((item) => {
              return (
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 my-2 text-xl font-semibold text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <button className="lg:hidden md:hidden w-full bg-blue-600 rounded-md flex justify-center p-2 items-center text-xl font-semibold text-white">
              <FaDiscord className="mx-2" /> Join Discord
            </button>
          </ul>
        </div>

        <a href="https:hackclubsvit.co" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-red-500">
            Hack Club SVIT
          </span>
          <img src="/new.png" class="mx-2 h-7 sm:h-9" alt="Flowbite Logo" />
        </a>
      </div>
    </nav>
  );
}
