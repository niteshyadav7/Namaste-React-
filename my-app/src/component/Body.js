import ResContainer from "./ResContainer";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";

function filterData(seachInput, restaurants) {
  const filteredData = restaurants.filter((restaurantsItem) =>
    restaurantsItem.data.name.includes(seachInput)
  );

  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [seachInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.375461&lng=79.457907&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  }

  const onSubmit2 = () => {
    const data = filterData(seachInput, restaurants);
    setRestaurants(data);
  };
  const clickedChanged = (e) => {
    setSearchInput(e.target.value);
  };

  const [ress, setRess] = useState(resList);

  const onSubmit = () => {
    const filtered = ress.filter((re) => re.data.avgRating > 3.8);
    // console.log(res);
    setRess(filtered);
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={seachInput}
          onChange={clickedChanged}
        />
        <button onClick={onSubmit2}>Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={onSubmit}>
          Top Rated restaurant
        </button>
      </div>
      <div className="flex-wrap">
        {restaurants.map((restaurant) => {
          return <ResContainer key={restaurant.data.id} data={restaurant} />;
        })}
      </div>
    </>
  );
};
export default Body;
