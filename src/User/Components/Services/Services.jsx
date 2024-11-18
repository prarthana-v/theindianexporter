import React from 'react';
import './Services.css'

const OurServices = () => {
  return (
    <section className="bg-gradient-to-r from-black via-green-900 to-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-green-500">Our Services</h2>
        <p className="text-lg poppins mt-4">Discover innovative solutions for International Buyers and Indian Manufacturers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="service- bg-black-light relative flex flex-col items-center justify-center bg-black rounded-lg p-8 hover:bg-green-500 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl">
          <h3 className="text-2xl poppins font-bold text-green-gradient mb-8">For International Buyers</h3>
          <ul className="space-y-4">
            <li className='roboto'><span className="font-semibold text-gray-400 ">Direct Access:</span> Connect directly with Indian manufacturers – no middlemen.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Transparency:</span> Only verified manufacturers are listed.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Quality Assurance:</span> We ensure your product quality meets international standards.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Fraud-Free Guarantee:</span> Rest assured, all our manufacturers are verified.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Video Verification:</span> Get real-time video updates during production and delivery.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Logistics Support:</span> We help with door-to-door logistics to ensure smooth delivery.</li>
          </ul>
        </div>

        <div className="service- bg-black-light relative flex flex-col items-center justify-center bg-black rounded-lg p-8 hover:bg-green-500 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl">
          <h3 className="text-2xl poppins font-bold text-green-gradient mb-8">For Indian Manufacturers</h3>
          <ul className="space-y-4">
            <li className='roboto'><span className="font-semibold text-gray-400 ">Profile Creation:</span> Build your online presence with a custom profile.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Documentation Support:</span> We assist in obtaining IEC, AD code, and other certifications.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Customs Clearance:</span> We ensure hassle-free export documentation and smooth customs processes.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Lead Generation:</span> Gain access to verified global buyers.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Buyer Guidance:</span> We provide strategies to deal with international buyers effectively.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Govt. Benefits:</span> Get notified of any benefits and subsidies you can avail of.</li>
          </ul>
        </div>

        <div id='service-additional' className="service- bg-black-light relative flex flex-col items-center justify-start bg-black rounded-lg p-8 hover:bg-green-500 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl ">
          <h3 className="text-2xl poppins font-bold text-green-gradient mb-8">Additional Support</h3>
          <ul className="space-y-4">
            <li className='roboto'><span className="font-semibold text-gray-400 ">International Exhibitions:</span> Guidance for exhibiting at global trade shows.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Logistics Partners:</span> Best-in-class freight forwarders for your shipments.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Learn Export:</span> Complete export education, from documentation to delivery.</li>
            <li className='roboto'><span className="font-semibold text-gray-400 ">Full Support:</span> Ongoing assistance to make your export process seamless.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
