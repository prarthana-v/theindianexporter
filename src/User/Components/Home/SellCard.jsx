import React from 'react';
import './Home.css'

const SellCard = () => {
  return (
    <div className="row flex justify-around mt-5 mb-5">
      <div className="col-12 col-md-6 col-lg-5 flex justify-center justify-lg-end">
        <div className="card-tie text-white p-6 rounded-lg shadow-lg  border-4 border-green-500" >
          {/* Card Header */}
          <div className="flex justify-center mb-4">
          </div>

          <h2 className="poppins text-2xl font-semibold text-center mb-4">Sell on The Indian Exporter </h2>

          {/* Card Body */}
          <p className="text-gray-300 text-center mb-4">
            Join us to expand and reach millions of customers across India.
          </p>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              className="py-2 px-3 rounded font-semibold roboto tracking-wide  bg-green-500 hover:bg-green-700 text-white"
            > Register As Indian Exporter </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-5 flex justify-center mt-5 mt-md-0 justify-lg-start">
        <div className="card-tie text-white p-6 rounded-lg shadow-lg border-4 border-green-500" >
          {/* Card Header */}
          <div className="flex justify-center mb-4">
          </div>

          <h2 className="poppins text-2xl font-semibold text-center mb-4">Buy From Indian Exporter </h2>

          {/* Card Body */}
          <p className="text-gray-300 text-center mb-4">
            Get the best products at unbeatable prices. Limited time offer!
          </p>

          {/* Register Button */}
          <div className="flex justify-center align-end">
            <button
              className="py-2 px-3 rounded font-semibold roboto tracking-wide bg-green-500 hover:bg-green-700 text-white"
            > Register As Foreign Buyer </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCard;
