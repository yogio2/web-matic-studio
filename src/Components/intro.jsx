import React, {useRef, useEffect, useState} from 'react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import './StyleJS/intro.css'
import News from './news';

export const Intro = () => {
    const el = useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Beyond limitations','Cool things', 'Above and beyond'],
          typeSpeed: 50,
          loop:true
        });

        return () => {
          typed.destroy();
        };
      }, []);

    return(
        <div className="introContainer">
            <div className="introText">
              <h1>We Deliver<br/><span className='spanner' ref={el}></span></h1>
              <p className="introInfo">
              your premier digital solutions partner, dedicated to transforming your online presence. We specialize in web development, digital marketing, and innovative design, ensuring your business thrives in the digital age. With a team of expert professionals, we deliver customized strategies tailored to meet your unique needs. Elevate your brand with Webmatic Studio.
              </p>
                {/* <div className="but">
                  <button className='neonB1'>Learn more</button>
                  <button className='neonB2'>Something</button>
                </div> */}
            </div>
            <div className="newsAPI"><News /></div>
        </div>
    );
};

// techStack for the home page---------------------------------------------------------------------------------------------------------------

export const HomeTech = () => {
  return (
    <div className="marquee">
      <div className='mSide'><h2>Tech Stack</h2></div>
      <div className="logosCont">
        <div className="techScroll">
          <span className='tech'><img src="src\Components\Media\logos\WordPress-Logo.png" alt="Wordpress" /></span>
          <span className="tech"><img src="src\Components\Media\logos\Adobe-Illustrator.jpg" alt="Illustrator" /></span>
          <span className="tech"><img src="src\Components\Media\logos\Adobe-Premiere-Pro-logo.png" alt="Premeire" /></span>
          <span className="tech"><img src="src\Components\Media\logos\threejs-logo.png" alt="Threejs" /></span>
          <span className="tech"><img src="src\Components\Media\logos\photoshop-logo.png" alt="Photoshop" /></span>
          <span className="tech"><img src="src\Components\Media\logos\react-logo.jpg" alt="React" /></span>
        </div>
        <div className="techScroll">
          <span className='tech'><img src="src\Components\Media\logos\WordPress-Logo.png" alt="Wordpress" /></span>
          <span className="tech"><img src="src\Components\Media\logos\Adobe-Illustrator.jpg" alt="Illustrator" /></span>
          <span className="tech"><img src="src\Components\Media\logos\Adobe-Premiere-Pro-logo.png" alt="Premeire" /></span>
          <span className="tech"><img src="src\Components\Media\logos\threejs-logo.png" alt="Threejs" /></span>
          <span className="tech"><img src="src\Components\Media\logos\photoshop-logo.png" alt="Photoshop" /></span>
          <span className="tech"><img src="src\Components\Media\logos\react-logo.jpg" alt="React" /></span>
        </div>
      </div>
      <div className='link'><a href="/techstack" className="link--top">Learn More</a><a href="/techstack" className="link--bottom">Learn More</a></div>
      {/* <div className="learn"><span>Learn More</span></div> */}
    </div>
  );
};

 // Services for the home page---------------------------------------------------------------------------------------------------------------

export const HomeService = () => {
  return (
    <div className="homeService">
      <div className="homeServiceHeader"><h2 className='headings'><span>Our</span> Services</h2></div>
      <div className="serviceGrid">
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Animated commercial images and 3d illustrator\AnimCommBG.png" alt="Animated commercial"/>
          </div>
          <img src="src\Components\Media\Animated commercial images and 3d illustrator\AnimCommFG.png" alt="Animated Commercial" className="character"/>
          <h3>Animated commercial</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\App development images and 3d illustrator\AppDevBG.jpeg" alt="Website development"/>
          </div>
          <img src="src\Components\Media\App development images and 3d illustrator\AppDevFG.jpeg" alt="Website development" className="character"/>
          <h3>Website development</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Copy writing images and 3d illustrator\CopyWriteBG.jpeg" alt="Social Media"/>
          </div>
          <img src="src\Components\Media\Copy writing images and 3d illustrator\CopyWriteFG.jpeg" alt="Social Media" className="character"/>
          <h3>Social Media</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\digital marketing images and 3d illustrator\DigtalMarketingBG.jpeg" alt="digital marketing"/>
          </div>
          <img src="src\Components\Media\digital marketing images and 3d illustrator\DigitalMarketingFG.jpeg" alt="digital marketing" className="character"/>
          <h3>digital marketing</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Package design images and 3d illustrator\PackageDesignBG.jpeg" alt="Package design"/>
          </div>
          <img src="src\Components\Media\Package design images and 3d illustrator\PackageDesignFG.png" alt="Package design" className="character"/>
          <h3>Package design</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Product design images and 3d illustrator\ProductDesignBG.jpg" alt="Product design"/>
          </div>
          <img src="src\Components\Media\Product design images and 3d illustrator\ProductDesignFG.jpg" alt="Product design" className="character"/>
          <h3>Product design</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Seo images and 3d illustrator\SEOBG.jpeg" alt="Advertisement"/>
          </div>
          <img src="src\Components\Media\Seo images and 3d illustrator\SEOFG.jpeg" alt="Advertisement" className="character"/>
          <h3>Advertisement</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Web maintenance images and 3d illustrator\WebMaintainBG.jpeg" alt="Web Maintenance"/>
          </div>
          <img src="src\Components\Media\Web maintenance images and 3d illustrator\WebMaintainFG.webp" alt="Web Maintenance" className="character"/>
          <h3>Web maintenance</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className="cover-image" src="src\Components\Media\Website branding images and 3 illustrator\brandingBG.jpeg" alt="Website Branding"/>
          </div>
          <img src="src\Components\Media\Website branding images and 3 illustrator\brandingFG.jpeg" alt="Website Branding" className="character"/>
          <h3>Website branding</h3>
        </div>
        <div className="card">
          <div className="wrapper">
            <img className=" cover-image" src="src\Components\Media\Website design images and 3d illustrator\WebDesignBG.jpeg" alt="Website Design"/>
          </div>
          <img src="src\Components\Media\Website design images and 3d illustrator\WebDesignFG.jpg" alt="Website Design" className="character"/>
          <h3>Website Design</h3>
        </div>
      </div>
    </div>
  );
};

