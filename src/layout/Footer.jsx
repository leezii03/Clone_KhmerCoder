import React from "react";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white pt-20 border-t border-gray-700">
      <div className="max-w-[1400px] mx-auto">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-10 border-b-[.5px] border-gray-800">
          <div className="mb-4">
            <h1 className="text-xl flex font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="orange"
                className="bi bi-code me-2"
                viewBox="0 0 16 16"
              >
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
              </svg>
              Khmer Coders
            </h1>
            <p className="text-gray-400">
              Cambodia's largest community of developers and tech enthusiasts.
            </p>

            <div className="flex gap-5 mt-4 text-gray-400">
              <a href="" className="hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a href="" className="hover:text-white">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                >
                  <title>Discord</title>
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="92" cy="140" r="12"></circle>
                  <circle cx="164" cy="140" r="12"></circle>
                  <path
                    d="M153.44,73.69l5-19.63a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37a8,8,0,0,1-4.55,9.24l-67,29.7a8.15,8.15,0,0,1-11-4.56L147,183.06"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></path>
                  <path
                    d="M102.56,73.69l-5-19.63a8.1,8.1,0,0,0-9.21-6L52.31,54A8.08,8.08,0,0,0,45.77,60L16.24,176.35a8,8,0,0,0,4.55,9.24l67,29.7a8.15,8.15,0,0,0,11-4.56L109,183.06"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></path>
                  <path
                    d="M80,78.31A178.94,178.94,0,0,1,128,72a178.94,178.94,0,0,1,48,6.31"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></path>
                  <path
                    d="M176,177.69A178.94,178.94,0,0,1,128,184a178.94,178.94,0,0,1-48-6.31"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></path>
                </svg>
              </a>

              <a href="" className="hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-lg">
            <h1 className="font-semibold">Community</h1>
            <ul className="text-[17px]">
              <li className="mt-2">
                <Link to="/Teams" className="text-gray-400 hover:text-white">Our Teams</Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-gray-400 hover:text-white">Community Members</Link>
              </li>
              <li className="mt-2">
                <Link to="/Events" className="text-gray-400 hover:text-white">Events</Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-gray-400 hover:text-white">Join Discord</Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-gray-400 hover:text-white">Facebook Group</Link>
              </li>
            </ul>
          </div>

          <div className="text-lg">
            <h1 className="font-semibold">Resources</h1>
            <ul className="text-[17px]">
              <li className="mt-2">
                <Link to="/" className="text-gray-400 hover:text-white">Our Partners</Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-gray-400 hover:text-white">Support Us</Link>
              </li>
            </ul>
          </div>
        </footer>

        <div className="text-center text-gray-500 mt-8">
          &copy; 2025 Khmer coders. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
