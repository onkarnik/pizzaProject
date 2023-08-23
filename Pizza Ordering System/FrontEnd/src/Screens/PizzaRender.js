import { useState } from "react";

function PizzaRender({ pizza }) {
  
  var [qty, setQty] = useState(1);
  var [variant, setVariant] = useState("small");
  var [message, setMessage] = useState("");

  var addQty = () => {
    setQty(qty + 1);
  };

  var subQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  var addToCart = () => {
    setMessage("Added to cart");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div
      className="card"
      style={{
        display: "inline-block",
        margin: 25,
      }}
     >
      <img
        src={pizza.image}
        className="card-img-top"
        alt="..."
        style={{ height: 200}}
      />
      <div className="card-body">
        <h5 className="card-title" style={{color:"red"}}><strong>{pizza.name}</strong></h5>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "block" }}>
            <button onClick={subQty}><strong>-</strong></button>
            {qty}
            <button onClick={addQty}><strong>+</strong></button>
          </div>
          <div>
            <select onChange={(val) => setVariant(val.target.value)}>
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