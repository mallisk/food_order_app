import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { getFoodImageUrl } from "../utils/constants";

const CategoryItem = (props) => {
  const dispatch = useDispatch();
  const items = props.data
    .map((itemReference) => props.itemsById[itemReference.id])
    .filter(Boolean);

  const handleClick = (item) => {
    dispatch(addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      isVeg: Boolean(item.isVeg),
      cloudinaryImageId: item.cloudinaryImageId,
    }));
  };

  return (
    <div>
      {items.map((item) => {
        return (
        <div key={item.id} className="flex items-start justify-between gap-4 border-b-2 border-gray-200 py-3 text-left">
          <div className="flex-1">
            <span className={item.isVeg ? "text-green-600" : "text-red-600"}>{item.isVeg ? "● Veg" : "● Non-veg"}</span>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="font-medium">₹{(item.price / 100).toFixed(0)}</p>
            <p className="text-sm text-gray-600">{item.attributes?.portionSize || "Single serving"}{item.isBestSeller ? " • Bestseller" : ""}</p>
          </div>
          <div className="relative">
            {item.cloudinaryImageId && <img className="h-20 w-24 rounded object-cover" src={getFoodImageUrl(item.cloudinaryImageId, 200)} alt={item.name} />}
            <button className="absolute -bottom-3 left-2 bg-purple-500 px-4 py-2 text-white rounded-md" onClick={() => handleClick(item)}>ADD</button>
          </div>
        </div>);
      })}
    </div>
  );
};

export default CategoryItem;
