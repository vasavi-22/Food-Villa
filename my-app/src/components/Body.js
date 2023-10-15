import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  const filtered = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filtered;
};

// no key(not acceptable) <<<<<<<<<<<<<<<<<<<<<< index key(use if there is nothing unique) <<<<<<<<<<<<<<<<<<<<< unique key(best practice)
const Body = () => {
  // TWO-WAY BINDING -- reading and writing(updating) at the same time

  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // to create a state variable
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // console.log(e.target.value)
            setSearchText(e.target.value);
            console.log(true, "trueeeeeeeee");
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // setSearchClicked((prevValue)=> !prevValue)
            // if(searchClicked === "false"){
            //     setSearchClicked("true");
            // }else{
            //     setSearchClicked("false");
            // }

            // need to filter the data
            // update the state - restaurants
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}

        {/*             using props -- properties          */}
        {/* {RestaurantCard(restaurantList[0])} samee */}
        {/* <RestaurantCard restaurant={restaurantList[0]}  hello="world"/>  hello is also a prop */}

        {/* <RestaurantCard restaurant={restaurantList[0]} />
        <RestaurantCard restaurant={restaurantList[1]} />
        <RestaurantCard restaurant={restaurantList[2]} /> */}

        {/* <RestaurantCard name={restaurantList[0].data.name} 
        cuisines={restaurantList[0].data.cuisines}/> */}
        {/* same */}

        {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} /> */}

        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
