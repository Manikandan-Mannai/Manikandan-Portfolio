import ExpenseTracker from '../images/expense-tracker.png'
import Xanadu from '../images/xanadu.jpeg'
import Fiverr from '../images/fiverr.jpg'
import PyroChat from '../images/ChatRoom.png'
import TeslaClone from '../images/tesla-clone.png'
import C from '../images/c.png'
import Java from '../images/java.png'
import School from '../images/SBMHSS.png'
import Kaneni from '../images/Kanini.png'
import Express from '../images/express_logo.png'
import GENESIS from '../images/Genesis.png'
import KLLIFESPACE from '../images/Kllifespace.png'

// BIO
export const Bio = {
  name: "Manikandan",
  roles: [
    "Front End Developer",
    "Freelancer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Manikandan-Mannai",
  resume:
    "https://drive.google.com/file/d/1vsPNKVtPfh5gWUsT0hb5s-Pg64r0DftQ/view",
  linkedin: "https://www.linkedin.com/in/manikandan-a-82a14b27b/",
  twitter: "https://twitter.com/Manikandan2627",
  insta: "https://www.instagram.com/codewizpro/",
};

// SKILLS
export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAh1BMVEX///8Af/8Ad/8AfP8Aev/v+P8Adf8Ae/+Puv8Adv+72P8Ac/87k/8Agf/t9f/6/f/U5v+lyf/m8f+10//H3v/C2/9Tnf9npv/e7P+w0P9+s/9Il/+Ywf8rjP8xkP/A2f8ch//Q4/9zrf94r/+HuP+dxP8JhP9aoP/a6f9Mmv+py/+Tv/8Ab/9IeMWVAAAHEElEQVR4nO2d6XqqMBBAJUQodcG1tlqpS2tre9//+W6oWgWyTAiB4DfnNwaOZiQkk6HTQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCm2X5Pu3Wda/Y91zl8Mhoan3KY9AghD8btQJgeAhL5YMVtEgTRp+GXHx9Cj0EGU7N2AHz1g/RUXm8EOry76PnsaHqIjc76SrwTQQI7b1nO18vw+5Djx4SeDifvRuc9ns/KzhsszDu8kFcSXk7kRerfZLsmf9e1MTpx8ifoeSH5MWpLzOOBXE/jEVVYxX+/9q+h0alvBW2F4tcq8DwNwb/eWb0g6z79qkOxuwty55ALjtYke3i1gp7fW1R6V/ygNHcGqWA30zttCLJQjF6Nmrzl7UAK7csEx1FYOLxyQXYFhzejRi8854JPKbjjHW9BkN0VV89GzabE+3zwqQTnPd7hVgRZKO4MQzH3XwgRXBT7pzVBNkaiHwbtzjec4FMJ9rkXY0vQJBQnT4X/QhcF2eitVCjGS5meS4Kp4l47FMe+KPgcFNQPxVl+INKw4FolmIYi/ClcHnyOCrJ+eoSFYvweAZpzTzBVXAKeq79VweeuYBqKY0VL23UEa0pXMKxFkF3WeiZpZ/gpGJeZCw5qEmSjt6eJqJl3zlNARYJ0UZdgqsgPxRdg8JUR9CPht1q9IPs6ve9CE9sEGnwlBKm/NfLTFfS8KBeKw+IjeHWCoi5jU5Cd9POm0zwEGsGnKxj1zZ9K9QXT6cX38/c6HSjHZeUFqfdirFdO8DcUmeKsz52RqEawgt5pIMgukhwoKftZkeDq2mAVcyZGgiYIBZeXu001vfOXTf1+YsHJqctX1TvdE+zMCQ1pZb3TQcHO8Gex11oDbptg9aAgCrZX0De5Rco+7IYgJUk/LDPSPH14nRTXBZ0SjH4nfKHTSFnYjZp9OP4RPSa6IEjPuRvxkug+DvnBZWZjKjB0QfA60TN5gs8m/V795vpAfOR/0gHBcHdzyEyyEpYnO9H/zf+gA4I0m7umXE45k1+qeXRA8AARVC6InSiMktsjyELxqFLkLJe2SVC+KJ0GHyf3ZNoqQW5OzxlB9lDbBDvxjt9Pg/4X9/jWCfJTe8QZfC0UZH8cuanQMBDnYLZSMJvbyoJPkkXbUsFOd3EZvUXyPGhTwfnuacmPbjhlBDudUcIUfeIrZi/NBFm8hz7tmeRbdcoKsms/HhJlArSJYPfyj92TLSyrGZQUBGEgeL3n+k9G1+CmYHbUZHQNVgVfygk+Z8e9Zmkk7gnG+1w20Z0JFp8970qQN3twT4LchIY7Elxwj78fwck/7uH3Iyg4/H4EBbOMZoLcJlEQxvNKb2a7ZYLCnT13Iije2XMXgtL1DJHguDWCis0FbRdULmS0XFC9FFWrIP+7Li8I2NkjFuR/My4Jgnb2tFcwfodlkLZVEJySUatg2XnRAjPwzh5hLQsrgntuo9qCk0/45gJ/JWjEiuCQcrfTaApq7ewR1pP5sCHYeeYNqvQEtXb2UF84FW9HkHtn1hEc6ezs8SNJOrYtQc7YCi6otbNHtn/NpmDxBg0W1NrZI9+BaFUw/3wDFNTa2UND1R5Sq4Lpn/S1fQqpfTRKNHb2QPZCWBZkofi36hEAUvvn/zSCD7SP27Zgmq91mkYJ14CDBXlaPMgGtBfCvmAaigGlwQZSfwwsSAlwmb0OQfbHsVzCKnMBBf0AXJimHkEwMMFgBc8DeW2foF6dNn5BIIcFQ16KpZihYETrqqA8y4sDvw6Cs4KKLK8CbwPRoM9JQV+zSGK+/KHrgv5Ga49qV7hO46og0coRFKdKuyroJxrtyJPd3RQM4RVSLsPfdgn6R2AboA0nDgp6FDb8HMuDz2FBUB+FrNO4KugRZf1v2DqNs4Kqis/xErwr0bAMdXlUY1HZk8TYg08V11Smvoj6aUJUfF1nx6VH9QZFFQJ4HuQWX59oVGBLW2jKD/ZEHxY6mNY6TbQ2rMllAnBOJlv7Rm+dprqyOWUAz6pFyeVngJc/9G5LYzXEF7dmNI/zs73OImmuuFkzaJSDCnv9Rb/XluC7MNGJJz/UKDfAKzDYBJzC+1VQac0qQ0YlS8dJ9aSLpLVTrvifGNUiaQP86Px5KKBEtUjaBJWFIqxUchNoJVqI9Y5OBV+WqWcaijrlyhvhQbt00C00NNyLXAPDhV7poBvKvDKgCbTSLm7oVVqt0Spl7orOB18W3VA0e/FKE2gmr5m+OqcJ4APUakul1sgLKBTJ4bHpCy2PeoAaBtW9gKwJFKHYzuDLIhugRoIiUC1jKpigr+ONqjXBuyvaexFnExQGqHZfpdoE2ddt2H4ZbiNcB6hk0OhcvD1OoRhGD47OSJjDQrF3d8GXw+H5FgRBEARBEARBEARBEARBEARBEARBEARBEMZ/Z7h0SlKcxhsAAAAASUVORK5CYII=",
      },
      {
        name: "SCSS",
        image:
          "https://sass-lang.com/assets/img/logos/logo.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image: Express
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      }
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
      },
      {
        name: "Canva",
        image:
          "https://cdn-images-1.medium.com/v2/resize:fit:1200/1*A6kkoOVJVpXPWewg8axc5w.png",
      },
      {
        name: "Figma",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
      },
      {
        name: "MS Word",
        image:
          "https://images.softwaresuggest.com/software_logo/microsoftword-20231006113743.png?auto=compress,format",
      },
    ],
  },
  {
    title: "Programming",
    skills: [
      {
        name: "C",
        image: C,
      },
      {
        name: "Java",
        image: Java
      },
    ],
  },
];


