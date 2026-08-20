import React, {lazy, Suspense,useContext, useState} from "react";
import ReactDOM  from "react-dom/client";
import "../index.css"
import restaurantList, {IMG_CDN_URL } from "./utils/constants";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResraurantMenu from "./components/ResraurantMenu";
import Cart from "./components/cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



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


const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () =>{
  const [userName, setUserName] = useState("Malli");

  console.log("user", userName);
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
          <Header /> 
          <Outlet />
      </div>
    </UserContext.Provider>
  )
}
const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<AppLayout />,
  children:[
    {
      path:"/",
      element:<Body />,
    },
    {
      path:"/about",
      element:<About />,
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/restaurants/:resId",  // dynamic id is coming here
      element:<ResraurantMenu/>,
    },
    {
      path:"/cart",  // dynamic id is coming here
      element:<Cart/>,
    },
     {
      path:"/grocery",  // dynamic id is coming here
      element:<Suspense fallback="Loading...">
        <Grocery/>
      </Suspense>,
    }
  ],
  errorElement:<Error />
},

// {
//   path:"/*",
//   element:< 
// }
// {
//   path:"/contact",
//   element:<Contact />

// }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);

