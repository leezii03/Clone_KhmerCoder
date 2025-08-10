import React from "react";
import PartnerCard from "../components/PartnerCard";

const Partners = () => {
  return (
    <div className="max-w-[1400px] mx-auto pb-20">
      <div className="text-white flex items-center mt-12 justify-center gap-6">
        <div className="border-b flex-1 border-gray-700"></div>
        <h1 className="text-3xl font-bold">Partners</h1>
        <div className="border-b flex-1 border-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/plusgate.webp?height=200&width=400`}
          sponsors={{ gold: 2, silver: 3 }}
          title={"PlusGate"}
          description={
            "PlasGate is Cambodia's largest authorized SMS gateway, connecting businesses to all major networks."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/academy-h.png?height=200&width=400`}
          sponsors={{ gold: 2 }}
          title={"Binance Academy"}
          description={
            "Binance Academy offers free, comprehensive education on blockchain and cryptocurrency topics."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/bill24.png?height=200&width=400`}
          sponsors={{ silver: 3 }}
          title={"Bill24"}
          description={
            "Bill24 streamlines bill payments, connecting businesses and customers through multiple channels."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/datau.png?height=200&width=400`}
          sponsors={{ CO: 6 }}
          title={"DataU"}
          description={
            "DataU Academy offers live, interactive data science and AI training programs in Cambodia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/dpcloud_logo.png?height=200&width=400`}
          sponsors={{ silver: 3 }}
          title={"Daun Penh Data Center"}
          description={
            "DP CLOUD offers VPS, dedicated servers, web hosting, and other cloud services located in Cambodia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/jobify.jpg`}
          sponsors={{ CO: 6 }}
          title={"Jobify"}
          description={
            "Jobify is Cambodia's leading IT job matching service, offering recruitment and staffing solutions to connect companies with skilled tech professionals."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/techbodia.png?height=200&width=400`}
          sponsors={{ silver: 3 }}
          title={"Techbodia"}
          description={
            "Techbodia is a leading Cambodian IT company offering customer-satisfaction-driven services."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/dreamslab.svg?height=200&width=400`}
          sponsors={{ silver: 2, venue: "" }}
          title={"Dreamslab"}
          description={
            "DreamsLAB is a Cambodian software solutions company specializing in custom software, mobile apps, cloud services, AI, and blockchain integration."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/ke.png?height=200&width=400`}
          sponsors={{ gold: "" }}
          title={"Khmer Enterprise"}
          description={
            "Khmer Enterprise is a government-backed initiative fostering entrepreneurship in Cambodia through financial support, training, and ecosystem development."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/aifarm.png?height=200&width=400`}
          sponsors={{ silver: 2 }}
          title={"AI Farm"}
          description={
            "AI Farm Robotic Factory, a subsidiary of Khamsa Group of Businesses (KGB), is a technology-driven company based in Phnom Penh, Cambodia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/cnx.png?height=200&width=400`}
          sponsors={{ silver: "" }}
          title={"Cambodian Network Exchange"}
          description={
            "Cambodian Network Exchange (CNX) is an open, neutral internet exchange in Cambodia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/horpao.svg?height=200&width=400`}
          sponsors={{ silver: "" }}
          title={"Horpao"}
          description={
            "Hor Pao is a Cambodian POS and loyalty app helping small businesses manage sales, finances, and customer rewards efficiently."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/sabay-tekh.png?height=200&width=400`}
          sponsors={{ silver: "" }}
          title={"Sabay TeKh"}
          description={
            "Sabay Cloud offers cloud-based video streaming, storage, and transcoding services in Cambodia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/connexion2.png`}
          sponsors={{ venue: "" }}
          title={"Connexion"}
          description={
            "Connexion is a 'work & lifestyle' sustainable hub in the center of Koh Pich, Phnom Penh."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/mylekha.png?height=200&width=400`}
          sponsors={{ CO: ""}}
          title={"MyLekha"}
          description={
            "MyLekha is a free, all-in-one POS system from Cambodia, helping businesses manage sales, inventory, and finances efficiently."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/peanex.png`}
          sponsors={{ venue: "" }}
          title={"Peanex"}
          description={
            "Versatile event venue with catering, decor, and ample parking."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/raintree.png`}
          sponsors={{ venue: "" }}
          title={"Raintree"}
          description={
            "Raintree is Cambodia's first creative office development, offering flexible workspaces and event venues in Phnom Penh's central business district"
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/bookme.svg?height=200&width=400`}
          sponsors={{ TP: "" }}
          title={"BookMe+"}
          description={
            "BookMe+ is a Cambodian app offering seamless booking for transport, accommodations, events, and activities across Southeast Asia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/cadt.png?height=200&width=400`}
          sponsors={{ MP: "" }}
          title={"Cambodia Academy of Digital Technology"}
          description={
            "Cambodia Academy of Digital Technology (CADT) is a government-backed institution advancing digital education, research, and innovation in Cambodia."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/fed-startup-cambodia.png?height=200&width=400`}
          sponsors={{ MP: '' }}
          title={"Federation of Cambodia Startup"}
          description={
            "Empowering Innovation, Uniting Startups, Connecting Cambodian Startups to the Global Market."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/nicc.png?height=200&width=400`}
          sponsors={{ MP: '' }}
          title={"National Incubation Center of Cambodia"}
          description={
            "The National Incubation Center of Cambodia (NICC) at RUPP supports startups through training, mentorship, and innovation-driven programs."
          }
        />

        <PartnerCard
          img={`https://khmercoder.com/assets/images/partners/techo-startup.png?height=200&width=400`}
          sponsors={{ MP: '' }}
          title={"Techo Startup Center"}
          description={
            "Techo Startup Center accelerates Cambodian startups via innovation, digital platforms, research, and enterprise digitization initiatives."
          }
        />
      </div>
    </div>
  );
};

export default Partners;
