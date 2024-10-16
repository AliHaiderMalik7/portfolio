/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ali Haider",
  title: "Hi , I am Ali Haider",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.  I'm skilled at collaborating with cross-functional teams and have a track record of delivering high-quality code on time."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NN83ByXkZ7prroM58cNK-hToZRfKKDRq/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AliHaiderMalik7",
  linkedin: "https://www.linkedin.com/in/7766/",
  gmail: "alihaidermalik08@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Progressive Web Applications ( PWA ) and responsive web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of central punjab",
      logo: require("./assets/images/ucp.jpg"),
      subHeader: "Bachelor's of Science in Computer Science",
      duration: "September 2016 - April 2020",
      desc: "Participated in the making application of react-native"
    },
    {
      schoolName: "Punjab group of colleges",
      logo: require("./assets/images/pgc.png"),
      subHeader: "Computer Science",
      duration: "September 2014 - April 2016"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Reactjs",
      progressPercentage: "90%"
    },
    {
      Stack: "React-native",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "HTML",
      progressPercentage: "90%"
    },
    {
      Stack: "CSS",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Oneclout",
      companylogo: require("./assets/images/OC.png"),
      date: "March 2023 – Present",
      desc: "JavaScript | Reactjs | TypeScript | Redux | TailwindCSS | Chartjs | Recharts | Maplibre | Cypress | VanillaJS",
      descBullets: [
        "Developed and maintained responsive web applications using React.js, ensuring optimal performance across devices and browsers.",
        "Applied testing frameworks like Cypress to ensure code quality, reliability and performance",
        "Continuously enhanced applications, troubleshooting and resolving bugs for existing products.",
        "Worked on Maps using maplibre and leaflet support",
        "Integrated the front-end and back-end of web applications using technologies like AJAX, JSON, and RESTful APIs.",
        "Created responsive charts using libraries such as chartjs, recharts to visualize complex data sets and improve data insights",
        "Co-leader of team and led the team of interns",
        "Communicated with clients to address and resolve their technical concerns.",
        "Developed over 10 applications within an agile environment,"
      ]
    },
    {
      role: "Mern Stack Developer",
      company: "Carbonteq",
      companylogo: require("./assets/images/carbonteqlogo.jpg"),
      date: "July 2021 – Feburary 2023",
      desc: "Javascript | Reactjs | React-native | nodejs | Firebase | Expressjs | Antd | MUI | VanillaJS",
      descBullets: [
        "Implemented user interfaces using HTML, CSS, and React.js.",
        "Continuously improved the application, troubleshooting and fixing bugs.",
        "worked on react-native for veriswap product",
        "Helped in development of API's and database schema, third-party integration and bug fixes using nodejs and expressjs",
        "Utilized TailwindCSS, Bootstrap, ANTD, MUI, React-Bootstrap and styled components for modern, flexible styling solutions, ensuring consistency across platforms",
        "Integrated API's with React-redux and redux-toolkit optimized frontend performance across devices and browsers."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Optimusfox",
      companylogo: require("./assets/images/optimusfox.jpg"),
      date: "Jan 2021 – June 2021",
      desc: "Javascript | Reactjs | Bootstrap | HTML | CSS",
      descBullets: [
        "Designed, developed, and maintained APIs for both internal and external applications.",
        "Trobuleshooting and resolving bugs of different modules",
        "Implemented user interfaces using HTML, CSS, and React.js."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/agrii.png"),
      projectName: "Agrievance",
      projectDesc:
        "© Inovasi Agrievance is a grievance data platform that organizes reports from various global sources related to palm oil commodity companies. We also provide a comprehensive list of grievances from buyers known to have published violations of NDPE (No Deforestation, No Peat, No Exploitation) commitments within their supply chains, as reported by Earthqualizer through the Monitoring Report.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://agrievance.agriplot.earth/"
        }
      ]
    },
    {
      image: "http://stage.agriplot.earth/inovasilogo.svg",
      projectName: "Agriplot",
      projectDesc:
        "Inovasi Agriplot is a tech-driven dataset that developed by Mosaix and Inovasi Digital to provide companies with the deforestation-free supply chain information that is aligned with EU Deforestation Regulation. The data set contains in Inovasi Agriplot is measurable and verifiable to comply with EUDR requirements.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://stage.agriplot.earth/"
        }
      ]
    },
    {
      image: require("./assets/images/veriswap.jpg"),
      projectName: "Veriswap",
      projectDesc:
        "Veriswap is a marketplace for swapping sports cards and trading cards. For example, on Veriswap, you can trade 3 Luka Silver Prizm PSA 10s for 3 Zion Silver PSA 10s and $2,000 cash. Once both parties agree to a trade, they will ship to the Veriswap middleman hub. Veriswap will then verify that the packages contain the appropriate cards and ship them out to the correct parties.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://veriswap.com/"
        }
      ]
    },
    {
      image: require("./assets/images/mv.png"),
      projectName: "Miventures",
      projectDesc:
        "A marketplace for small businesses to connect with advocates and investors around the country (USA). The product needed to be SEC & FINRA compliant.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3054042027",
  email_address: "alihaidermalik08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
