import { useState,useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login")
    const isOnline = useOnlineStatus();
    const { userName, setUserName } = useContext(UserContext);
    console.log("user", userName);

     const cartItemCount = useSelector((store) =>
       store.cart.items.reduce((total, item) => total + (item.quantity || 1), 0)
     );
    return(
     <div className="flex justify-between bg-pink-100 shadow-lg m-2 p-2 sm:bg-yellow-100 md:bg-green-100 lg:bg-blue-100">
       <div className="logo-container //#endregion">
         <img className="w-24 h-24" src ={IMG_CDN_URL} />
         {/* <img className="logo" src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All" /> */}
       </div>
       <div className=" nav-items flex items-center">
           <ul className="flex">
            <li>online status: {isOnline ? "checked in" : "Offline"}</li>
             <li ><Link to={"/"}>Home</Link> </li>
             <li> <Link to={'/about'}>About us</Link></li>
             <li> <Link to={"/contact"}>contact us</Link></li>
                <li> <Link to={"/grocery"}>Grocery</Link></li>
                <li> <Link to={"/cart"}>Cart ({cartItemCount})</Link></li>
              <li> 
             <button className={`${btnName === "Login" ? "bg-purple-500" : "bg-red-500"} text-white px-4 py-2 rounded-md`} onClick={()=>{ btnName == "Login" ?  setBtnName("Logout") : setBtnName("Login") }}> {btnName}</button>
             </li> 
              <li className="p-10 font-bold text-xl">{userName}</li>
           </ul>
       </div>
     </div>
    )
 }

 export default Header;
 
