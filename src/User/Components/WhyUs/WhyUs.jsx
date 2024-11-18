import React from "react";
import { CheckCircle, VerifiedUser, SupportAgent, PriceCheck } from '@mui/icons-material';
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="why-us-section py-5">
      <div className="container">
        <h2 className="text-5xl text-green-500 font-bold mb-20">Why Choose Us?</h2>
        <div className="why-us-content">
          <div className="why-us-item">
            <div className="icon-container">
              <CheckCircle fontSize="large" />
            </div>
            <p className='roboto py-5 why-us-description'>
              We offer an end-to-end service that makes sourcing from India feel just like you're visiting the country yourself to meet your requirements.
            </p>
          </div>
          <div className="why-us-item">
            <div className="icon-container">
              <VerifiedUser fontSize="large" />
            </div>
            <p className='roboto py-5 why-us-description'>
              Sourcing from The Indian Exporter means connecting with a network of verified suppliers and buyers, ensuring trust in every transaction.
            </p>
          </div>
          <div className="why-us-item">
            <div className="icon-container">
              <SupportAgent fontSize="large" />
            </div>
            <p className='roboto py-5 why-us-description'>
              Our team provides 24/7 dedicated support, so your queries and needs are addressed anytime, anywhere.
            </p>
          </div>
          <div className="why-us-item">
            <div className="icon-container">
              <PriceCheck fontSize="large" />
            </div>
            <p className='roboto py-5 why-us-description'>
              We eliminate middlemen by offering direct connections to manufacturers with no commissions, ensuring the best quality at competitive prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
