import ResContainer from "./ResContainer";
import { resList } from "../utils/mockData";
import { useState } from "react";

function filterData(seachInput, restaurants) {
  const filteredData = restaurants.filter((restaurantsItem) =>
    restaurantsItem.data.name.includes(seachInput)
  );
  console.log(filterData);
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  const [seachInput, setSearchInput] = useState("");

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
