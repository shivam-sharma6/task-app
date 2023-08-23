import React, { useState, useEffect } from "react";
import * as allApi from "../services/allApi.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const WorldMap = () => {
  const [mapData, setMapData] = useState([]);
  const [activeCovid, setActiveCovid] = useState(null);

  const fetchAll = async () => {
    const res = await allApi.getAll();
    console.log("res", res);
  };
  const fetchCountry = async () => {
    const res = await allApi.getcountries();
    console.log("countries", setMapData(res));
  };

  useEffect(() => {
    fetchAll();
    fetchCountry();
  }, []);

  console.log("mapData", mapData);
  return (
    <MapContainer center={[30.734667767359355, 76.74861887643905]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {mapData.map((markerPoint) => {
        return (
          <Marker
            key={markerPoint.countryInfo._id}
            position={[
              markerPoint.countryInfo.lat,
              markerPoint.countryInfo.long,
            ]}
            eventHandlers={{
              click: () => {
                setActiveCovid(markerPoint);
              },
            }}
          />
        );
      })}
      {activeCovid && (
        <Popup
          position={[activeCovid.countryInfo.lat, activeCovid.countryInfo.long]}
          onClose={() => {
            setActiveCovid(null);
          }}
        >
          <div>
            <h1>{activeCovid.country}</h1>
            <p>cases: {activeCovid.cases}</p>
            <p>today Cases (1 day*): {activeCovid.todayCases}</p>
            <p>Cases per 1 million people: {activeCovid.casesPerOneMillion}</p>
            <p>Deaths: {activeCovid.deaths}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
};

export default WorldMap;
