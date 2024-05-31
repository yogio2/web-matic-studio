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
        }, 1500); // Hide modal after 1.5 seconds
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
        <div className="manual">
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
          >
            Siddharthbhowmick@gmail.com
          </button>
          <p>+91 95119 76919</p>
        </div>
        <div className="manual">
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
          >
            swatitribhuvane111@gmail.com
          </button>
          <p>+91 99690 81144</p>
        </div>
        <div className="manual">
          <Popup
            open={isModalOpen && copiedText === 'suyogshanker@gmail.com'}
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
            onClick={() => handleCopyText('suyogshanker@gmail.com')}
            style={{ cursor: 'pointer' }}
          >
            suyogshanker@gmail.com
          </button>
          <p>+91 98202 74443</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;





/* import React, { useState, useEffect, useRef } from 'react';
import './StyleJS/contact.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Typed from 'typed.js';

const Contact = () => {
  const canvasRef = useRef(null);
  const [textToCopy, setTextToCopy] = useState('Siddharthbhowmick@gmail.com');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const autoAbout = useRef(null);

  useEffect(() => {
    const typed = new Typed(autoAbout.current, {
      strings: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, voluptatem doloribus quas at fugit quibusdam impedit officiis saepe non dolorum tempore ex ipsam quia aut tenetur mollitia praesentium excepturi. \nLorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore accusamus vel nobis asperiores perferendis! Facilis facere omnis consequuntur, sapiente suscipit rem ipsum, sit non, enim asperiores minus quae saepe quod! \nLorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo laborum aut ratione at officiis rerum hic eaque quisquam est a accusamus soluta ipsam libero natus, suscipit sint error assumenda'],
      typeSpeed: 1
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
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
        <div className="manual">
          <Popup
            style={{ backgroundColor: 'none', width: '300px' }}
            trigger={<button style={{ cursor: 'pointer' }}>Siddharthbhowmick@gmail.com</button>}
            position="left center"
            on="click"
            closeOnDocumentClick="true"
            closeOnEscape="true"
            onOpen={handleCopyText}
          >
            <div style={{ color: '#fffff', backgroundColor: 'transparent' }}>Copied!</div>
          </Popup>
          <p>+91 95119 76919</p>
        </div>
        <div className="manual">
          <Popup
            style={{ backgroundColor: 'none', width: '300px' }}
            trigger={<button style={{ cursor: 'pointer' }}>swatitribhuvane111@gmail.com</button>}
            position="left center"
            on="click"
            closeOnDocumentClick="true"
            closeOnEscape="true"
            onOpen={handleCopyText}
          >
            <div style={{ color: '#fffff', backgroundColor: 'transparent' }}>Copied!</div>
          </Popup>
          <p>+91 99690 81144</p>
        </div>
        <div className="manual">
          <Popup
            style={{ backgroundColor: 'none', width: '300px' }}
            trigger={<button style={{ cursor: 'pointer' }}>suyogshanker@gmail.com</button>}
            position="left center"
            on="click"
            closeOnDocumentClick="true"
            closeOnEscape="true"
            onOpen={handleCopyText}
          >
            <div style={{ color: '#fffff', backgroundColor: 'transparent' }}>Copied!</div>
          </Popup>
          <p>+91 98202 74443</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 */