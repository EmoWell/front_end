import React from "react";

export default function TopNavbar() {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full dark:bg-slate-950 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
              </button>
              <svg
                width="40"
                height="40"
                viewBox="0 0 411 399"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="41" height="41" fill="#1E1E1E" />
                <ellipse
                  cx="40"
                  cy="40"
                  rx="205.5"
                  ry="199.5"
                  fill="#afafaf"
                />
                <path
                  d="M67.2173 237V142.455H130.925V158.935H87.2067V181.464H127.647V197.945H87.2067V220.519H131.109V237H67.2173ZM146.817 142.455H171.469L197.506 205.977H198.614L224.651 142.455H249.303V237H229.914V175.462H229.129L204.661 236.538H191.458L166.991 175.232H166.206V237H146.817V142.455ZM352.654 189.727C352.654 200.037 350.7 208.809 346.791 216.041C342.913 223.274 337.62 228.798 330.911 232.614C324.232 236.4 316.723 238.293 308.382 238.293C299.98 238.293 292.44 236.384 285.761 232.568C279.083 228.752 273.805 223.228 269.927 215.995C266.049 208.763 264.11 200.007 264.11 189.727C264.11 179.417 266.049 170.646 269.927 163.413C273.805 156.181 279.083 150.672 285.761 146.886C292.44 143.07 299.98 141.162 308.382 141.162C316.723 141.162 324.232 143.07 330.911 146.886C337.62 150.672 342.913 156.181 346.791 163.413C350.7 170.646 352.654 179.417 352.654 189.727ZM332.388 189.727C332.388 183.049 331.388 177.417 329.387 172.831C327.417 168.245 324.632 164.768 321.031 162.398C317.43 160.028 313.214 158.843 308.382 158.843C303.55 158.843 299.334 160.028 295.733 162.398C292.132 164.768 289.331 168.245 287.331 172.831C285.361 177.417 284.376 183.049 284.376 189.727C284.376 196.406 285.361 202.038 287.331 206.624C289.331 211.209 292.132 214.687 295.733 217.057C299.334 219.427 303.55 220.612 308.382 220.612C313.214 220.612 317.43 219.427 321.031 217.057C324.632 214.687 327.417 211.209 329.387 206.624C331.388 202.038 332.388 196.406 332.388 189.727Z"
                  fill="black"
                />
                <g>
                  <ellipse
                    cx="40"
                    cy="40"
                    rx="157"
                    ry="139.5"
                    fill="rgba(217, 217, 217, 0.5)"
                  />
                </g>
              </svg>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
