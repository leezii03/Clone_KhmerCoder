import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto overflow-x-hidden">
        <div className="mt-36 text-white flex">
          <div className="flex-1 pr-20">
            <h1 className="text-yellow-500 border border-orange-400 rounded-full px-3 inline-block">
              Cambodia's Tech Hub
            </h1>
            <h1 className="text-6xl text-white font-bold mt-5">
              Cambodia's Largest <br />
              <span className="text-yellow-400">Coding Community</span>
            </h1>
            <p className="mt-5 text-gray-300 text-xl">
              Connecting developers, sharing knowledge, and building the future
              of tech in Cambodia.
            </p>

            <div className="flex gap-2 mt-5 text-black">
              <a
                href=""
                className="px-5 py-2 bg-yellow-500 rounded-md hover:bg-yellow-500/90 transition-all flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height=""
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Join Facebook
              </a>
              <a
                href="https://t.me/+MuGVsenu2hA1MzU1"
                target="_blank"
                className="px-5 py-2 bg-yellow-500 rounded-md hover:bg-yellow-500/90 transition-all flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                Join Discord
              </a>
              <a
                href="https://t.me/+MuGVsenu2hA1MzU1"
                target="_blank"
                className="px-5 py-2 bg-yellow-500 rounded-md hover:bg-yellow-500/90 transition-all flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-send"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                Join Telegram
              </a>
            </div>
          </div>

          <div className="relative flex-1">
            <img
              className="w-full h-96 object-cover rounded-md"
              src="/image.jpg"
              alt=""
            />

            <div className="absolute bottom-[-40px] left-[-40px] bg-yellow-500/10 backdrop-blur-md px-3 py-2 rounded-md border border-yellow-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="bi bi-people text-yellow-500 backdrop-blur-md bg-yellow-300/30 p-2 rounded-lg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
              </svg>
              <div className="ml-3">
                <h1 className="text-yellow-400 text-lg font-bold">10000+</h1>
                <p className="text-yellow-400 text-lg font-semibold">
                  Active Members
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-36 w-[750px] mx-auto">
          <h1 className="text-yellow-500 text-4xl font-bold mb-3">
            About Khmer Coders
          </h1>
          <p className="text-gray-400 text-xl">
            Founded in 2018, Khmer Coders has grown to become Cambodia's largest
            coding community. We bring together developers, designers, and tech
            enthusiasts to learn, share, and grow together.
          </p>
        </div>

        <div className="flex justify-between mt-20">
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="bi bi-people text-yellow-300 backdrop-blur-xl bg-yellow-500/30 p-3 rounded-md"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
              </svg>
            }
            title={"Inclusive Community"}
            description={
              "We welcome developers of all skill levels, from beginners to experts, creating a supportive environment for everyone."
            }
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="bi bi-code-slash text-blue-300 backdrop-blur-xl bg-blue-500/30 p-3 rounded-md"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
            }
            title={"Skill Development"}
            description={
              "Regular workshops, hackathons, and coding sessions to help members improve their technical skills."
            }
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="bi bi-calendar4 text-green-300 backdrop-blur-xl bg-green-500/30 p-3 rounded-md"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              </svg>
            }
            title={"Networking"}
            description={
              "Connect with industry professionals, find mentors, and discover job opportunities in Cambodia's tech sector."
            }
          />
        </div>

        <div className="mt-32 flex items-center flex-wrap">
          <img
            className="basis-[45%] border-2 bg-gray-50 opacity-20 h-96 rounded-md"
            height={300}
            src=""
            alt=""
          />

          <div className="text-gray-400 basis-[55%] px-10">
            <p className="text-yellow-500 border border-yellow-500 px-2 py-1 rounded-full inline-block">
              Creator Program
            </p>
            <h1 className="text-white text-[40px] font-bold py-2">
              Empowering{" "}
              <span className="text-yellow-500">Technical Creators</span>
            </h1>
            <p className="text-[16px] mb-5">
              Our creator program supports technical content creators who share
              knowledge, provide entertainment, and inspire the next generation
              to pursue careers in STEM.
            </p>
            <p className="text-[16px]">
              We provide resources, mentorship, and a platform for creators to
              reach wider audiences, while building a community of passionate
              educators who make technical concepts accessible and engaging for
              everyone.
            </p>

            <div className="flex gap-3">
              <div className="bg-[#2b1e00] border border-yellow-500 rounded-lg px-5 py-6 text-white mt-5 w-full">
                <h1 className="text-2xl">10,000+</h1>
                <p className="text-[16px]">Subscribers</p>
              </div>

              <div className="bg-[#2b1e00] border border-yellow-500 rounded-lg px-5 py-6 text-white mt-5 w-full">
                <h1 className="text-2xl">1,000,000+</h1>
                <p className="text-[16px]">Views</p>
              </div>

              <div className="bg-[#2b1e00] border border-yellow-500 rounded-lg px-5 py-6 text-white mt-5 w-full">
                <h1 className="text-2xl">200,000+</h1>
                <p className="text-[16px]">engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 h-[95vh] mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center pt-14">
            <h1 className="text-4xl text-white font-bold mb-8">Events</h1>
            <p className="text-gray-400 text-lg">
              Join us for our regular meetups, workshops, and special events
              throughout the year.
            </p>
          </div>

          <div className="flex mt-20 gap-10">
            <Link className="rounded-lg overflow-hidden block" to="/">
              <img src="/image.jpg" alt="" />
              <div className="bg-black p-6">
                <h2 className="text-xl font-bold text-yellow-500 mb-2">
                  Khmer Coders Party Siem Reap v1
                </h2>
                <p className="text-white mb-1 flex gap-2 items-center">
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
                    class="lucide lucide-calendar h-4 w-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  May, 17th 2025 - 5:45PM - 9:00 PM
                </p>
                <p className="text-white flex items-center gap-2">
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
                    class="lucide lucide-map h-4 w-4"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>
                  Siem Reap House
                </p>
              </div>
            </Link>

            <Link className="rounded-lg overflow-hidden block" to="/">
              <img src="/image.jpg" alt="" />
              <div className="bg-black p-6">
                <h2 className="text-xl font-bold text-yellow-500 mb-2">
                  Khmer Coders Party v5
                </h2>
                <p className="text-white mb-1 flex gap-2 items-center">
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
                    class="lucide lucide-calendar h-4 w-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  March, 7th 2025 - 5:45PM - 9:00 PM
                </p>
                <p className="text-white flex items-center gap-2">
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
                    class="lucide lucide-map h-4 w-4"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>
                  Peanex, Connexion
                </p>
              </div>
            </Link>

            <Link className="rounded-lg overflow-hidden block" to="/">
              <img src="/image.jpg" alt="" />
              <div className="bg-black p-6">
                <h2 className="text-xl font-bold text-yellow-500 mb-2">
                  Khmer Coders Party v4
                </h2>
                <p className="text-white mb-1 flex gap-2 items-center">
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
                    class="lucide lucide-calendar h-4 w-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  November, 7th 2024 - 5:45PM - 9:00 PM
                </p>
                <p className="text-white flex items-center gap-2">
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
                    class="lucide lucide-map h-4 w-4"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>
                  DreamsLab, Connexion
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1400px] mx-auto py-20">
          <h1 className="text-4xl text-white font-bold mb-8 text-center">
            Community Voices
          </h1>
          <p className="text-gray-400 text-lg mb-6 text-center">
            Hear from our members about their experiences with Khmer Coders.
          </p>

          <div className="flex gap-10">
            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <p>
                "Joining Khmer Coders was a turning point in my career. The
                community helped me learn new skills and find my current job as
                a frontend developer."
              </p>

              <div className="flex items-center gap-5 mt-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 opacity-80">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-4 h-2 bg-gray-400 rounded-t-sm mt-1"></div>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">Sokha Chea</h1>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <p>
                "The workshops and mentorship I received through Khmer Coders
                helped me transition from a student to a professional software
                engineer."
              </p>

              <div className="flex items-center gap-5 mt-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 opacity-80">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-4 h-2 bg-gray-400 rounded-t-sm mt-1"></div>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">Dara Kim</h1>
                  <p className="text-gray-400 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-950 to-black text-center">
        <div className="max-w-[1400px] mx-auto py-20">
          <h1 className="text-4xl text-white font-bold">
            Join Cambodia's Largest Conding Community
          </h1>
          <p className="text-gray-400 text-lg font-semibold py-4 px-96">
            Connect with fellow developers, learn new skills, and be part of the
            growing tech ecosystem in Cambodia.
          </p>

          <div className="flex justify-center gap-5 mt-5">
            <button className="bg-yellow-500 px-5 py-3 rounded-md flex items-center gap-2 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Join Facebook
            </button>
            <button className="bg-yellow-500 px-5 py-3 rounded-md flex items-center gap-2 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
