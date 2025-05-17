import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 px-5 py-3 my-4 gap-5">
      <p className="text-base-100 bg-secondary px-4 py-2 font-semibold">
        Latest
      </p>

      <Marquee className="flex space-x-5" pauseOnHover={true} speed={80}>
        <p className="text-primary font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
          voluptatibus in delectus perferendis,.
        </p>

        <p className="text-primary font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
          voluptatibus in delectus perferendis,.
        </p>
        <p className="text-primary font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
          voluptatibus in delectus perferendis,.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
