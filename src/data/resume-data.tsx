import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Raman Matusevich",
  initials: "RM",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warsaw",
  about: "Senior Software Engineer",
  summary: (
    <>
      Experienced Senior Software Engineer with expertise in full-stack
      development, specializing in building scalable, user-friendly
      applications. Proficient in React, Next.js, Node.js, and NestJS, with
      extensive experience in developing RESTful and GraphQL APIs, integrating
      third-party services like Stripe and Firebase, and managing databases such
      as PostgreSQL, MongoDB, and Redis. Strong foundation in cloud platforms
      (AWS, Azure) and a track record of delivering high-quality solutions
      aligned with business goals. Well-organized with friendly communication
      skills.
    </>
  ),
  avatarUrl:
    "https://res.cloudinary.com/dmciufuwq/image/upload/t_avatar/uruvoviru3onatrofamf",
  personalWebsiteUrl: "",
  contact: {
    email: "rmnmatusevich@gmail.com",
    tel: "+48786406643",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RmnMatusevich",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roman-matusevich-7650bb184/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor's Degree in Computer Science and E-business",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Volvo",
      link: "https://www.volvoce.com/",
      badges: [
        "On Site",
        "React",
        "Nest.js",
        "TypeScript",
        "Node.js",
        "Azure",
        "PosgreSQL",
        "3rd parties integrations",
      ],
      title: "Senior Software Engineer",
      start: "09/2022",
      end: "12/2024",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Led frontend development with React to deliver maintainable,
            UX/UI-optimized solution for 6000+ end-customers; established
            frontend architecture and tech stack; set up release processes that
            reduced deployment issue detection to 15 minutes.
          </li>
          <li>
            Optimized release processes with CI/CD pipelines, cutting deployment
            issue detection to 15 minutes and enabling 99.9% uptime.
          </li>
          <li>
            Engineered scalable Nest.js backend APIs with REST, GraphQL, and
            Azure event-driven communication, supporting 5x transaction growth
            and integrating third-party services.
          </li>
          <li>
            Developed backoffice systems and implemented advanced monitoring,
            reducing incident response time by 50%.
          </li>
          <li>
            Participated in mentorship program as a mentor and led recruitment
            to onboard 10+ professionals, enhancing team capacity by 10%.
          </li>
        </ul>
      ),
    },
    {
      company: "Pletly",
      link: "https://pletly.com",
      badges: [
        "Remote",
        "React Native",
        "Expo",
        "TypeScript",
        "Nest.js",
        "GraphQL",
        "Tailwind",
      ],
      title: "Senior Software Engineer",
      start: "10/2021",
      end: "08/2022",
      description: (
        <>
          Developing full stack mobile application. Specialized for people with
          disabilities.
          <ul className="list-inside list-disc">
            <li>
              Built a React Native healthcare app for 3,000+ children with
              disabilities, featuring accessible UI and real-time chat (1-to-1,
              group, video/photo sharing, message editor), boosting caregiver
              engagement by 40%.
            </li>
            <li>
              Crafted a scalable Nest.js backend with GraphQL APIs, handling
              7,500+ therapy sessions and 10,000+ messages monthly.
            </li>
            <li>
              Leveraged Expo to streamline app development and publishing,
              cutting build time by 70% and accelerating releases.
            </li>
            <li>
              Integrated HIPAA-compliant APIs for secure data exchange, reducing
              data retrieval time by 20%.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "HF-Solution LLC",
      link: "https://hf-solution.com",
      badges: [
        "On Site",
        "React Native",
        "Express.js",
        "React",
        "web3",
        "blockchain",
      ],
      title: "Software Engineer",
      start: "09/2020",
      end: "09/2021",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Developed a React Native social network app for 5,000+ users,
            enhancing connectivity and user retention by 30%.
          </li>
          <li>
            Built a crypto web wallet with Polkadot and Ethereum APIs (rUSDT,
            rETH, rBTC, RFUEL), supporting 2,000+ daily transactions for
            Transfer, Deposit, Withdraw, Investment, Staking, and Pooling.
          </li>
          <li>
            Improved client collaboration features for an IT startup as a React
            developer, increasing efficiency by 30%.
          </li>
        </ul>
      ),
    },
    {
      company: "Fresh Lime Soft",
      link: "https://www.linkedin.com/company/fresh-lime-software-llc/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=pl",
      badges: [
        "On Site",
        "React",
        "Express.js",
        "AWS",
        "Stripe",
        "Vimeo Streaming",
        "Socket.io",
        "MongoDB",
        "PosgreSQL",
        "MySql",
        "Docker",
        "JQuery",
      ],
      title: "Junior Software Engineer",
      start: "04/2019",
      end: "09/2020",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Engineered a React/TypeScript music search platform, improving
            search efficiency by 80% for 5,000+ users.
          </li>
          <li>
            Developed a React Native gift-sending app, achieving 10,000+
            downloads and 1,500+ monthly transactions.{" "}
          </li>
          <li>
            Built a US parcel delivery integration with Shippo and Stripe,
            processing 1,500+ parcels monthly.
          </li>
          <li>
            Designed a business platform with event booking, payment, and
            subscription features using React, TypeScript, Express, MongoDB,
            Stripe, and GiftUp, serving 4,000+ monthly bookings.
          </li>
          <li>
            Created a Real Estate app with React Native, Express, and
            TypeScript, supporting 1,000+ listings.
          </li>
          <li>
            Designed an NFT Marketplace with The Graph, React, and TypeScript,
            handling 1,000+ trades.
          </li>
          <li>
            Built a business platform with React, TypeScript, Express, MongoDB,
            Stripe, and GiftUp, serving 4,000+ monthly bookings.
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    "Javascript",
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS/MUI/Ant/Custom design systems",
    "Figma",
    "WebSockets",
    "Node.js",
    "Nest.js",
    "GraphQL",
    "Angular",
    "Message Brokers",
    "MongoDB",
    "PosgreSQL",
    "Firebase",
    "Supabase",
    "Azure",
    "AWS",
    "System Architecture",
    "Business prototyping",
    "AI",
    "Quality Assurance",
  ],
  projects: [
    {
      title: "Kryptomon",
      techStack: [
        "TypeScript",
        "Next.js",
        "web3",
        "TheGraph",
        "GraphQL",
        "MongoDB",
        "Redis",
      ],
      description: "Marketplace for in-game NFT characters",
      link: {
        label: "hub.kryptomon.co",
        href: "https://hub.kryptomon.co/open-marketplace",
      },
    },
    {
      title: "Pletly",
      techStack: [
        "TypeScript",
        "Nest.js",
        "React Native",
        "GraphQL",
        "PostgreSQL",
      ],
      description: "Mobile application for people with disabilities",
      link: {
        label: "pletly.com",
        href: "https://pletly.com/",
      },
    },
    {
      title: "Sagetap",
      techStack: ["React", "Flow", "Redux", "MUI"],
      description:
        "B2B paltform that helps to connect Software Vendors with business",
      link: {
        label: "sagetap.io",
        href: "https://www.sagetap.io/",
      },
    },
  ],
} as const;
