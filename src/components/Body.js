import { useEffect, useState,useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import restaurantList from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  //   const { restaurantList } = props;
  const [res, setRes] = useState([]);
  const [filterres, setFilterRes] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { userName, setUserName } = useContext(UserContext);
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
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
    <div className="body body-container">
      <div className="search-container flex justify-content items-center m-4 p-4">
          <div className="flex justify-content items-center m-4 p-4">
            <input 
              className="border border-solid border-black"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="search-btn bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => searchHandler(searchText)}>
              search
            </button>
          </div>
          <button className="filter-btn bg-green-500 text-white px-4 py-2 rounded-md" onClick={getTophandler}>
            Top Rated restaurant
          </button>
          <button className="filter-btn bg-red-500 text-white px-4 py-2 rounded-md" onClick={getClearHandler}>
            Clear
          </button>
          <input 
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          />
      </div>

      <div className="flex flex-wrap justify-center">
        {filterres?.map((res, index) => (
            res.data.promoted ? (
            <Link key={res.data.id} to={"/restaurants/"+res.data.id}><PromotedRestaurantCard  res={res.data} /></Link>  
            ):
            (
            <Link key={res.data.id} to={"/restaurants/"+res.data.id}><RestaurantCard  res={res.data} /></Link>
        )  ))}
      </div>
    </div>
  );

};

export default Body;
