import React from "react";
import NewsCard from "./NewsCard";

const NewsSection = ({ news }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {news.map((article) => (
        <NewsCard
          key={article.slug}
          title={article.title}
          description={article.description}
          date={article.date}
          imageUrl={article.imageUrl}
          slug={article.slug}
        />
      ))}
    </div>
  );
};

export default NewsSection;
