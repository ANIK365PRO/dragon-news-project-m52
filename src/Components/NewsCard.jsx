import React from 'react';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
import { GoShareAndroid } from 'react-icons/go';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {id, title, author, image_url, details, rating, total_view, tags } = news;

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-4 w-full text-start">
      {/* Author Header */}
      <div className="flex justify-between items-center mb-3 bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold">{author.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="btn btn-sm btn-ghost text-gray-500">
            <FaRegBookmark size={24}></FaRegBookmark>
          </button>
          <button className="btn btn-sm btn-ghost text-gray-500">
            <GoShareAndroid size={24} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="News"
        className="w-full h-48 object-cover rounded-lg mb-3"
      />

      {/* Details */}
      <p className="text-sm text-gray-600 mb-2">
        {details.length > 200 ? details.slice(0, 200) + '...' : details}
      </p>
      <Link to={`/news-details/${id}`} className="text-red-500 font-semibold cursor-pointer">
        Read More
      </Link>

      {/* Tags */}
      <div className="mt-3 mb-2 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          {/* Ratting */}
          {Array.from({ length: rating.number }).map((rating, indx) => (
            <FaStar key={indx} />
          ))}

          <span className="text-gray-700">{rating.number}</span>
          <span className="text-xs text-green-500 ml-2 capitalize">
            {rating.badge}
          </span>
        </div>

        {/* views*/}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
