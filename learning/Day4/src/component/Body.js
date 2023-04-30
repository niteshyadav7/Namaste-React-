import { useEffect, useState } from "react";
import { restaurantData } from "../utils/mockData";
import Card from "./Card";
import Shimmer from "./Shimmer";


function filter(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((rest) =>
    rest.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleClick = () => {
    // console.log("dsfg");
    const data = filter(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.375461&lng=79.457907&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json);
  }
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-input">
        <input
          className="search"
          placeholder="search"
          type="text"
          value={searchText}
          onChange={handleChange}
        />
        <button className="btn-search" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="card">
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant.data.id} res={restaurant} />
        ))}
      </div>
    </>
  );
};
export default Body;
