import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const SportsDetail = () => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cards/${id}`);
        setCard(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching card details", error);
        setLoading(false);
      }
    };
    fetchCardDetails();
  }, [id]);
  console.log("Fetching details for ID:", id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <div className="">
        <div className="mt-8 p-6 bg-white shadow-lg   w-full rounded-lg max-w-lg  mx-auto flex flex-col items-center">
          <img
            src={card.image}
            alt={card.name}
            className="object-cover rounded-lg w-full h-full border-2 border-gray-200 mb-4 shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{card.name}</h2>
          <p className="text-md text-gray-600 mb-4 text-center">
            {card.description}
          </p>

          <div className="flex flex-col space-y-1 w-full text-gray-700">
            <p className="text-md font-semibold flex justify-between">
              Release Year:{" "}
              <span className="font-normal">{card.releaseYear}</span>
            </p>
            <p className="text-md font-semibold flex justify-between">
              Founded: <span className="font-normal">{card.founded}</span>
            </p>
            <p className="text-md font-semibold flex justify-between">
              Popularity: <span className="font-normal">{card.popularity}</span>
            </p>
            <p className="text-md font-semibold flex justify-between">
              Number of Players:{" "}
              <span className="font-normal">{card.numberOfPlayers}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsDetail;
