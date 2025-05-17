import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const filterdNews = data.filter(news => news.category_id == id);
    console.log(filterdNews);

    setCategoryNews(filterdNews);
  }, [data, id]);
  return (
    <div>
      {/* <h2>CategoryNews - {id}</h2> */}

      <h2>Total {categoryNews.length} news found</h2>
    </div>
  );
};

export default CategoryNews;
