import React from "react";

const Watch = ({ watch }) => {
  const { name, price } = watch;
  return (
    <div>
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default Watch;
