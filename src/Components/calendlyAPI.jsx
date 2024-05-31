import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyAPI = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/suyog-shanker"/>
    </div>
  );
};

export default CalendlyAPI;