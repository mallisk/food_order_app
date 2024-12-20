import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
const Header = () =>{
    const [btnName, setBtnName] = useState("Login")
    return(
     <div className="header">
       <div className="logo-container">
         <img className="logo" src ={IMG_CDN_URL} />
         {/* <img className="logo" src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All" /> */}
       </div>
       <div className="nav-items">
           <ul>
             <li>Home </li>
             <li>About us</li>
             <li>contact us</li>
             <li>cart</li>
              <li> 
             <button className="login" onClick={()=>{ btnName == "Login" ?  setBtnName("Logout") : setBtnName("Login") }}> {btnName}</button>
             </li> 
           </ul>
       </div>
     </div>
    )
 }

 export default Header;
 