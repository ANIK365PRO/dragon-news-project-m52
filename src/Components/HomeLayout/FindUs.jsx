import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="text-primary font-bold text-start mb-5">Find Us On</h2>

      <div className="join join-vertical w-full  ">
        <button className="btn join-item justify-start">
          <FaFacebook size={24} /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <AiFillTwitterCircle size={24} /> twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram size={24} /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
