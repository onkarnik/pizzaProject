import React, { useEffect, useState } from "react";

const Card = () => {
  var [items, setItems] = useState([]);
  var [qty, setQty] = useState(0);

  var [product, setProduct] = useState({
    id: {
      $oid: "",
    },
    name: "",
    image: "",
    total_price: 0,
    size: "",
    qty: 0,
  });

  useEffect(() => {
    select();
  }, []);

  var select = () => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var dataReceived = JSON.parse(helper.responseText);
        setItems(dataReceived);
        console.log(items);
      }
    };

    helper.open("GET", `http://127.0.0.1:5500/public/Data/menus.json`);
    helper.setRequestHeader("Content-type", "application/json");
    helper.send();
  };

  //   var addQty = (Id) => {
  //     items.map((item) => {
  //       if (item._id.$oid == Id) {
  //         setItems(items.qty + 1);
  //       }
  //     });
  //   };

  var addQty = (item) => {
    setQty(qty + 1);
  };

  var subQty = () => {
    if (qty > 0) setQty(qty - 1);
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div
            className="card"
            style={{
              width: "15rem",
              display: "inline-block",
              margin: 10,
            }}
          >
            <img
              src={item.image}
              className="card-img-top"
              alt="..."
              style={{ height: 250, padding: 20 }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h6>Rs.{item.price}</h6>
                <a href="#" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
