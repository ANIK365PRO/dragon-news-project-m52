import React from 'react';
import Logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center  pt-5 border">
      <img className="w-[360px]" src={Logo} alt="Logo image" />
      <p className="text-accent mt-3 mb-1">Journalism Without Fear or Favour</p>

      <p className="font-medium">
        <span className="text-primary"> {format(new Date(), 'EEEE,')}</span>{' '}
        <span className="text-accent">
          {format(new Date(), ' MMMM d, yyyy')}
        </span>
        
      </p>
    </div>
  );
};

export default Header;
