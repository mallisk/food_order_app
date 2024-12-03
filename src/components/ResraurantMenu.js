import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../../namaste-react-live/src/contants";
import { MENU_DATA } from "../utils/constants";
import Shimmer from "./Shimmer";
const ResraurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="
      );
      let re = await data.json();
      console.log(re);
    } catch {
      console.log("-----", MENU_DATA);
      setResInfo(MENU_DATA);
    }
  };
const {name,costForTwoMsg,totalRatingsString} = resInfo?.data
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <h1> {name}</h1> 
      <h2>Menu</h2>
      <ul>
        <li>biriyani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default ResraurantMenu;
