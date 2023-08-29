import { useState } from "react";
import { createUrl, getConfig } from "../utils/utils";
import axios from "axios";

function AddressRender({ address }) {
  const url = createUrl("/placeOrder");
  const userName = sessionStorage.getItem("userName");
  const addressId = address.id;
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  const postData = {
    userName,
    addressId,
  };

  const placeOrder = (id) => {
    axios
      .post(url, postData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">{address.addressLine1}</p>
          <p className="card-text">{address.city}</p>
          <p className="card-text">{address.state}</p>
          <p className="card-text">{address.pinCode}</p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              placeOrder(address.id);
            }}
          >
            Deliver here
          </button>

          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default AddressRender;