//Parallax columns ------------------------------------------------------------------------------------------------------------------

export const ParallaxColumn = () => {
  return (
    <div className="ParallaxCol">
      <h2 className='headings'><span>Our</span> Work</h2>
      <div className="parallaxColumn">
        <div className="column">
          <Swiper loop={true} autoplay={{delay: 800, disableOnInteraction: false}} grabCursor={false} modules={[Autoplay]}>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\elegant-minimal.jpg" alt="Design_1" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Templates/TravelSite.png" alt="Design_2" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Templates/404Page.png" alt="Design_3" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SwatiProjects/FullReactApp.png" alt="Design_4" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\ezgif.com-video-to-gif-converted.gif" alt="Design_5" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SuyogProjects/Use5.png" alt="Design_6" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SuyogProjects/Use1.png" alt="Design_7" /></SwiperSlide>
          </Swiper>
          <h3 style={{textAlign:'center'}}>Design</h3>
        </div>
        <div className="column center">
        <Swiper loop={true} autoplay={{delay: 1000, disableOnInteraction: false}} grabCursor={false} modules={[Autoplay]} direction={'vertical'}>
            <SwiperSlide><img className='workDisp' src="src/Components/Templates/3Dmodel.png" alt="Website_1" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Templates/Portfolio1.png" alt="Website_2" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SwatiProjects/ElevateStore.png" alt="Website_3" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SwatiProjects/FullDoctorWebsite.png" alt="Website_4" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SwatiProjects/SymphonyCafe.gif" alt="Website_5" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src/Components/Media/SwatiProjects/DigitalAgency.gif" alt="Website_6" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\banner-overview.webp" alt="Website_7" /></SwiperSlide>
          </Swiper>
          <h3 style={{textAlign:'center'}}>Website</h3>
        </div>
        <div className="column">
        <Swiper loop={true} autoplay={{delay: 1200, disableOnInteraction: false}} grabCursor={false} modules={[Autoplay]} dir='rtl' direction='horizontal'>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\menu.jpg" alt="graphics_1" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\banner-overview.webp" alt="graphics_2" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\elegant-minimal.jpg" alt="graphics_3" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\IMG-20221118-WA0003.jpg" alt="graphics_4" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\Real-estate.webp" alt="graphics_5" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\ezgif.com-video-to-gif-converted.gif" alt="graphics_6" /></SwiperSlide>
            <SwiperSlide><img className='workDisp' src="src\Components\Media\movieposter.jpg" alt="graphics_7" /></SwiperSlide>
          </Swiper>
          <h3 style={{textAlign:'center'}}>Graphics</h3>
        </div>
      </div>
    </div>
  );
};

// Final Section ------------------------------------------------------------------------------------------------------------------------

