import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const RestaurantCategory = (props)=>{
    const {data, itemsById, showItems, setShowIndex, index}= props;
    const handleClick = ()=>{
        //setShowItems(!showItems)
        props.setShowIndex(index)
    }

    return (

        <div className="w-6/12 m-auto bg-gray-50 align-middle p-4 shadow mb-2">
         <div className=" flex justify-between cursor-pointer"  onClick={handleClick}>
            <span className="font-bold text-lg">{data.name} ({data.entities.length})</span>
            <span>⬇️</span>
        </div>
          {showItems && <CategoryItem data={data.entities} itemsById={itemsById} />}
        </div>
    )

}

export default RestaurantCategory;
