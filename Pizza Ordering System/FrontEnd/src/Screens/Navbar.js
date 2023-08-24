
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import Auth from "../utils/NavigateToFromLogin"


function Navbar() {

  
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {SignIn,SignOut} = Auth(setIsLoggedIn)

  useEffect(()=>{
    if(sessionStorage.getItem("isLoggedIn")!=null && sessionStorage.getItem("isLoggedIn")=='true')
    setIsLoggedIn(true)
  },[])

  const ShowButton =()=>{
    if(isLoggedIn)
    {
      return  <button className='btn btn-danger' onClick={SignOut}>Log out</button>
    }
    else
    {
      return  <button className='btn btn-danger' onClick={SignIn}>Log In</button>
    }
 } 

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ExpressPizza
          </a>
          <div
            style={{
              display: "flex",
              marginRight: 50,
              justifyContent: "space-between",
            }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/pizza">
                  Order Now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Your cart
                </a>
              </li>
              <li className="nav-item">
              {isLoggedIn && ShowButton()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

{
  /* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          ExpressPizza
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
}
