import Search from "./Search";
import Card from "./Card";
import { mockData } from "../utils/mockData";

const Body = () => {
    return (
      <div>
        <Search />
        <div className="card-flex">
          {mockData.map((restaurant) => (
            <Card key={restaurant.data.id} data={restaurant} />
          ))}
        </div>
      </div>
    );
  };
export default Body;  