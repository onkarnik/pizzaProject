import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { createUrl } from "../utils/utils";


function Login(props) {

  const [userName,setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [message, setmessage] = useState("");
  const history = useHistory();
  const url = createUrl('/authenticate')
  const jwtToken = "Bearer "
  const postData = {
    userName,
    userPassword
  }


  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("");
      }, 3000);
    }
  }, [message]);

  const SignIn = ()=>{

    axios.post(url,postData)
    .then(response =>{
      sessionStorage.setItem("isLoggedIn",true)
      sessionStorage.setItem("userName",userName)
      sessionStorage.setItem("jwtToken",jwtToken+response.data.jwtToken)
      sessionStorage.setItem("role",response.data.user.roles[0].roleName)
      history.push(props.path)
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <>
      <br />
      <center>
        <table className="table table-bordered table-hover loginTable">
          <tbody>
            <tr>
              <td>User Name</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter UserName"
                  value={userName}
                  name="username"
                  onChange={(e)=>{
                    setUserName(e.target.value)
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={userPassword}
                  name="password"
                  onChange={(e)=>{
                    setUserPassword(e.target.value)
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={"2"}>
                <button onClick={SignIn} className="btn btn-primary">
                  Login In
                </button>
                <hr></hr>
                {message}
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );
}

export default Login;
