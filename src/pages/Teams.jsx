import React from "react";
import FounderCard from "../components/FounderCard";
import TeamCard from "../components/TeamCard";

const Teams = () => {
  return (
    <div className="max-w-[1400px] mx-auto pb-20">
      <div className="text-white flex items-center mt-12 justify-center gap-6">
        <div className="border-b flex-1 border-gray-700"></div>
        <h1 className="text-3xl font-bold">Founding Members</h1>
        <div className="border-b flex-1 border-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <FounderCard
          img={`https://khmercoder.com/teams/invisal.jpg`}
          name={"Visal In"}
          position={"Co-founder"}
          description={
            "Founded Khmer Coders in 2018 to foster a supportive tech community in Cambodia. He is also a serial startup founder and an active open-source maintainer."
          }
          social={{
            github: "",
            twitter: "",
            globe: "",
          }}
        />
        <FounderCard
          img={`https://khmercoder.com/teams/sopha-256.jpg`}
          name={"Sopha Sum"}
          position={"CEO at Jobify"}
          description={
            "Sum Sopha is Founder & CEO of Jobify, a tech-focused job platform, and a key leader in Cambodia’s startup and coding communities with a Software Engineering background."
          }
          social={{
            linkedin: "",
          }}
        />
        <FounderCard
          img={`https://khmercoder.com/teams/sokhna.jpg`}
          name={"Sokhna Vor"}
          position={"Co-founder at DataU"}
          description={
            "Sokhna is a Tech and AI leader with decades of experience driving data-powered solutions across industries, blending human insight with machine intelligence to unlock business growth and innovation."
          }
          social={{
            linkedin: "",
          }}
        />
      </div>

      <div className="text-white flex items-center mt-24 justify-center gap-6">
        <div className="border-b flex-1 border-gray-700"></div>
        <h1 className="text-3xl font-bold">Event Coordinators</h1>
        <div className="border-b flex-1 border-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <TeamCard
          img={`https://khmercoder.com/teams/theara-256.jpg`}
          name={"Theara Soeung"}
          position={"Event Coordinator"}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/banly.jpg`}
          name={"Banly Tong"}
          position={"Event Coordinator"}
          social={{
            github: "",
            linkedin: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/neup-orng.jpg`}
          name={"Neup Orng"}
          position={"Event Coordinator"}
          social={{
            linkedin: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/pisey.png`}
          name={"Sok Pisey"}
          position={"Event Coordinator"}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/tep-thean-256.jpg`}
          name={"Tep Thean"}
          position={"Event Coordinator"}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/rathpanha-256.jpg`}
          name={"Sarun Rathpanha"}
          position={"Beer Coordinator"}
          social={{
            github: "",
            globe: "",
          }}
        />
      </div>

      <div className="text-white flex items-center mt-24 justify-center gap-6">
        <div className="border-b flex-1 border-gray-700"></div>
        <h1 className="text-3xl font-bold">Community Moderators</h1>
        <div className="border-b flex-1 border-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <TeamCard
          img={`https://khmercoder.com/teams/sliden.jpg`}
          name={"Sliden"}
          position={"Discord Moderator"}
          social={{
            github: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/thean.jpg`}
          name={"Banly Tong"}
          position={"Discord Moderator"}
          social={{
            github: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/ave.svg`}
          name={"Neup Orng"}
          position={"Discord Moderator"}
          social={{
            globe: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/ave.svg`}
          name={"Sok Pisey"}
          position={"Facebook Moderator"}
          social={{
            globe: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/ratana-256.jpg`}
          name={"Tep Thean"}
          position={"Facebook Moderator"}
          social={{
            globe: "",
          }}
        />
        <TeamCard
          img={`https://khmercoder.com/teams/riroth.jpg`}
          name={"Sarun Rathpanha"}
          position={"Facebook Moderator"}
          social={{
            github: "",
          }}
        />
      </div>
    </div>
  );
};

export default Teams;
