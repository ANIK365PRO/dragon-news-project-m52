import React from 'react';
import classImage from '../../assets/class.png';
import swimmingImage from '../../assets/swimming.png';
import playgroundImage from '../../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-base-200 space-y-5 p-4">
      <h2 className="font-bold text-start mb-5 text-primary">Q-zone</h2>

      <div className="space-y-5">
        <img src={classImage} alt="class-image" />
        <img src={swimmingImage} alt="swimming-image" />
        <img src={playgroundImage} alt="playground-image" />
      </div>
    </div>
  );
};

export default Qzone;
