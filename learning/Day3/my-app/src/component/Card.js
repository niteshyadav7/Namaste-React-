import { CLOUD_URL } from "../utils/constants";


const Card = ({ data }) => {
    return (
      <div className="card-container">
        <div className="card-img">
          <img
            src={CLOUD_URL + data.data.cloudinaryImageId}
            width={250}
            alt="images"
          />
        </div>
        <div className="card-name">{data.data.name}</div>
        <div className="card-items">{data.data.cuisines.join(", ")}</div>
        <div className="card-rating">{data.data.avgRating}</div>
      </div>
    );
  };
  export default Card;