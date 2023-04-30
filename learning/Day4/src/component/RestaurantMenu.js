import { Params, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9762&lng=77.6033&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING
const RestaurantMenu = () => {
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9762&lng=77.6033&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    console.log(json.data);
  }

  return (
    <div>
      <div>id:{params.resId}</div>
    </div>
  );
};
export default RestaurantMenu;
