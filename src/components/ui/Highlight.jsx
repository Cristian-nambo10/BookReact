import React from "react";

// This was made to pass to Highlights as props for cleaner / dynamic code ...

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
};

export default Highlight;
