import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <section>
      <h2 className="text-primary font-bold text-primary mb-5 text-start">
        Login
      </h2>

      <div className="space-y-3">
        <button className="btn w-full btn-outline btn-secondary ">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button className="btn w-full btn-outline btn-primary ">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </section>
  );
};

export default SocialLogin;
