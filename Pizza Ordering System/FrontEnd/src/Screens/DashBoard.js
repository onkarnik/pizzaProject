import Card from "./Card";
import Cart from "./Cart";
import './styles/Homepage.css'



function DashBoard() {
  return (
    <>
      <div className="kenburns-top" body style={{ 
        backgroundImage: "url('./Data/bg1.jpg')",
        height:"100%", 
        width:"100%"
        }}>
        <center style={{marginTop:"18px" , width:"100%" , height:"100%"}}>
         <h1 className="tracking-in-contract-bck-bottom">HomePage</h1>
        </center>
      </div>
    </>
  );
}

export default DashBoard;
