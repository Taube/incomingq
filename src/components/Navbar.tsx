import { Transition, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ui/ModeToggle";

type NavigationItem = {
  id: string;
  to: string;
  text: React.ReactNode;
};

const navigation: Array<NavigationItem> = [
  {
    id: "home",
    to: "/",
    text: "Home",
  },
  {
    id: "todos",
    to: "/todos",
    text: "ToDos",
  },
  {
    id: "about",
    to: "/about",
    text: "About",
  },
];

export const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 h-20 bg-background border">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0 text-xl font-semibold">
                  inComcinq
                </div>
                <div className="hidden md:flex">
                  <ul className="ml-10 flex items-baseline space-x-4 list-none">
                    {navigation.map(({ id, to, text }) => (
                      <li key={id}>
                        <Link
                          to={to}
                          className={buttonVariants({ variant: "link" })}
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:flex space-x-4">
                  <Link
                    to="/"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Sign Up
                  </Link>

                  <ModeToggle />
                </div>

                <div className="flex md:hidden">
                  <Disclosure.Button aria-label="Toggle Menu">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <ul className="list-none">
                      {navigation.map(({ id, to, text }) => (
                        <li key={id}>
                          <Link
                            to={to}
                            className={buttonVariants({
                              variant: "link",
                              display: "flex",
                            })}
                          >
                            {text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Transition>
          </>
        )}
      </Disclosure>
    </nav>
  );
};
