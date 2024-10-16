import React from "react";

const Card = ({ data }) => {
  console.log(data);
  
  return (
    <div className="flex justify-center gap-[41px] flex-wrap  xs:h-[70vh] xs:overflow-auto ">
      {data.map((item, index) => {
        if (!item.urlToImage) {
          return null;
        } else {
          return (
            <div className="w-[320px] bg-white shadow-xl border-2 mt-[20px]  px-3 py-5 ">
              <img
                className="w-[100%] h-[180px] rounded-tl-[3px] rounded-tr-[3px]"
                src={item.urlToImage}
                alt=""
              />
              <div className="p-[9px]">
                <a
                  onClick={() => window.open(item.url)}
                  className="text-[18px] mt-[-7px] font-semibold hover:cursor-pointer hover:underline hover:text-red-700"
                >
                  {item.title}
                </a>
                <p>{item.description}</p>
                <button
                  onClick={() => window.open(item.url)}
                  className="bg-red-600 border-none cursor-pointer text-white text-[13px] rounded-lg mt-4 "
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
}

export default Card;
