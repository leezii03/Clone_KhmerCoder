import React from "react";

const PartnerCard = ({ img, sponsors, title, description }) => {
  const Sponsor = {
    gold: (quantity) => (
      <span className="text-white bg-yellow-600 px-2 py-2 rounded-md font-semibold">
        Gold Sponsor{quantity > 0 && ` • ${quantity}`}
      </span>
    ),
    silver: (quantity) => (
      <span className="text-white bg-gray-600 px-2 py-2 rounded-md font-semibold">
        Silver Sponsor{quantity > 0 && ` • ${quantity}`}
      </span>
    ),
    CO: (quantity) => (
      <span className="text-white bg-blue-600 px-2 py-2 rounded-md font-semibold">
        Co-organizer{quantity > 0 && ` • ${quantity}`}
      </span>
    ),
    venue: (quantity) => (
      <span className="text-white bg-green-600 px-2 py-2 rounded-md font-semibold">
        Venue{quantity > 0 && ` • ${quantity}`}
      </span>
    ),
    TP: (quantity) => (
      <span className="text-white bg-gray-600 px-2 py-2 rounded-md font-semibold">
        Ticket Partner{quantity > 0 && ` • ${quantity}`}
      </span>
    ),
    MP: (quantity) => (
      <span className="text-white bg-gray-600 px-2 py-2 rounded-md font-semibold">
        Media Partner{quantity > 0 && ` • ${quantity}`}
      </span>
    ),
  };

  return (
    <div className="mx-auto rounded-xl overflow-hidden bg-gray-900 pb-8">
      <div className="h-[220px] flex items-center justify-center bg-gray-800">
        <p className="text-2xl text-white animate-bounce">Event Banner</p>
      </div>

      <div className="px-6 pt-4">
        <div className="mb-4">
          <div className="flex gap-2 mb-4 mt-2 flex-wrap">
            {sponsors &&
              Object.entries(sponsors).map(([type, quantity]) => (
                <div key={type}>{Sponsor[type]?.(quantity)}</div>
              ))}
          </div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>

        <p className="text-gray-400 mb-4 text-[16px]">{description}</p>

        <a
          href="#"
          className="flex items-center gap-2 text-yellow-600 hover:text-yellow-500 transition-colors"
        >
          Visit Website
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PartnerCard;
