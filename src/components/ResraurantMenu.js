import { useEffect, useState } from "react";
import { MENU_DATA } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const ResraurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex,setShowIndex] = useState(1)

  useEffect(() => {
    setResInfo(MENU_DATA);
  }, []);

  const restaurant = resInfo?.data;
  const restoCategaries = restaurant?.menu?.widgets || [];

// console.log("details-----",restoCategaries);
//  const {name,cuisines,costForTwoMsg,totalRatingsString} = resInfo?.data;
  return resInfo === null ? (
    <Shimmer />
  ) : ( 
    <div className="container text-center">
      <h1 className="font-bold text-2xl">{restaurant.name}</h1>
      <p className="mt-1 text-sm text-gray-600">{restaurant.cuisines.join(" • ")} • {restaurant.costForTwoMsg}</p>
      <p className="mb-4 text-sm font-semibold">★ {restaurant.avgRatingString} ({restaurant.totalRatingsString}) • {restaurant.sla.slaString}</p>

      {restoCategaries.map((catagory,index)=>{
        return(
          <RestaurantCategory 
          key={catagory.name}
          data={catagory}
          itemsById={restaurant.menu.items}
          showItems= { showIndex === index ? true: false}
          index ={index}
          setShowIndex = {setShowIndex}
          />
        )
      })}
    </div>
  );
};

export default ResraurantMenu;
