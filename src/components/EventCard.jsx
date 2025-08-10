import React from "react";

const EventCard = ({img, date, title, description, location, time}) => {
  return (
    <div className="mx-auto bg-gray-900 rounded-xl overflow-hidden">
      <div>
        <div className="relative">
          <img
            className="h-[200px] w-full absolute"
            src={img}
            alt="Event banner"
          />
          <p className="bg-yellow-500 inline-block rounded-full px-4 py-[2px] absolute right-3 top-3 text-sm font-medium">Meetup</p>
        </div>
        
        <div className="p-6 pt-[220px]">
          <div className="mb-5">
            <p className="text-yellow-500 mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar h-4 w-4"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {date}
            </p>
            <h1 className="text-2xl font-bold text-white">
              {title}
            </h1>
          </div>

          <p className="text-gray-300 mb-5 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center text-gray-300 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin h-4 w-4 mt-0.5 flex-shrink-0"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="ml-2">{location}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock h-4 w-4 mt-0.5 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="ml-2">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;