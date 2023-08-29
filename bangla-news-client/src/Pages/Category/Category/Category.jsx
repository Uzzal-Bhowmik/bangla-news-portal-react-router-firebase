import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard/NewsCard";
import useTitle from "../../../hooks/useTitle";

const Category = () => {
  const categoryWiseNews = useLoaderData();
  useTitle("Category");

  return (
    <div>
      {categoryWiseNews.length ? (
        categoryWiseNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))
      ) : (
        <h3 className="text-center mt-5 text-danger fw-bold">
          Sorry! No news currently available of this category.
        </h3>
      )}
    </div>
  );
};

export default Category;
