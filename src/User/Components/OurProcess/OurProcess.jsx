import React, { useState } from "react";
import { FaCheckCircle, FaRegClock } from "react-icons/fa"; // Icons for steps
import './OurProcess.css'
const OurProcess = () => {
  const [selectedFilter, setSelectedFilter] = useState('buyers');

  return (
    <section className="my-5 text-white">

      <div className="container">
        <h2 className="text-5xl font-bold text-center text-green-500 mb-5">
          Our Process
        </h2>
        <div className="d-none d-lg-flex">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="bg-black-light p-5">
                <h2 className="text-2xl font-bold mb-4 ms-2 relative poppins pb-1  text-green-gradient after:absolute after:left-0/4 after:w-full after:bottom-0 after:left-0 after:h-[1px] after:bg-green-200 after:opacity-30 pb-3 after:content-[''] after:transition-all">Our Buyers</h2>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Raise a Query</span> : Submit your enquiry through our platform.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'> <span className="font-semibold">Enquiry Verification</span> : We verify and confirm your enquiry to ensure it’s genuine for our manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Go Live </span>: Your enquiry is published on our platform for manufacturers to view.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Reach 10k+ Manufacturers </span>: Your enquiry is shared with a database of 10,000+ manufacturers across India, and stays live until you close it.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Request Video Verification </span>: Ask manufacturers for video verification of your products, packaging, and logistics.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">No Commission </span>: We charge no commission on your deals, only for the services you select from us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <div className="bg-black-light p-5">
                <h2 className="text-2xl font-bold mb-4 ms-2 relative poppins pb-1  text-green-gradient after:absolute after:left-0/4 after:w-full after:bottom-0 after:left-0 after:h-[1px] after:bg-green-200 after:opacity-30 pb-3 after:content-[''] after:transition-all">Our Manufacturer</h2>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaRegClock style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Register on Our Portal</span> : Complete the registration process, which is verified to ensure genuine suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Lead Notifications</span> : Get notified when a buyer's enquiry goes live and purchase the lead.</p>
                  </div>
                </div>
                <div className="flex items-start my-3">
                  <div className="step-icon mt-2">
                    <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                  </div>
                  <div className="step-content">
                    <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">No Commission Fees</span> : We charge only for the services you choose, with no commission on deals.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="d-lg-none ">
        <div className="container mx-auto p-4">
          {/* Filter bar */}
          <div className="flex justify-center space-x-8 p-4 rounded-md">
            <button
              onClick={() => setSelectedFilter('buyers')}
              className={`px-6 py-2 rounded-md text-xl font-semibold ${selectedFilter === 'buyers' ? 'bg-black-light text-white' : 'bg-transparent text-white'
                } hover:bg-black-light hover:text-white transition-colors`}
            >
              Buyers
            </button>
            <button
              onClick={() => setSelectedFilter('manufacturers')}
              className={`px-6 py-2 rounded-md text-xl font-semibold ${selectedFilter === 'manufacturers' ? 'bg-black-light text-white' : 'bg-transparent text-white'
                } hover:bg-black-light hover:text-white transition-colors`}
            >
              Manufacturers
            </button>
          </div>

          {/* Content based on selected filter */}
          <div className="mt-4">
            {selectedFilter === 'buyers' ? (
              <div className="text-white p-sm-4 rounded-md">
                <div className="bg-black-light p-3 p-sm-5">
                  <h2 className="text-2xl font-bold mb-4 ms-2 relative poppins pb-1  text-green-gradient after:absolute after:left-0/4 after:w-full after:bottom-0 after:left-0 after:h-[1px] after:bg-green-200 after:opacity-30 pb-3 after:content-[''] after:transition-all">Our Buyers</h2>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Raise a Query</span> : Submit your enquiry through our platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'> <span className="font-semibold">Enquiry Verification</span> : We verify and confirm your enquiry to ensure it’s genuine for our manufacturers.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Go Live </span>: Your enquiry is published on our platform for manufacturers to view.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Reach 10k+ Manufacturers </span>: Your enquiry is shared with a database of 10,000+ manufacturers across India, and stays live until you close it.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Request Video Verification </span>: Ask manufacturers for video verification of your products, packaging, and logistics.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">No Commission </span>: We charge no commission on your deals, only for the services you select from us.</p>
                    </div>
                  </div>
                </div>
                {/* Add more buyer-specific content here */}
              </div>
            ) : (
              <div className="text-white p-sm-4  rounded-md">
                <div className="bg-black-light p-3 p-sm-5">
                  <h2 className="text-2xl font-bold mb-4 ms-2 relative poppins pb-1  text-green-gradient after:absolute after:left-0/4 after:w-full after:bottom-0 after:left-0 after:h-[1px] after:bg-green-200 after:opacity-30 pb-3 after:content-[''] after:transition-all">Our Manufacturer</h2>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaRegClock style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Register on Our Portal</span> : Complete the registration process, which is verified to ensure genuine suppliers.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">Lead Notifications</span> : Get notified when a buyer's enquiry goes live and purchase the lead.</p>
                    </div>
                  </div>
                  <div className="flex items-start my-3">
                    <div className="step-icon mt-2">
                      <FaCheckCircle style={{ color: '#18d26e ' }} size={18} />
                    </div>
                    <div className="step-content">
                      <p className='font-normal text-base roboto mb-0 ms-3'><span className="font-semibold">No Commission Fees</span> : We charge only for the services you choose, with no commission on deals.</p>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