export const FinalWords = () => {
  return (
    <div className="FinalWords">
      <div className="finalFlex">
        <div className="statement">
          <h2>Innovation at each step</h2>
          <p>Our vision is to create exceptional websites, fostering partnerships and ensuring precision and flair throughout the process.</p>
        </div>
        <div className="finalGrid">
          <NavLink className={"finalgrid-item item1"} to={'/services'}>
            <div className="finalCard"><p style={{maxWidth:'20ch'}} className="finale">Know more about our Services</p></div>
          </NavLink>
          <NavLink className="finalgrid-item item2" to={'/projects'}>
            <div className="finalCard"><p style={{maxWidth:'10ch'}} className="finale">Our work Museum</p></div>
          </NavLink>
          <NavLink className="finalgrid-item item3" to={'/contact'}>
            <div className="finalCard"><p style={{maxWidth:'10ch'}} className="finale">Get in touch</p></div>
          </NavLink>
          <div className="finalgrid-item item4">
            <div className="finalCard"><p style={{maxWidth:'20ch'}} className="finale">Read our featured Blogs</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonials ------------------------------------------------------------------------------------------------------------------------

export const Testimony = () => {
  const [testimonial,setTestimonial] = useState([]);

  useEffect(() => {
    const testimonials = async () => {
      try {
        const response = await fetch('src/Components/testimony.json');
        const data = await response.json();
        console.log('Number of products:', data.length); 
        setTestimonial(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    testimonials();
  }, []);

  return (
    <div className="testimony">
      <h2 className="testimonyTitle headings"><span>What our</span> Clients Say?</h2>
      <div className="clientSlider">
      <Swiper
        effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="speechSwiper"
      >
        <SwiperSlide className='speechSlide' style={{transform:'none'}}>
          <div className="speechBox">
            <img className='qoute' src="src/Components/Media/quote.png" alt="" />
            <div className="speechContent">
              <p>We highly recommend Webmatic Studio for their outstanding website design services. Their talented team, attention to detail, and commitment to delivering exceptional results make them a reliable partner for any business seeking a compelling online presence.</p>
              <div className="speechDetails">
                <div className="imgbox">
                  <img src="src/Components/Media/SamratS.png" alt="" />
                </div>
                <h3>Samrat Sonawale</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='speechSlide'>
          <div className="speechBox">
            <img className='qoute' src="src/Components/Media/quote.png" alt="" />
            <div className="speechContent">
              <p>Webtrust's web design prowess revolutionized our E-Commerce site, boosting sales and delighting customers with an exceptional online shopping experience.</p>
              <div className="speechDetails">
                <div className="imgbox">
                  <img src="src/Components/Media/PetParadise.png" alt="" />
                </div>
                <h3>Pet Paradise</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='speechSlide'>
          <div className="speechBox">
            <img className='qoute' src="src/Components/Media/quote.png" alt="" />
            <div className="speechContent">
              <p>One of the standout qualities of The Webtrust was their professionalism and communication. They are always quick in responding to our inquiries, providing regular updates, and incorporating our feedback effectively.</p>
              <div className="speechDetails">
                <div className="imgbox">
                  <img src="src/Components/Media/AkashM.png" alt="" />
                </div>
                <h3>Aakash Mishra</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='speechSlide'>
          <div className="speechBox">
            <img className='qoute' src="src/Components/Media/quote.png" alt="" />
            <div className="speechContent">
              <p>We recently worked with The Webtrust for our website redesign, and we couldn't be happier with the outcome. The team at The Webtrust showcased their expertise and creativity in delivering a website that perfectly captured our brand essence.</p>
              <div className="speechDetails">
                <div className="imgbox">
                  <img src="src/Components/Media/SwetaK.png" alt="" />
                </div>
                <h3>Shweta Kawale</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='speechSlide'>
          <div className="speechBox">
            <img className='qoute' src="src/Components/Media/quote.png" alt="" />
            <div className="speechContent">
              <p>Our experience with The Webtrust was excellent. They demonstrated a high level of professionalism and expertise throughout the entire website design process.</p>
              <div className="speechDetails">
                <div className="imgbox">
                  <img src="src/Components/Media/ShivaniK.png" alt="" />
                </div>
                <h3>Shivani Kamble</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

// Counter ------------------------------------------------------------------------------------------------------------------------

const Counter = ({ endValue, label }) => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startValue = 0;
      const duration = 1000 / endValue; 
      const counter = setInterval(() => {
        startValue += 1;
        setValue(startValue);
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => clearInterval(counter);
    }
  }, [isVisible, endValue]);

  return (
    <div className="counterContainer" ref={ref}>
    <div className="incremental">{value}</div>
      <h4 className="counterHead">{label}</h4>
    </div>
  );
};

export const ProgressBar = () => {
  return (
    <div className="Counter">
      <h2 className='headings'><span>Our </span>Happy Clients</h2>
      <div className="CounterWrapper">
        <Counter 
          endValue={2} 
          label="Years of Success" 
        />
        <Counter 
          endValue={30} 
          label="Happy Clients" 
        />
        <Counter 
          endValue={30} 
          label="Projects Completed" 
        />
      </div>
    </div>
  );
};
