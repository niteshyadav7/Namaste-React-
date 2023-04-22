import { CDN_URL } from "../utils/constants";


const ResContainer = ({ data }) => {
    return (
      <div className="container">
        <div className="cards">
          <img
            className="card-logo"
            src={CDN_URL + data.data.cloudinaryImageId}
            alt="images"
          />
          <h4>{data.data.name}</h4>
          <h4>{data.data.cuisines.join(", ")}</h4>
          <h4>{data.data.costForTwoString}</h4>
          <h4>{data.data.avgRating}</h4>
          <h4>{data.data.slaString}</h4>
        </div>
      </div>
    );
  };
  export default ResContainer;