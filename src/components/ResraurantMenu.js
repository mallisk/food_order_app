import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../../namaste-react-live/src/contants";
import { MENU_DATA } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const ResraurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  console.log("para",resId)
  const fetchMenu = async () => {
    try {
      let data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="
      );
      let re = await data.json();
      console.log("api response----",re);
    } catch {
      console.log("-----", MENU_DATA);
      setResInfo(MENU_DATA);
    }
  };


  useEffect(() => {
    fetchMenu();
  }, []);

  
//  const {name,cuisines,costForTwoMsg,totalRatingsString} = resInfo?.data;
  return resInfo === null ? (
    <Shimmer />
  ) : ( 
    <div className="menu-container m-4 p-4">
      <h1> {resInfo.name}</h1> 
      {/* <h3> {resInfo?.cuisines.join(", ")}</h3>  */}
      <h2>Menu</h2>
      <ul className="menu-list">
        <li className="menu-item">{MENU_DATA?.data?.name}</li>
        <li className="menu-item">{resInfo?.data?.cuisines?.join(", ")}</li>
        <li className="menu-item">{resInfo?.data?.costForTwoMsg}</li>
        <li className="menu-item">{resInfo?.data?.totalRatingsString}</li>
      </ul>
    </div>
  );
};

export default ResraurantMenu;
