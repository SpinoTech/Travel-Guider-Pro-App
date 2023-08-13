import React, { useState } from "react";
// import {FcSearch} from "react-icons/fc";
import { Autocomplete } from "@react-google-maps/api";
import"./HeaderStyle.css"

export default function Header({setCoordinates}) {
  const[autocomplete,setAutocomplete]=useState(null)
  const onLoad = (autocomplete) => setAutocomplete(autocomplete);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <div className="header">
      <div id="name">
        <img src="https://static.vecteezy.com/system/resources/previews/012/101/300/original/travel-traveling-logo-tour-and-travel-logo-design-free-vector.jpg" alt="Logo" id="logo" srcset="" />
      </div>
      <div id="search">
        <h2>Explore More Places Here</h2>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input type="text" />
        </Autocomplete>
      </div>
    </div>
  );
}
