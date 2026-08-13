import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //   const { restaurantList } = props;
  const [res, setRes] = useState([]);
  const [filterres, setFilterRes] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");

  // execute only once
  useEffect(() => {
    console.log("only one");
    fetchData();
    setRes(restaurantList);
    setFilterRes(restaurantList);
  }, []);
  
  // logic to search the resturentlist for each change on search field
  useEffect(() => {
    console.log("only if dependency");
    const dt = restaurantList.filter((res) => {
      return res.data.name.startsWith(searchText);
    });
    if (dt.length != 0) {
      setFilterRes(dt);
    } else {
      setRes(restaurantList);
    }
  }, [searchText]);

  // calls every time
  useEffect(() => {
    console.log("emppty dependency array");
  });

  const fetchData = async () => {
    // const data = await fetch("https://testeffwe.free.beeceptor.com/");
    //const json = data.json();
  };
 
  const getTophandler = () => {
    let data = restaurantList.filter((res) => {
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
    setFilterRes(restlist);
  };

  console.log("Body rendered");
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
            <Link key={res.data.id} to={"/restaurants/"+res.data.id}><RestaurantCard  res={res.data} /></Link>
        ))}
      </div>
    </div>
  );

};

export default Body;
