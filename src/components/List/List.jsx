import React from "react";
import "./ListStyle.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Loader from "../Loder/Loader";

export default function List({
  places,
  type,
  setType,
  ratting,
  setRatting,
  loader,
}) {
  // console.log(places);

  return (
    <div className="ListItems">
      <div className="top">
        <h1>Welcome To SpinoTech Tourism</h1>
        <div className="inputs">
          <form action="">
            <label>Type</label>
            <select
              name=""
              id=""
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="hotels">Hotels</option>
              <option value="restaurants">Restaurants</option>
              <option value="attractions">Attractions</option>
            </select>
          </form>
          <form action="">
            <label>Ratting</label>
            <select
              name=""
              id=""
              value={ratting}
              onChange={(e) => {
                setRatting(e.target.value);
              }}
            >
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
          </form>
        </div>
      </div>
      <div className="buttom">
        {loader ? (
          <Loader/>
        ) : (
          places &&
          places.map((e, i) => {
            return <PlaceDetails id={i} details={e} />;
          })
        )}
      </div>
    </div>
  );
}
