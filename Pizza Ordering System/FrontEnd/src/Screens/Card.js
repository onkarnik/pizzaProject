import React, { useEffect, useState } from "react";
import AllPizza from "./pizza-data";
import PizzaRender from "./PizzaRender";

const Card = () => {
  var [items, setItems] = useState([]);
  var [qty, setQty] = useState(0);

  return (
    <>
      {AllPizza.map((pizza) => {
        return <PizzaRender pizza={pizza} />;
      })}
    </>
  );
};

export default Card;
