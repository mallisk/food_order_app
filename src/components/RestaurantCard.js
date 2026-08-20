import { getFoodImageUrl } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {res} = props
     return (
       <div className="m-4 w-[250px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 hover:shadow-md" >     
         <img
           className="h-36 w-full object-cover"
           src={getFoodImageUrl(res.cloudinaryImageId)}
           alt={`${res.name} food`}
         />
         <div className="p-4">
            <h3 className="truncate font-bold text-lg">{res.name}</h3>
            <p className="mt-1 h-10 text-sm text-gray-600">{res.cuisines?.slice(0, 3).join(" • ")}</p>
            <p className="mt-2 text-sm font-semibold">★ {res.avgRating} <span className="text-gray-400">•</span> {res.slaString || `${res.deliveryTime} mins`}</p>
            <p className="mt-1 text-sm text-gray-600">{res.costForTwoString}</p>
          </div>
        </div>
     );
   }


  export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
  }
   export default RestaurantCard;
