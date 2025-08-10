import React from "react";
import Supporters from "../components/Supporters";

const Donate = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="bg-gray-900 w-[900px] mx-auto my-10 rounded-lg p-8">
        <div className="text-white text-2xl font-bold">2025's Funding Goal</div>
        <div className="text-white py-4 text-[16px]">
          While the majority of our team members generously volunteer their
          time, we would like to launch several new initiatives that require
          financial support. If you have found the Khmer Coders community
          valuable and would be interested in contributing, please consider
          supporting our estimated operational needs for this year.
        </div>
        <div className="flex justify-between items-center text-2xl font-semibold mb-4">
          <h1 className="text-gray-500">Current</h1>
          <h1 className="text-gray-300">$350 of $2500</h1>
        </div>

        <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-500 w-1/6"></div>
        </div>

        <div className="flex items-center">
          <div className="mt-10 basis-[40%] bg-white inline-block text-center border-4 border-yellow-500 p-4 rounded-lg">
            <img
              className="w-[350px] rounded-lg"
              src="https://khmercoder.com/qrcode.svg"
              alt=""
            />
            <h1 className="text-xl font-bold py-2">IN V. & SUM S. & VOR S.</h1>
          </div>

          <p className="text-gray-300 text-lg mt-4 basis-[60%] ml-8">
            Please scan the QR code with your preferred Cambodian banking
            application. Include your name in the transaction remarks to be
            recognized on our supporters list.
          </p>
        </div>
      </div>

      <div className="text-white flex items-center mt-12 justify-center gap-6 pb-20">
        <div className="border-b flex-1 border-gray-700"></div>
        <h1 className="text-3xl font-bold">Partners</h1>
        <div className="border-b flex-1 border-gray-700"></div>
      </div>

      <div className="bg-gray-900 w-[900px] mx-auto my-10 rounded-lg">
        <Supporters/>
      </div>
    </div>
  );
};

export default Donate;
