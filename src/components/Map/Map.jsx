import React from "react";
import GoogleMapReact  from "google-map-react";
import { Marker } from "@react-google-maps/api";
// import GoogleMap from 'google-maps-react-markers'
import "./MapStyle.css";

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
}) {
  return (
    <div className="mapArea">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA7gsYT_G2Hq0cLHKEpHxDapbcjCtIzdZA" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          // console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({
            ne: e.marginBounds.ne,
            nw: e.marginBounds.nw,
            se: e.marginBounds.se,
            sw: e.marginBounds.sw,
          });
        }}
        onChlidClick={""}
      >
        {places.map((place, i) => {
          console.log(Number(place.latitude), Number(place.longitude));
          return (
            <Marker
              position={{
                lat: Number(place.latitude),
                lng: Number(place.longitude),
              }}
              key={String(place.latitude) + String(place.longitude)}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
