import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "./App.css";
import CarAnimation from "./CarAnimation";

const dataStory = [
  { lat: 51.115359, lng: 17.12747 },
  {
    lat: 51.117676,
    lng: 17.124939,
  },
  {
    lat: 51.1194,
    lng: 17.121892,
  },
  { lat: 51.118996, lng: 17.116657 },
  { lat: 51.116625, lng: 17.114039 },
  { lat: 51.115144, lng: 17.112279 },
  { lat: 51.112234, lng: 17.112923 },

  { lat: 51.110887, lng: 17.115497 },

  { lat: 51.110052, lng: 17.119402 },
  { lat: 51.109701, lng: 17.122921 },

  { lat: 51.111716, lng: 17.125196 },
];
let cursor = 0;
function App() {
  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    setCurrentTrack(dataStory[cursor]);

    const interval = setInterval(() => {
      if (cursor === dataStory.length - 1) {
        cursor = 0;
        setCurrentTrack(dataStory[cursor]);
        return;
      }

      cursor += 1;
      setCurrentTrack(dataStory[cursor]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <MapContainer
      center={[51.115359, 17.12747]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={[currentTrack]} />
      <CarAnimation data={currentTrack ?? {}} />
    </MapContainer>
  );
}

export default App;
