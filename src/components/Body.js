import RestaurantCard from "./RestaurantCard";

const Body = (props) =>{
    const {restaurantList} = props;
    console.log("restaurantList",restaurantList)
    return(
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
           {restaurantList?.map((res,index)=>(
            <div key={index}>
                <RestaurantCard res= {res.data}/>
            </div>
          ))}
  
      </div>
    </div>
    )
  }
  
  export default Body;