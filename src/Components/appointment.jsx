import "./StyleJS/appointment.css"
import CalendlyAPI from "./calendlyAPI";



const BookingForm = () => {

  return (
    <div className="Booking">
      <h1 className="headings"><span>Meet</span> Us</h1>
      <div className="bookContainer">
        <div className="bookform">
          <CalendlyAPI />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;