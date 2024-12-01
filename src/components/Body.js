import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  //   const { restaurantList } = props;
  const [res, setRes] = useState([]);
  const [filterres, setFilterRes] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    setRes(restaurantList);
    setFilterRes(restaurantList);
  }, []);

  const fetchData = async () => {
    console.log("before call");
    const data = await fetch("https://testeffwe.free.beeceptor.com/");
    const json = data.json();
    console.log("data", json);
  };
  console.log("Body rendered");
  const getTophandler = () => {
    let data = restaurantList.filter((res) => {
      console.log("ressss", res.data.avgRating);
      return Number(res.data.avgRating) >= 4;
    });
    setShowAll(true);
    setFilterRes(data);
  };
  const getClearHandler = () => {
    setFilterRes(restaurantList);
    setShowAll(false);
    console.log(showAll);
  };
  const searchHandler = (searchText) => {
    const restlist = restaurantList.filter((res) => {
      return res?.data?.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    console.log("eee", searchText, restlist);
    setFilterRes(restlist);
  };
  // logic to search the resturentlist by charecter
  useEffect(() => {
    const dt = restaurantList.filter((res) => {
      console.log("searchText 1", res.data.name);
      console.log("searchText 2", searchText);
      return res.data.name.startsWith(searchText);
    });
    if (dt.length != 0) {
      setFilterRes(dt);
    } else {
      setRes(restaurantList);
    }
  }, [searchText]);

  console.log("restaurantList", res);
  console.log("searchText", searchText);
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => searchHandler(searchText)}>search</button>
        </div>
        <button className="filter-btn" onClick={getTophandler}>
          Top Rated restaurant
        </button>
          <button className="filter-btn" onClick={getClearHandler}>
            Clear
          </button>
        
      </div>

      <div className="res-container">
        {filterres?.map((res, index) => (
          <div key={index}>
            <RestaurantCard res={res.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
