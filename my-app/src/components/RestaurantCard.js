// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//       restaurantList[0].data?.cloudinaryImageId} 
//       />
//       <h2>{restaurantList[0].data?.name}</h2>
//       <h3>{restaurantList[0].data?.cuisines.join(", ")}</h3>
//       <h4>{restaurantList[0].data.lastMileTravelString}</h4> */}

//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//         alt="imggg"
//       />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.data.lastMileTravelString}</h4>
//     </div>
//   );
// };

// const RestaurantCard = ({restaurant}) => {
//   const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data;
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//         alt="imggg"
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{lastMileTravelString}</h4>
//     </div>
//   );
// };

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data;
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="imggg"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    );
};

export default RestaurantCard;