// EXPERIENCES
export const experiences = [
  {
    id: 0,
    img: Xanadu,
    role: "FrontEnd Engineering Intern",
    company: "Xanadu Realty Pvt. Ltd.",
    date: "Jan 2023 - June 2023",
    desc: "I had the opportunity to gain valuable experience in front-end development using React.js and database management with LSQ.",
    skills: [
      "React",
      "LSQ",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: Kaneni,
    role: "Full Stack Engineering Intern",
    company: "Kaneni Soft Tech",
    date: "Oct 2023 - Feb 2024",
    desc: "As a full stack intern, I crafted a dynamic MERN stack e- commerce platform complete with an intuitive admin panel, seamless payment integration, and mobile responsiveness.",
    skills: [
      "React",
      "Redux",
      "CSS",
      "Node JS",
      "Express",
      "MangoDB",
    ],
  },
  {
    id: 2,
    img: Fiverr,
    role: "Freelancer",
    company: "Fiverr",
    date: "June 2022 - Present",
    desc: "I collaborated with various startups and developers to elevate and refine their GitHub presence.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Markdown",
      "Figma",
    ],
  },
];

// EDUCATION
export const education = [
  {
    id: 0,
    img: "https://www.facultyplus.com/wp-content/uploads/2021/07/Kongunadu-College-Logo.jpg",
    school: "Kongunadu College of Engineering and Technology, Tamil Nadu",
    date: "Oct 2020 - Sep 2024",
    grade: "8.00 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kongunadu College of Engineering and Technology, Tamil Nadu. I have completed 6 semesters and have a CGPA of 8.00.",
    degree: "Bachelor of Engineering - BE, Computer Science and Engineering",
  },
  {
    id: 1,
    img: School,
    school: "Sri Bharathidasan Matric Hr Sec School, Mannargudi",
    date: "Apr 2019 - Apr 2020",
    grade: "67.5%",
    desc: "I completed my class 12 high school education at SBMHS School, where I studied Science with Computer Science.",
    degree: "TNBSE(XII), Science with Computer",
  },
  {
    id: 2,
    img: School,
    school: "Sri Bharathidasan Matric Hr Sec School, Mannargudi",
    date: "Apr 2017 - Apr 2019",
    grade: "86.8%%",
    desc: "I completed my class 10 education at SBMHS School, Mannargudi.",
    degree: "TNBSE(X)",
  },
];

