import React from "react";
import "./Portfolio.css";
import SingleProjectCard from "./SingleProjectCard";
import TourBd from "../../images/tourBd.PNG";
import Repair from "../../images/repair.PNG";
import doctorPortal from "../../images/doctorPortal.PNG";
import emaShop from "../../images/emaShop.PNG";
import HealthCare from "../../images/healthBd.PNG";
import hondaCrb from "../../images/hondaCrb.PNG";
import khawaDhawa from "../../images/khawa-dhawa.PNG";
import { motion } from "framer-motion";

let projects = [
  {
    pic: TourBd,
    name: "TourBd Travalers",
    description:
      "Any user sign in with google, book for a service, dynamic booking info by nodemailer.Clients can check their booking item, delete and also see their current status.Admin can see all orders, give update status and add any service.",
    clientGithubLink: "https://github.com/mahmudul165/TouriBd-client-site",
    liveLInk: "https://tourbd-692a6.web.app/",
    serverGithubLink: "https://github.com/mahmudul165/TouriBd-server-site",
    Technology:
      "ReactJS, NodeJS, ExpressJS, Bootstrap, React Bootstrap, MongoDB, Nodemailer,Bootstrap, Firebase Authentication and hosting, Heroku.",
  },
  {
    pic: Repair,
    name: "Bicycleo Repair",
    description:
      " Full-stack web application with dynamic service and testimonial section.Any user sign in with google, order for a service, check their order list and current status from their dashboard & also can give review.Admin panel available & admin can see all orders and add any service and give order status from admin dashboard.",
    clientGithubLink: "https://github.com/mahmudul165/repair-client",
    liveLInk: "https://bicycleo-repair-d5299.web.app/",
    serverGithubLink: "https://github.com/mahmudul165/repair-server",
    Technology:
      "ReactJS, NodeJS, Nodemailer,ExpressJS, MongoDB, React Bootstrap, Firebase, Material Ui, Firebase Authentication and hosting, Heroku.",
  },
  {
    pic: doctorPortal,
    name: "Doctor Portal",
    description:
      "After Authentication user can fixed an appointment according to pick the date and time.User can see their selected appointment and also payment successfully.Authenticate admin panel available & admin can see all appointments and add any service in admin dashboard.",
    clientGithubLink: "https://github.com/mahmudul165/doctor-portal-client",
    liveLInk: "https://doctors-portal-65.web.app/",
    serverGithubLink: "https://github.com/mahmudul165/doctor-portal-server",
    Technology:
      " ReactJS, NodeJS,SenGrid,Strip Payment, ExpressJS, MongoDB, , Material Ui, Firebase Authentication and hosting,Heroku.",
  },
  {
    pic: emaShop,
    name: "Ema E Shop",
    description:
      "Ecommerce website where uses firebase authentication,routing in single page application,add cart,remove Cart,place order ,pagination of products",
    clientGithubLink: "https://github.com/mahmudul165/Ema-Shop-Client-Site",
    liveLInk: "https://react-ema-john-simple-app.firebaseapp.com/",
    serverGithubLink: "https://github.com/mahmudul165/Ema-Shop-Server-Site",
    Technology:
      " ReactJS, NodeJS, ExpressJS, MongoDB, , Material Ui, Firebase Authentication and hosting,Heroku.",
  },
  {
    pic: HealthCare,
    name: "Health Care Bd",
    description:
      "Fully responsive design and mobile friendly font end system.Modal, Accordion, carousel, Responsive Navbar uses.",
    clientGithubLink:
      "https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-mahmudul165",
    liveLInk: "https://health-care-bd-65.web.app/",
    Technology:
      "Html,CSS3, Bootstrap5,React Router Dom,React Form Hook,Context Api,React Bootstrap,Firebase Authentication and hosting",
  },
  {
    pic: hondaCrb,
    name: "Honda Crb",
    description:
      "Fully responsive design and mobile friendly font end system.Modal, Accordion, carousel, Responsive Navbar uses.",
    clientGithubLink: "https://github.com/mahmudul165/Honda_cbr_project",
    liveLInk: "https://honda-cbr-web-project-design.netlify.app/",
    Technology: "HTML5, CSS3, Bootstrap5, Netlify.",
  },
  {
    pic: khawaDhawa,
    name: "Khawa Dhawa",
    description:
      "User can search Recipe and can see ingredient and youtube tutorial.",
    clientGithubLink: "https://github.com/mahmudul165/khawa-dhawa",
    liveLInk: "https://khawa-dhawa.netlify.app/",
    Technology: "HTML5, CSS3, Bootstrap5, Netlify.",
  },
];

const Portfolio = (props) => {
  const theme = props.theme;
  return (
    <div className=" ">
      <div className="portfolio-main justify-content-around">
        <div>
          <div className="portfolio-header">
            <div className="container">
              <motion.h1
                className="h2-headers poppins-font  mb-2 pb-2"
                style={{ color: theme.text }}
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 120,
                  delay: 0.5,
                }}
              >
                Web Developer Journey
              </motion.h1>
              <motion.h5
                className="poppins-font pt-2 mt-2"
                style={{ color: theme.text }}
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 120,
                  delay: 0.9,
                }}
              >
                Just some of the projects I worked on.
              </motion.h5>
            </div>
          </div>
          <div className="portfolio-all container padding-bottom p-3 m-4">
            {projects.map((project) => (
              <SingleProjectCard
                theme={theme}
                project={project}
              ></SingleProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
