import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StyleJS/popup.css'

function PopupCard() {
    const navigate = useNavigate();
    const toContact = () => {
        // Navigate to another page
        navigate('/contact');
    };

    useEffect(() => {
        const popup = document.querySelector(".popup-card");
        const closeBtn = document.getElementById("close-btn");

        function showPopup() {
            setTimeout(() => {
                popup.style.transform = "translateY(0)";
            }, 50000);
        }

        closeBtn.addEventListener("click", () => {
            popup.style.transform = "translateY(-100vh)";
        });

        showPopup();

        return () => {
            closeBtn.removeEventListener("click", () => {
                popup.style.transform = "translateY(-100vh)";
            });
        };
    }, []);

  return (
    <div className="ContainBanner">
    <div className="popup-card">
      <button id="close-btn">
        <span className="material-symbols-rounded close-icon"> close </span>
      </button>

      {/* <div>
        <img src="src\Components\Media\popupIcon.png" alt="" className="icon" />
      </div> */}

      <div className="content">
        <h3>Transforming Digital Dreams into Reality</h3>
        <div className='between'><img src="src\Components\Media\popupBetween.jpg" alt="book appointment" /></div>
        <p>Scheduling for Success</p>
        <button className='modalMeet neonB1' onClick={toContact}>Book Appointment</button>
      </div>
    </div>
    </div>
  );
}

export default PopupCard;
