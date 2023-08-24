import axios from "axios";
import { useEffect, useState } from "react";
import { createUrl, getConfig } from "../utils/utils";

function PizzaRender({ pizza }) {

  var [qty, setQty] = useState(1);
  var [variant, setvariant] = useState("small");
  var [message, setMessage] = useState("");
  const jwtToken = sessionStorage.getItem("jwtToken")
  const config = getConfig(jwtToken)
  const postData = {
    "name" : pizza.name,
    "quantity":qty,
    "price":pizza.prices[0][variant],
    "userName":sessionStorage.getItem("userName")
  }
  const url = createUrl("/addToCart")

  useEffect(()=>{
    if(message!=""){
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  },[message])

  var addQty = () => {
    setQty(qty + 1);
  };

  var subQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  var addToCart = () => {
    
    axios.post(url,postData,config)
    .then(res =>{
      setMessage("Added to cart");
    })
    .catch(err=>{
      console.log(err)
      setMessage("Oops! Something went Wrong");
    })

    
  };

  return (
    <div
      className="card"
      style={{
        width: "15rem",
        height: 500,
        display: "inline-block",
        margin: 20,
      }}
    >
      <img
        src={pizza.image}
        className="card-img-top"
        alt="..."
        style={{ height: 250, padding: 20 }}
      />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>

        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "block" }}>
            <button onClick={subQty}>-</button>
            {qty}
            <button onClick={addQty}>+</button>
          </div>
          <div>
            <select onChange={(val) => setvariant(val.target.value)}>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6>Rs.{qty * pizza.prices[0][variant]}</h6>
          <button onClick={addToCart} type="button" class="btn btn-primary">
            Add to cart
          </button>
        </div>
        <p style={{ color: "green", display: "inline-block" }}>{message}</p>
      </div>
    </div>
  );
}

export default PizzaRender;
