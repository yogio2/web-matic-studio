import React, { useRef, useEffect } from 'react';
import './StyleJS/services.css';
import Typed from 'typed.js';

const TypeServeDets = ({details}) => {
    const typeData = useRef(null);

    useEffect (() => {
        if(typeData.current) {
            const typed = new Typed(typeData.current, {
                strings: details,
                typeSpeed: 20
            });
        
        return () => {
            typed.destroy();
        };}
    }, [details]);

    return <p className='servitude' ref={typeData}></p>;
}

const Services = () => {
    const scrollableSectionRef = useRef(null);

    useEffect(() => {
    // Focus on the scrollable section when the component mounts
    scrollableSectionRef.current.focus();
    }, []);

    return (
        <div className="serve" tabIndex={0} ref={scrollableSectionRef}>
            <h2 className='headings' style={{textAlign:"center"}}> <span>Our</span> Services</h2>
            <div class="scroll-down"></div>
            <section className="serveClass" id="AppDev">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/WebDev.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Website Development</h2>
                    <TypeServeDets details={["We specialize in crafting responsive, user-friendly websites that enhance your online presence. Our team leverages the latest technologies to ensure seamless functionality and captivating design, tailored to your specific needs and objectives."]} />
                </div>
                </section>
            <section className="serveClass" id="Website">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/webDesign.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Website Design</h2>
                    <TypeServeDets details={["Our innovative web design solutions blend creativity with functionality to create visually stunning and intuitive interfaces. We strive to capture your brand identity and deliver engaging user experiences that leave a lasting impression on your audience."]}/>
                </div>
                </section>
            <section className="serveClass" id="CopyWrite">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/SocialM.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Social Media Design</h2>
                    <TypeServeDets details={["Elevate your social media presence with our bespoke designs that captivate and engage your audience. From eye-catching graphics to compelling layouts, we tailor each design to reflect your brand personality and drive meaningful interactions."]}/>
                </div>
                </section>
            <section className="serveClass" id="Package">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/Package.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Package Design</h2>
                    <TypeServeDets details={["Our creative packaging designs are meticulously crafted to stand out on the shelf and leave a lasting impression. We combine aesthetics with functionality to ensure your product not only looks great but also communicates its unique value proposition effectively."]}/>
                </div>
                </section>
            <section className="serveClass" id="Product">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/Product.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Product Design</h2>
                    <TypeServeDets details={["We specialize in transforming ideas into tangible products that resonate with your target market. From concept development to prototyping, our team employs a holistic approach to product design, focusing on innovation, functionality, and user experience."]}/>
                </div>
                </section>
            <section className="serveClass" id="SEOSEM">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/Advert.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Advertisement</h2>
                    <TypeServeDets details={["Our creative advertisements are designed to grab attention and compel action. Whether it's print, digital, or multimedia, we craft compelling campaigns that resonate with your audience and deliver measurable results."]}/>
                </div>
                </section>
            <section className="serveClass" id="Maintain">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/Maintain.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Web Maintenance</h2>
                    <TypeServeDets details={["Ensure your website stays secure, up-to-date, and optimized with our reliable web maintenance services. From regular updates to troubleshooting, we provide ongoing support to keep your online presence running smoothly and efficiently."]}/>
                </div>
                </section>
            <section className="serveClass" id="Digital">
            <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/digitalMarket.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Digital Marketing</h2>
                    <TypeServeDets details={["Our comprehensive digital marketing strategies are tailored to your specific goals and target audience. From SEO and PPC to social media and email marketing, we utilize cutting-edge techniques to maximize your online visibility and drive conversions."]}/>
                </div>
                </section>
            <section className="serveClass" id="WebBrand">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/Graphy.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Photography/Videography</h2>
                    <TypeServeDets details={["Our expert videography and photography services capture the essence of your brand with stunning visuals that tell your story. Whether it's dynamic video content or striking imagery, we bring your vision to life with creativity and precision."]}/>
                </div>
                </section>
            <section className="serveClass" id="AnimComm">
                <video className='bgVideo' muted autoPlay loop>
                    <source src='Media/AnimComm.webm' type='video/webm'/>
                    Your browser does not support HTML video.
                </video>
                <div className="linearGrad">
                    <h2 className='ServiceName'>Animated Commercial</h2>
                    <TypeServeDets details={["Engage your audience with captivating animated commercials that leave a lasting impression. From concept creation to animation production, we deliver high-quality commercials that effectively communicate your message and drive results."]}/>
                </div>
                </section>
        </div>
    );
};

export default Services;