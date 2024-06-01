import React, { useState, useEffect, useRef } from 'react';
import './StyleJS/contact.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Typed from 'typed.js';

const Contact = () => {
  const canvasRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const autoAbout = useRef(null);

  useEffect(() => {
    const typed = new Typed(autoAbout.current, {
      strings: [
        'Webmatics Studio is a leading creative agency that specializes in enhancing your online presence in the digital realm. With a focus on transforming your vision into reality, they offer a comprehensive suite of services, from sleek website designs to robust web development. Their team of professionals, with expertise in website development, web maintenance, advertising commercials, and digital marketing strategies, create bespoke solutions that set them apart in today\'s competitive landscape. Webmatics Studio\'s commitment to excellence sets them apart, as they work closely with clients from concept to final execution, ensuring their vision is brought to life with precision and flair.'
      ],
      typeSpeed: 1,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleCopyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
        }, 1000); // Hide modal after 1.5 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="conContainer">
      <div className="Contact">
        <p className='matrix' ref={autoAbout}></p>
        <h2>Reach out to us</h2>
        <div className="ContactCardContainer">
          <div className="manual">
            <p className="aboutText naamKaran" style={{textAlign:'center'}}>Papiya Bhowmick</p>
            <p>MD</p>
            <p className='aboutText'></p>
            <Popup
              open={isModalOpen && copiedText === 'Papiyabhowmick@webmaticstudio.com'}
              onClose={() => setIsModalOpen(false)}
              position="left center"
              closeOnDocumentClick
              closeOnEscape
              contentStyle={{ background: 'none', border: 'none' }}
              arrow={false}
            >
              <div className="popup-content">Copied!</div>
            </Popup>
            <button
              onClick={() => handleCopyText('Papiyabhowmick@webmaticstudio.com')}
              style={{ cursor: 'pointer' }}
              className='aboutText'
            >
              Papiyabhowmick@webmaticstudio.com
            </button>
          </div>
          <div className="manual">
            <p className="aboutText naamKaran" style={{textAlign:'center'}}>Siddharth Bhowmick</p>
            <p>CCO</p>
            <p className='aboutText'>+91 95119 76919</p>
            <Popup
              open={isModalOpen && copiedText === 'Siddharthbhowmick@gmail.com'}
              onClose={() => setIsModalOpen(false)}
              position="left center"
              closeOnDocumentClick
              closeOnEscape
              contentStyle={{ background: 'none', border: 'none' }}
              arrow={false}
            >
              <div className="popup-content">Copied!</div>
            </Popup>
            <button
              onClick={() => handleCopyText('Siddharthbhowmick@gmail.com')}
              style={{ cursor: 'pointer' }}
              className='aboutText'
            >
              Siddharthbhowmick@gmail.com
            </button>
          </div>
          <div className="manual">
            <p className="aboutText naamKaran" style={{textAlign:'center'}}>Swati Tribhuvane</p>
            <p>CTO</p>
            <p className='aboutText'>+91 99690 81144</p>
            <Popup
              open={isModalOpen && copiedText === 'swatitribhuvane111@gmail.com'}
              onClose={() => setIsModalOpen(false)}
              position="left center"
              closeOnDocumentClick
              closeOnEscape
              contentStyle={{ background: 'none', border: 'none' }}
              arrow={false}
            >
              <div className="popup-content">Copied!</div>
            </Popup>
            <button
              onClick={() => handleCopyText('swatitribhuvane111@gmail.com')}
              style={{ cursor: 'pointer' }}
              className='aboutText'
            >
              swatitribhuvane111@gmail.com
            </button>
          </div>
          <div className="manual">
            <p className="aboutText naamKaran" style={{textAlign:'center'}}>Shubham Medikonda</p>
            <p>Art Director</p>
            <p className='aboutText'>+91 82087 91094</p>
            <Popup
              open={isModalOpen && copiedText === 'Sniper10gamer@gmail.com'}
              onClose={() => setIsModalOpen(false)}
              position="left center"
              closeOnDocumentClick
              closeOnEscape
              contentStyle={{ background: 'none', border: 'none' }}
              arrow={false}
            >
              <div className="popup-content">Copied!</div>
            </Popup>
            <button
              onClick={() => handleCopyText('Sniper10gamer@gmail.com')}
              style={{ cursor: 'pointer' }}
              className='aboutText'
            >
              Sniper10gamer@gmail.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;