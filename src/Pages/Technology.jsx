import React, { useState, useEffect } from "react";
import { makeServer } from "../../mirage";
import axios from "axios";
// Initialize MirageJS server
makeServer();
const Technology = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("/api/technology-news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center pt-5">
        Technology News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news && news.length > 0 ? (
          news.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:-translate-y-2"
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">
                <strong>Author:</strong> {article.author}
              </p>
              <p className="text-gray-500 mb-4">
                <strong>Published:</strong> {article.publishedDate}
              </p>
              <p className="text-gray-700">{article.content}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No news available.
          </p>
        )}
      </div>
    </div>
  );
};
export default Technology;
