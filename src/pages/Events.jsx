import React from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="max-w-[1400px] mx-auto pb-20">
      <div className="text-white flex items-center mt-12 justify-center gap-6">
        <div className="border-b flex-1 border-gray-700"></div>
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="border-b flex-1 border-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <Link>
          <EventCard
            img={`https://khmercoder.com/assets/images/events/sr-1.jpg?height=400&width=600`}
            date={"May, 17th 2025"}
            title={"Khmer Coders Party Siemreap v1"}
            description={
              "Khmer Coders Gathering is a regular event for the developer community. This marks our first event in Siem Reap as we begin building a strong and connected tech community in the region."
            }
            location={"Siem Reap House"}
            time={"5:45PM - 9:00 PM"}
          />
        </Link>
        <Link>
          <EventCard
            img={`https://khmercoder.com/assets/images/events/5.jpg?height=400&width=600`}
            date={"March, 7th 2025"}
            title={"Khmer Coders Party v5"}
            description={
              "Khmer Coder Gathering is regular gathering for developer community. The purpose is to strengthen the community relationship."
            }
            location={"Peanex, Connexion"}
            time={"5:45PM - 9:00 PM"}
          />
        </Link>
        <Link>
          <EventCard
            img={`https://khmercoder.com/assets/images/events/4.jpg?height=400&width=600`}
            date={"November, 7th 2024"}
            title={"Khmer Coders Party v4"}
            description={
              "Khmer Coder Gathering is regular gathering for developer community. The purpose is to strengthen the community relationship."
            }
            location={"DreamsLab, Connexion"}
            time={"5:45PM - 9:00 PM"}
          />
        </Link>
        <Link>
          <EventCard
            img={`https://khmercoder.com/assets/images/events/3.jpg?height=400&width=600`}
            date={"August, 9th 2024"}
            title={"Khmer Coders Party v3"}
            description={
              "Khmer Coder Gathering is regular gathering for developer community. The purpose is to strengthen the community relationship."
            }
            location={"Raintree"}
            time={"5:45PM - 9:00 PM"}
          />
        </Link>
        <Link>
          <EventCard
            img={`https://khmercoder.com/assets/images/events/2.jpg?height=400&width=600`}
            date={"June, 7th 2024"}
            title={"Khmer Coders Party v2"}
            description={
              "Khmer Coder Gathering is regular gathering for developer community. The purpose is to strengthen the community relationship."
            }
            location={"Raintree"}
            time={"5:45PM - 9:00 PM"}
          />
        </Link>
        <Link>
          <EventCard
            img={`https://khmercoder.com/assets/images/events/1.jpg?height=400&width=600`}
            date={"February 16, 2024"}
            title={"Khmer Coders Party v1"}
            description={
              "Khmer Coder Gathering is regular gathering for developer community. The purpose is to strengthen the community relationship"
            }
            location={"The RANA"}
            time={"5:45PM - 9:00 PM"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Events;
