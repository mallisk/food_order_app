const RestaurantCard = (props) =>{
 
    const {res} = props
    console.log("restaurantList",res)
     return (
       <div className="res-card" >     
         <div>
                 <img className="res-logo" alt="res-img"/>
                    <h4>{res.name}</h4>
                    <h4>{res.cuisines?.join(",")}</h4>
                    <h4>{res.avgRating}</h4>
                    <h4>{res.deliveryTime}</h4>
          </div>
        </div>
     );
   }

   export default RestaurantCard;