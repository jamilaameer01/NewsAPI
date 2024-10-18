import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const response = await axios.get("http://localhost:3001/cards");
    return response.data;
  } catch (error) {
    console.error("Error fetching cards data", error);
    throw error;
  }
}

const Sports = () => {
  const cards = useLoaderData();
  

  // useEffect(() => {
  //   const apicall = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/cards");
  //       setCards(response.data);
  //       setLoading(false);
  //     }
  //     catch (error) {
  //       console.log("Error fetching cards data", error);
  //       setLoading(false);
  //     }
  //   }
  //   apicall();
  // }, [])

  return (
    <div className="flex justify-center gap-[41px] flex-wrap  xs:h-[70vh] xs:overflow-auto  tb:overflow-auto tb:h-[70vh] ">
      {cards.map((car) => (
        <NavLink to={`/category/sports/${car.id}`} key={car.id} state={{ car }}>
          <div className="w-[320px] bg-white shadow-xl border-2 mt-[20px]  px-3 py-5 ">
            <img
              src={car.image}
              alt={car.name}
              className="w-[100%] h-[180px] rounded-tl-[3px] rounded-tr-[3px]"
            />
            <div>
              <h2 className="text-[18px] mt-[-7px] font-semibold hover:cursor-pointer pt-4 hover:underline hover:text-red-700">
                {car.name}
              </h2>
              <p className="text-gray-500 pt-4">{car.description}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sports;
