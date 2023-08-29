import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard/NewsCard";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  const allNews = useLoaderData();
  useTitle("Home");

  return (
    <div>
      <div>
        {allNews.map((news) => {
          return <NewsCard key={news._id} news={news}></NewsCard>;
        })}
      </div>
    </div>
  );
};

export default Home;
