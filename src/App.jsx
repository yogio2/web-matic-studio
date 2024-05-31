import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import NavBar from './Components/navbar';
import FootBar from './Components/footbar';
import Projects from './Components/projects';
import Services from './Components/services';
import Home from './Home';
import ProductCard from './Components/templates';
import Techstack from './Components/techstack';
import BookingForm from './Components/appointment';
import Contact from './Components/contact';
import MatrixBG from './Components/matrixg';
import PopupCard from './Components/popup';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <Helmet>
          <title>Welcome to Web Matic Studio</title>
          <meta name="description" content="Welcome to Web Matic Studio, where we offer top-notch web development, design, digital marketing, and more. Explore our services, view our projects, and learn how we can help you achieve your goals." />
          <meta name="keywords" content="web development, web design, digital marketing, photography, videography, animated commercials, Web Matic Studio, professional services, creative solutions" />
          <meta name="author" content="Web Matic Studio" />
          <meta property="og:title" content="Welcome to Web Matic Studio" />
          <meta property="og:description" content="Discover Web Matic Studio, your go-to source for web development, design, digital marketing, and more. See our services and projects to get started." />
          <meta property="og:url" content="https://webmaticstudio.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://webmaticstudio.com" />
        </Helmet>
        <NavBar/><PopupCard/><Home/><FootBar/>
      </>
    },
    {
      path: "/projects",
      element: 
      <>
        <Helmet>
          <title>Our Projects - Web Matic Studio</title>
          <meta name="description" content="Explore the projects delivered by Web Matic Studio. Check out our work and see how we have helped our clients achieve their goals with our expertise in web development, design, and more." />
          <meta name="keywords" content="projects, portfolio, web development projects, design projects, Web Matic Studio, client work, case studies, previous work, web design, digital marketing" />
          <meta name="author" content="Web Matic Studio" />
          <meta property="og:title" content="Our Projects - Web Matic Studio" />
          <meta property="og:description" content="Discover the projects we have completed at Web Matic Studio. See the results we have achieved for our clients and get inspired for your own projects." />
          <meta property="og:url" content="https://webmaticstudio.com/projects" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://webmaticstudio.com/projects" />
        </Helmet>
        <NavBar/><MatrixBG/><Projects/><FootBar/>
      </> 
    },
    {
      path: "/services",
      element: 
      <>
        <Helmet>
          <title>Our Services - Web Matic Studio</title>
          <meta name="description" content="Explore the wide range of services offered by Web Matic Studio, including web development, web design, social media design, package design, product design, advertisement, web maintenance, digital marketing, photography/videography, and animated commercials." />
          <meta name="keywords" content="web development, web design, social media design, package design, product design, advertisement, web maintenance, digital marketing, photography, videography, animated commercials, Web Matic Studio" />
          <meta name="author" content="Web Matic Studio" />
          <meta property="og:title" content="Our Services - Web Matic Studio" />
          <meta property="og:description" content="Discover the services provided by Web Matic Studio, from web development and design to digital marketing and animated commercials." />
          <meta property="og:url" content="https://webmaticstudio.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://webmaticstudio.com/services" />
        </Helmet>
        <NavBar/><MatrixBG/><Services/><FootBar/>
      </>
    },
    {
      path: "/Creatives",
      element: <>
        <Helmet>
          <title>Creatives - Web Matic Studio</title>
        <meta name="description" content="Explore our collection of ready-made templates for webpages, graphics, and designs at Your Company. Perfect for quick and professional solutions" />
        <meta name="keywords" content="ready-made templates, webpage templates, graphic templates, design templates, Your Company, professional templates, web design, graphic design" />
        <meta name="author" content="Web Matic Studio" />
        <meta property="og:title" content="Creatives - Web Matic Studio" />
        <meta property="og:description" content="Discover our range of ready-made templates for webpages, graphics, and designs. Ideal for creating professional and quick solutions." />
        <meta property="og:url" content="https://webmaticstudio.com/Creatives" />
        <meta property="og:type" content="webmaticstudio" />
        <link rel="canonical" href="https://webmaticstudio.com/Creatives" />
        </Helmet>
        <NavBar/><MatrixBG/><ProductCard/><FootBar/>
        </>
    },
    {
      path: "/techstack",
      element: 
      <>
        <Helmet>
        <title>Tech Stack - Web Matic Studio</title>
        <meta name="description" content="Discover the tech stack we use at Web Matic Studio to deliver top-notch services. Our technologies include React, Flutter, Adobe Photoshop, Premiere, Illustrator, WordPress, various JavaScript libraries, and other web and app frameworks." />
        <meta name="keywords" content="tech stack, React, Flutter, Adobe Photoshop, Adobe Premiere, Adobe Illustrator, WordPress, JavaScript libraries, web frameworks, app frameworks, Your Company" />
        <meta name="author" content="Web Matic Studio" />
        <meta property="og:title" content="Our Tech Stack - Web Matic Studio" />
        <meta property="og:description" content="Learn about the technologies we use at Web Matic Studio to build our products and services, including React, Flutter, Adobe tools, WordPress, and more." />
        <meta property="og:url" content="https://webmaticstudio.com/techstack" />
        <meta property="og:type" content="webmaticstudio" />
        <link rel="canonical" href="https://webmaticstudio.com/techstack" />
      </Helmet>
        <NavBar/><MatrixBG/><Techstack/><FootBar/>
      </>
    },
    {
      path: "/contact",
      element: 
      <>
        <Helmet>
          <title>Meet Us - Web Matic Studio</title>
          <meta name='description' content='Get in touch with us via email or phone. Reach out to our Team for any inquireies or support.'/>
          <meta name='keywords' content='Contact, email, Phone, Support, Inquieries'/>
        <meta name="author" content="Web Matic Studio" />
        <meta property="og:title" content=" Meet Us - Web Matic Studio" />
        <meta property="og:description" content="Get in touch with us via email or phone. Reach out to our Team for any inquireies or support" />
        <meta property="og:url" content="https://webmaticstudio.com/contact" />
        <meta property="og:type" content="webmaticstudio" />
        <link rel="canonical" href="https://webmaticstudio.com/contact" />
        </Helmet>
        <NavBar/><div className="contactPage"><MatrixBG/><BookingForm/><Contact /></div><FootBar/>
      </>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;


// navbar, intro, services, our work, portfolio, client, testimonies, footer