// PROJECTS
export const projects = [
  {
    id: 9,
    title: "GENESIS",
    description:
      "Designed and developed an event registration website named 'Genesis' using React.js with Styled Components for optimal aesthetics and mobile responsiveness. Distinguished by its innovative approach, the registration system utilized Google Sheets and Firebase Database, providing dynamic methods for monitoring and storing responses. By eschewing traditional Google Forms, this solution enhanced efficiency by 25% through streamlined filtration processes.",
    image:
      GENESIS,
    tags: [
      "React Js",
      "Firebase",
      "Google Sheet",
      "Styled Component",
    ],
    category: "web app",
    github: "https://github.com/Manikandan-Mannai/Genesis-Registration",
    webapp: "https://genesis-bd1h.onrender.com/",
  },
  {
    id: 9,
    title: "KL Life SPace",
    description:
      "KLLifespaces is a sophisticated landing page dedicated to real estate, meticulously crafted as a freelancing project. Developed using React.js, this dynamic website boasts mobile responsiveness and a user-friendly interface. Currently hosting an active user base, KLLifespaces sets a new standard for showcasing real estate properties with elegance and efficiency.",
    image:
      KLLIFESPACE,
    tags: [
      "React Js",
      "Styled Component",
    ],
    category: "web app",
    github: "https://github.com/Manikandan-Mannai/kllifespace",
    webapp: "https://kllifespaces.com",
  },
  {
    id: 9,
    title: "BudgetBuddy",
    description:
      "BudgetBuddy is a React.js-based expense tracking web application that uses Google authentication for user access and Firestore for expense management. Local storage is used for effective state management.",
    image:
      ExpenseTracker,
    tags: [
      "React Js",
      "Firebase",
      "Styled Component",
      "Local Storage",
    ],
    category: "web app",
    github: "https://github.com/Manikandan-Mannai/expense-tracker-firebase",
    webapp: "https://expense-tracker-5c2ad.web.app/",
  },
  {
    id: 0,
    title: "PyroChat",
    description:
      "PyroChat is a responsive web application built with React and Firebase. It allows users to participate in real-time chat rooms, which promotes seamless communication and cooperation. PyroChat provides a responsive and secure platform for instant chatting and community development thanks to its straightforward UI and Firebase's strong backend..",
    image: PyroChat,
    tags: [
      "React Js",
      "Firebase",
      "Styled Component",
      "React Router Dom",
      "Local Storage",
    ],
    category: "web app",
    github: "https://github.com/Manikandan-Mannai/real-time-chat-application",
    webapp: "https://real-time-chat-applicati-cbbb8.web.app/",
  },
  {
    id: 1,
    title: "Tesla Clone",
    description:
      "I have developed a clone of Tesla's landing page using React.js and styled components.",
    image: TeslaClone,
    tags: [
      "React Js",
      "Styled Component",
      "React Router Dom",
      "Mobile Responsive",
    ],
    category: "web app",
    github: "https://github.com/Manikandan-Mannai/tesla-clone",
    webapp: "https://tesla-clone-ca6f6.web.app/",
  },
];

