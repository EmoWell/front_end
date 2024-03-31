import React, { useState } from 'react';

export default function TopNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4" data-twe-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="relative ms-auto" data-twe-dropdown-ref>
          <button
            onClick={handleToggleDropdown}
            className="flex items-center whitespace-nowrap text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
            id="navbarDropdownMenuLink"
            role="button"
            data-twe-dropdown-toggle-ref
            aria-expanded={isDropdownOpen ? 'true' : 'false'}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
              className="rounded-full"
              style={{ height: '22px', width: '22px' }}
              alt="Avatar"
              loading="lazy"
            />
            <span className="ps-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="[&>svg]:w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          {/* Dropdown menu */}
          <ul
            className={`dark:bg-surfa absolute left-0 right-auto z-[1000] float-left m-0 ${
              isDropdownOpen ? 'block' : 'hidden'
            } min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-twe-dropdown-show dark:bg-surface-dark`}
            aria-labelledby="navbarDropdownMenuLink"
            data-twe-dropdown-menu-ref
          >
            <li>
              <a
                href="#"
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                data-twe-dropdown-item-ref
              >
                My profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                data-twe-dropdown-item-ref
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                data-twe-dropdown-item-ref
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
