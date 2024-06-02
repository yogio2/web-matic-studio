import React from 'react';
import './StyleJS/projects.css';

const Projects = () => {
  const projects = [
    { id: 1, link:'https://agsmoverswebsite.netlify.app/', src: "public/Media/SwatiProjects/FullAGSWebsite.png", alt: "AGS Website" },
    { id: 2, link:'https://digitalagencymain.netlify.app/', src: "public/Media/SwatiProjects/DigitalAgency.gif", alt: "Digital Agency Main" },
    { id: 3, link:'https://dentistdocproject.netlify.app/', src: "public/Media/SwatiProjects/FullDoctorWebsite.png", alt: "Doctor Website" },
    { id: 4, link:'https://nettseries.netlify.app/', src: "public/Media/SwatiProjects/FullNETFLIX.png", alt: "NETFLIX" },
    { id: 5, link:'https://reactrestaurantwebsite.netlify.app/', src: "public/Media/SwatiProjects/FullReactApp.png", alt: "React App" },
    { id: 6, link:'https://symphonycafes.netlify.app/', src: "public/Media/SwatiProjects/SymphonyCafe.gif", alt: "Symphony Cafe" },
    { id: 7, link:'https://www.elevatestores.in/', src: "public/Media/SwatiProjects/elevatestore.png", alt: "Elevate Store" },
    { id: 8, link:'', src: "public/Media/SuyogProjects/Use1.png", alt: "Project Use 1" },
    { id: 9, link:'', src: "public/Media/SuyogProjects/Use2.png", alt: "Project Use 2" },
  ];

  return (
    <div className="projectContainer">
      <h2 className='headings' style={{textAlign: "center"}}><span>Our</span> Projects</h2>
      <div className="gallery">
        {projects.map(project => (
          <a key={project.id} className='galCount' href={project.link} target="_blank" style={{ "--i": project.id }}>
            <img className='projectImg' src={project.src} alt={project.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
