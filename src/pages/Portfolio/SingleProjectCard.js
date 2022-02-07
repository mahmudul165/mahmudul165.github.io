import React from "react";
import "./SingleProjectCard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SingleProjectCard = (props) => {
  let project = props.project;
  const theme = props.theme;
  return (
    <motion.div
      className="single-portfolio-card my-3"
      style={{ display: "inline-block" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1.5,
        delay: 1.2,
        ease: "easeInOut",
      }}
    >
      <div>
        <img className="portfolio-pic p-1 m-1 " src={project.pic} alt="" />
      </div>
      <div className="project-info">
        <h4 style={{ color: theme.text }}>{project.name}</h4>
        <p
          className="work-sans-font all-p small-p fs-6 "
          style={{ color: theme.secondaryText }}
        >
          {project.description}
        </p>
        <h6 style={{ color: theme.text }} className="">
          Technology: {project.Technology}
        </h6>

        <p className="portfolio-links-para">
          <span className="portfolio-link-span">
            <a
              href={project.clientGithubLink}
              className="portfolio-link"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>{" "}
          </span>
          <span className="portfolio-link-span">
            <a
              href={project.liveLInk}
              className="portfolio-link"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
            </a>
          </span>
          {project.serverGithubLink && (
            <span className="portfolio-link-span">
              <a
                href={project.serverGithubLink}
                className="portfolio-link"
                target="_blank"
                rel="norefferer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleProjectCard;
