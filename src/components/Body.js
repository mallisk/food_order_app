import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = (props) => {
  const { restaurantList } = props;
  const [res, setRes] = useState(restaurantList);
  const [showAll, setShowAll] = useState(false);
  const getTophandler = () => {
    let data = restaurantList.filter((res) => {
      console.log("ressss", res.data.avgRating);
      return Number(res.data.avgRating) >= 4;
    });
    setShowAll(true)
    setRes(data);
  };
  const getClearHandler = () => {
   
    setRes(restaurantList);
    console.log(showAll)
  };
  console.log("restaurantList", restaurantList);
  return (
    <div className="body">
      {/* <div className="search"> search</div> */}
      <button className="filter-btn" onClick={getTophandler}>
        Top Rated restaurant
      </button>
      {showAll ? <button className="filter-btn" onClick={getClearHandler}> 
       Clear
      </button> : ""}
      <div className="res-container">
        {res?.map((res, index) => (
          <div key={index}>
            <RestaurantCard res={res.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
