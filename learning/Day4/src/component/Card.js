import { CLOUD_IMAGE_URL } from "../utils/constants";

const Card = ({ res }) => {
  return (
    <div className="card-item">
      <div className="card-img">
        <img src={CLOUD_IMAGE_URL + res.data.cloudinaryImageId} className="img" />
      </div>
      <div>{res.data.name}</div>
      <div>{res.data.cuisines.join(", ")}</div>
      <div>{res.data.avgRating}</div>
    </div>
  );
};
export default Card;
