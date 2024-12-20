// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import Contact from "../../sections/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className="header">
          <h1>
            Let's connect to discuss web and mobile app development, emerging
            tech, or just share ideas.
          </h1>
          <p>
            Feel free to reach out for collaborations, insights, or tech
            discussions!
          </p>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
