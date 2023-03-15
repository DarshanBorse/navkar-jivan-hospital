import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", className: "ai-menu py-5 font-medium text-gray-500 hover:text-gray-900 cursor-pointer" },
  { name: "Blog", href: "/blog", className: "ai-menu py-5 font-medium text-gray-500 hover:text-gray-900 cursor-pointer" },
  { name: "Location", href: "/location", className: "ai-menu py-5 font-medium text-gray-500 hover:text-gray-900 cursor-pointer" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div>
      <div className={scroll ? "fixed z-50 bg-white w-full shadow-md" : "fixed z-50 bg-white w-full"}>
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          {({ open }) => (
            <>
              <div className="relative py-3 px-6 lg:px-0  max-w-7xl mx-auto">
                <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex justify-between w-full md:w-auto">
                      <a href="/" className="flex justify-start w-full md:w-auto">
                        <span className="sr-only">Navkar</span>
                        <Image className="h-8 w-auto sm:h-10" src="/images/logo.png" width={168} height={50} priority={true} />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none">
                          <span className="sr-only">Open main menu</span>
                          <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) =>
                      item.submenu !== undefined ? (
                        <div key={item.name} className="py-5 dropdown inline-block relative group cursor-pointer">
                          <Link href={item.href} className="flex ai-multilevel-menu relative font-medium text-gray-500 hover:text-gray-900">
                            {item.name}
                            <span className="pt-1 ml-1">
                              <svg
                                className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </Link>
                          <ul className="dropdown-content absolute hidden text-gray-700 pt-1 shadow-brand -ml-10">
                            {item.submenu.map((submenu) => (
                              <li key={submenu.name}>
                                <a href={submenu.href} className="font-medium text-gray-500 hover:text-gray-900">
                                  {submenu.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link href={item.href} className={item.className}>
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel focus static className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
                  <div className="rounded-lg shadow-brand bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <Image className="h-8 w-auto sm:h-10" src="/images/logo.png" width={168} height={50} priority={true} />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-4 pt-2 pb-5 space-y-1">
                      {navigation.map((item) =>
                        item.submenu !== undefined ? (
                          <div
                            key={item.name}
                            className="group dropdown px-3 py-2 inline-block relative text-base font-medium text-gray-700 hover:text-gray-900 w-full cursor-pointer"
                          >
                            <Link href={item.href} className="flex ai-multilevel-menu relative font-medium ">
                              {item.name}
                            </Link>
                            <ul className="dropdown-content-mobile text-gray-700 pt-1 cur">
                              {item.submenu.map((submenu) => (
                                <li key={submenu.name} className="py-2  pl-3">
                                  <a href={submenu.href} className="font-medium">
                                    {submenu.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
