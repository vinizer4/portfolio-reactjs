import Image1 from "../../assets/project1.jpg";
import Image2 from "../../assets/project2.jpg";
import Image3 from "../../assets/project3.jpg";
import Image4 from "../../assets/project4.jpg";
import Image5 from "../../assets/project5.jpg";
import Image6 from "../../assets/project6.jpg";
import Image7 from "../../assets/project7.jpg";
import Image8 from "../../assets/project8.jpg";
import Image9 from '../../assets/project10.png'
import Image10 from '../../assets/project9.jpg'
import Image11 from '../../assets/Project12.png'
import Image12 from '../../assets/project13.png'
import Image13 from '../../assets/project14.png'
import Image14 from '../../assets/project15.png'
import BarbeariaAlura from '../../assets/barbeariaAlura.png'
import Alurinha from '../../assets/Alurinha.jpeg'
import Apeperia from '../../assets/Apeperia.png'
import Robotron from '../../assets/robotron.png'
import AluraFone from '../../assets/alurafone.png'
import AluraMidi from '../../assets/aluraMidi.png'
import Monitoria from '../../assets/monitoria.png'
import NodeJS from '../../assets/NodeJS.png'
import DTmoney from '../../assets/DTmoney.png'

const data = [
  {
    id: 1,
    category: "frontend",
    image: Image2,
    title: "ToDo-list (Frontend)",
    desc: "It consists of a ToDo-list where it is possible to: Add new task. Mark and unmark a task as completed. Remove a task from the listing. Show task completion progress.",
    demo: "https://ignite-todo-green.vercel.app/",
    github: "https://github.com/vinizer4/IgniteTodo",
  },
  {
    id: 2,
    category: "frontend",
    image: Image3,
    title: "GitHub Blog (Frontend)",
    desc: "That is the challenge for Ignite Course from Rocketseat. We built a Simple Github Blog, to train our fundamentals about React and to test how to use Markdown on WebApp. It is totally responsive, so try to access in your phone too",
    demo: "https://ignite-git-hub-blog.vercel.app/",
    github: "https://github.com/vinizer4/IgniteGitHubBlog",
  },
  {
    id: 3,
    category: "frontend",
    image: Image4,
    title: "CoffeDelivery (Frontend)",
    desc: "Coffee Delivery Ecommercy, fully responsive page for web and mobile, developed with TypeScript and ReactJs. Allows you to make payments and set a delivery address, although I believe that your coffee will arrive cold if your home is far away",
    demo: "https://coffee-delivery-neon.vercel.app/",
    github: "https://github.com/vinizer4/CoffeeDelivery",
  },
  {
    id: 4,
    category: "frontend",
    image: Image5,
    title: "Pomodoro Application (Frontend)",
    desc: "Project of a timer with history page, developed in ReactJS and TypeScript. The application has 2 screens: The initial screen, where the user can enter a task to be performed.",
    demo: "https://ignite-timer-swart.vercel.app/",
    github: "https://github.com/vinizer4/IgniteTimer",
  },
  {
    id: 5,
    category: "frontend",
    image: Image1,
    title: "Memory game (Frontend)",
    desc: "Memory game with the theme of stacks used in web development",
    demo: "https://vinizer4.github.io/JogoDaMemoriaProgramadorBR/",
    github: "https://github.com/vinizer4/JogoDaMemoriaProgramadorBR",
  },
  {
    id: 24,
    category: "frontend",
    image: DTmoney,
    title: "Ignite DTMoney APP (Frontend)",
    desc: "APP for financial management developed using React, React Hook Form, UseContext, LiveServer, Axios, Zod, Styled Components",
    github: "https://github.com/vinizer4/DT-Money",
  },
  {
    id: 7,
    category: "frontend",
    image: Image7,
    title: "Beauty Salon (Frontend)",
    desc: "Professional landing page for beauty salon",
    demo: "https://vinizer4.github.io/beautysaloon/",
    github: "https://github.com/vinizer4/beautysaloon",
  },
  {
    id: 9,
    category: "frontend",
    image: Image8,
    title: "Snack Game (Frontend)",
    desc: "Snack Game with javascript",
    demo: "https://vinizer4.github.io/Snake-Game/",
    github: "https://github.com/vinizer4/Snake-Game",
  },
  {
    id: 10,
    category: "fullstack",
    image: Image9,
    title: "Sujeito Pizza (Frontend, Backend, Mobile)",
    desc: "Registration and command management system for pizzeria",
    github: "https://github.com/vinizer4/SujeitoPizza",
  },
  {
    id: 11,
    category: "backend",
    image: Image10,
    title: "Ecommerce API SpringBoot (Backend)",
    desc: "Ecommerce API build with Java and SpringBoot, RESTFul,"
          + " JPA, JWT, Spring Security, SWAGGER, MySQL, MAVEN",
    github: "https://github.com/vinizer4/ecommerce-API",
  },
  {
    id: 12,
    category: "frontend",
    image: Image11,
    title: "WorldTrip (Frontend)",
    desc: "Responsive travel blog made with React\n"
          + "Next.js\n"
          + "Chakra UI\n"
          + "Swiper",
    demo: "https://worldtrip.vercel.app/",
    github: "https://github.com/vinizer4/ignite-worldtripe",
  },
  {
    id: 13,
    category: "backend",
    image: Image12,
    title: "Recipe API with Django (Backend)",
    desc: "REST API with Python, Django REST Framework and Docker using Test Driven Development (TDD)",
    github: "https://github.com/vinizer4/ecommerce-API",
  },
  {
    id: 14,
    category: "fullstack",
    image: Image13,
    title: "Ignite Call (Fullstack)",
    desc: "NextJs environment, using React + Typescript + Stitches"
          + " for the front-end and Node + Typescript for the"
          + " back-end, Google Calendar API, Docker.",
    demo: "https://ignite-call-vinizera.vercel.app/",
    github: "https://github.com/vinizer4/IgniteCall",
  },
  {
    id: 15,
    category: "frontend",
    image: Image14,
    title: "Ignite Shop (Frontend)",
    desc: "Ecommerce web app build with NextJs and Stripe API for"
          + " payments",
    github: "https://github.com/vinizer4/IgniteShop",
  },
  {
    id: 16,
    category: "backend",
    image: Image10,
    title: "Dental clinic SpringBoot (Backend)",
    desc: "Dental clinic management appointment scheduling API build with Java and SpringBoot, RESTFul,"
          + " JPA, JWT, Spring Security, SWAGGER, MySQL, MAVEN",
    github: "https://github.com/vinizer4/ClinicaOdontologica",
  },
  {
    id: 17,
    category: "frontend",
    image: BarbeariaAlura,
    title: "Alura Barber (Frontend)",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/barbearia__alura/",
    desc: "Website for a barber shop developed during the Boticario group's 2023 program",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/blob/main/projects/barbearia__alura/README.md",
  },
  {
    id: 18,
    category: "frontend",
    image: Alurinha,
    title: "Alurinha (Frontend)",
    desc: "Courses list page developed during the Boticario group's"
          + " 2023"
          + " program",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/alurinha__alura/",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/tree/main/projects/alurinha__alura",
  },
  {
    id: 19,
    category: "frontend",
    image: Apeperia,
    title: "Apeperia (Frontend)",
    desc: "Apeperia page developed during the Boticario group's"
          + " 2023"
          + " program",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/apeperia__alura/",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/tree/main/projects/apeperia__alura",
  },
  {
    id: 20,
    category: "frontend",
    image: Monitoria,
    title: "Monitoria (Frontend)",
    desc: "Monitoria page developed during the Boticario group's"
          + " 2023"
          + " program",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/monitoria__01/",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/blob/main/projects/monitoria__01",
  },
  {
    id: 21,
    category: "frontend",
    image: AluraMidi,
    title: "Alura MIDI (Frontend)",
    desc: "Alura Midi page developed during the Boticario group's"
          + " 2023"
          + " program",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/midi__alura/",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/blob/main/projects/midi__alura",
  },
  {
    id: 22,
    category: "frontend",
    image: AluraFone,
    title: "Alura Fone (Frontend)",
    desc: "Alura Fone page developed during the Boticario group's"
          + " 2023"
          + " program",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/telefone__alura/",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/blob/main/projects/telefone__alura",
  },
  {
    id: 23,
    category: "frontend",
    image: Robotron,
    title: "Robotron (Frontend)",
    desc: "Robotron app developed during the Boticario group's"
          + " 2023"
          + " program",
    demo: "https://vinizer4.github.io/BoticarioDesenvolveAlura/projects/robotron__2000/",
    github: "https://github.com/vinizer4/BoticarioDesenvolveAlura/blob/main/projects/robotron__2000",
  },
  {
    id: 24,
    category: "backend",
    image: NodeJS,
    title: "Ignite Rentx API (Backend)",
    desc: "API for car rental systems developed in the course"
          + " ignite rocketseat NodeJS, Express, TypeORM, JWT",
    github: "https://github.com/vinizer4/IgniteCarsAPI",
  },
  {
    id: 25,
    category: "frontend",
    image: Image6,
    title: "Employee Registration (Frontend)",
    desc: "Registration of employees, data stored in a host location in the user's browser",
    demo: "https://vinizer4.github.io/CadastroFuncionarios-CRUD/",
    github: "https://github.com/vinizer4/CadastroFuncionarios-CRUD",
  }
];

export default data;
