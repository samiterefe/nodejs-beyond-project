import Logo from "../../img/logoo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class=" z-50 fixed  w-full ">
      <nav
        class="relative flex w-full grid  flex-nowrap items-center justify-end bg-neutral-100 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full grid justify-end flex-wrap items-center justify-between px-6">
          <div className="flex w-full">
            <button
              class="block border-0   bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent3"
              aria-controls="navbarSupportedContent3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            class="!visible hidden flex-grow basis-[100%]  items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item
          >
            <div className="flex lg:flex-1 grid justify-start  ">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Beyond-fruits </span>
                <img className="h-16 w-16" src={Logo} alt="" />
              </Link>
            </div>
            <a class="text-xl text-black" href="#">
              Navbar
            </a>

            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="lg:px-2" data-te-nav-item-ref>
                <a
                  class="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref
                >
                  Home
                </a>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Features
                </a>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Pricing
                </a>
              </li>
              <li class="lg:pr-2" data-te-nav-link-ref>
                <a class="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
