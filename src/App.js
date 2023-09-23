import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaceData } from './api';

function App() {
  const [place, setPlace] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [ratting, setRatting] = useState("");
  const [loader, setloader] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, [])
  useEffect(() => {
    const filteredPlace = place&&place.filter((place) => Number(place.rating) > ratting);
    console.log(filteredPlace)
    setFilteredPlaces(filteredPlace);
  }, [place, ratting])
  useEffect(() => {
    setloader(true);
    bounds && getPlaceData(type, bounds.ne, bounds.sw).then(data => {
      setPlace(data);
      setloader(false);
      setFilteredPlaces([]);
    })
  }, [type, bounds, coordinates])

  return (
    <div className="App">
      <Header setCoordinates={setCoordinates} />
      <div id="midPart">
        <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces&&filteredPlaces.length ? filteredPlaces : place} />
        <List places={filteredPlaces&&filteredPlaces.length ? filteredPlaces : place} type={type} setType={setType} ratting={ratting} setRatting={setRatting} loader={loader}/>
        {/* <Map2 setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={place}/> */}
      </div>
    </div>
  );
}

export default App;
