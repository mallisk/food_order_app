import React from "react";
import ReactDOM  from "react-dom/client";
import "../index.css"
import restaurantList, {IMG_CDN_URL } from "./utils/constants";
import Header from "./components/Header";
import Body from "./components/Body";
 

//  Header
//    Logo
//    NavLink
//  Body 
//    Search
//    ResturentContainer
//      ResturentCard 
          // img
          // Name of Res, Star Rating, cuisine, delevery time
// footer
//   Copyright
//   Link
//   Address
//   Contact

const styleCard = {
  backgroundColor:"#f0f0f0",
}






const AppLayout = () =>{
  return (
    <div className="App">
        {/*  
         Header
        Body 
         footer */}
         <Header /> 
         <Body restaurantList ={restaurantList}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)

