import { FaDiscord } from "react-icons/fa";
import { useState } from "preact/hooks";
export default function Navbar() {
  const Links = ["Events", "Team"];
  const [isOpen, setIsopen] = useState(false);
  const toggleNavBar = () => {
    setIsopen((isOpen) => !isOpen);
    document.getElementById("navbar").classList.toggle("hidden");
  };
  return (
    <nav class="bg-white border-gray-200 px-2 py-2 sm:px-4 sticky top-0  dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src="/new.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Hack Club SVIT
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNavBar}
        >
          <span class="sr-only">Open main menu</span>
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
          class="hidden w-full md:block md:w-auto transition-all"
          id="navbar"
        >
          <ul class="flex flex-col p-2 mt-4 bg-gray-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Links.map((item) => {
              return (
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 my-2 text-xl text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <button className="lg:hidden md:hidden w-full bg-blue-600 rounded-md flex justify-center p-2 items-center text-xl text-white">
              <FaDiscord className="mx-2" /> Join Discord
            </button>
          </ul>
        </div>
        <button
          className="hidden lg:flex md:flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-2 py-2.5 text-xl text-center mr-3 md:mr-0 bg-transparent
        ring-1 transition-alldark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-2xl items-center
        "
        >
          <FaDiscord className="mx-2" /> Join Discord
        </button>
      </div>
    </nav>
  );
}
