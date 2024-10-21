import React from "react";

const Card = ({ data }) => {
  console.log("Card News Data>>>>>>>>>>>>>>>", data);

  return (
    <div className="flex justify-center gap-[41px] flex-wrap xs:h-[70vh] xs:overflow-auto tb:overflow-auto tb:h-[70vh]">
      {data.map((item) => {
        if (!item.image) {
          return null;
        } else {
          return (
            <div
              key={item.id}
              className="w-[320px] bg-white shadow-xl border-2 mt-[20px] px-3 py-5"
            >
              <img
                className="w-[100%] h-[180px] rounded-tl-[3px] rounded-tr-[3px]"
                src={item.image}
                alt={item.title}
              />
              <div className="p-[9px]">
                <a
                  onClick={() => window.open(`/news/${item.id}`)}
                  className="text-[18px] mt-[-7px] font-semibold hover:cursor-pointer hover:underline hover:text-red-700"
                >
                  {item.title}
                </a>
                <p className="text-sm text-gray-600 mb-2">
                  {item.content.substring(0, 100)}...
                </p>
                <div className="text-sm text-gray-600">By {item.author}</div>
                <div className="text-xs text-gray-500">
                  Published: {item.publishedDate}
                </div>
                <div className="text-xs text-blue-500 mt-1">
                  Category: {item.category}
                </div>
                <button
                  onClick={() => window.open(`/news/${item.id}`)}
                  className="bg-red-600 border-none cursor-pointer text-white text-[13px] rounded-lg mt-4 px-3 py-1"
                >
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
