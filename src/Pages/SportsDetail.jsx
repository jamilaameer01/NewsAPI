import React from "react";

const CarCard = ({ name, price, imageUrl }) => {
    const carData = [
      {
        name: "Modest Explorer",
        price: "$60/day",
        imageUrl: "https://example.com/modest-explorer.jpg",
      },
      {
        name: "Beach Cruiser",
        price: "$75/day",
        imageUrl: "https://example.com/beach-cruiser.jpg",
      },
     
    ];
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{price}</p>
      </div>
    </div>
  );
};

const SportsDetail = () => {
  const carData = [
    {
      name: "Modest Explorer",
      price: "$60/day",
      imageUrl: "/path/to/image1.jpg",
    },
    {
      name: "Beach Cruiser",
      price: "$75/day",
      imageUrl: "/path/to/image2.jpg",
    },
  
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {carData.map((car, index) => (
        <CarCard
          key={index}
          name={car.name}
          price={car.price}
          imageUrl={car.imageUrl}
        />
      ))}
    </div>
  );
};

export default SportsDetail;
