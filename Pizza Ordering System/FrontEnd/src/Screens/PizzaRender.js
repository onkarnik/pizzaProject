import { useState } from "react";

function PizzaRender({ pizza }) {
  var [qty, setQty] = useState(1);
  var [varient, setVarient] = useState("small");
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
            <select onChange={(val) => setVarient(val.target.value)}>
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
          <h6>Rs.{qty * pizza.prices[0][varient]}</h6>
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
