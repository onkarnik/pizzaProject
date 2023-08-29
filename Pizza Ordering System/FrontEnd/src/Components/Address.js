import axios from "axios";
import { createUrl, getConfig } from "../utils/utils";
import { useEffect, useState } from "react";
import AddressRender from "../Screens/AddressRender";

function address() {
  const url = createUrl("/address/" + sessionStorage.getItem("userName"));
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    loadAddress();
  }, []);

  const loadAddress = () => {
    axios
      .get(url, config)
      .then((res) => {
        const data = res.data;
        setAddresses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h5>add address</h5>
        <hr></hr>
      </div>
      <div className="container" style={{ display: "flex" }}>
        {addresses.map((address) => {
          return <AddressRender address={address} />;
        })}
      </div>
    </>
  );
}

export default address;
