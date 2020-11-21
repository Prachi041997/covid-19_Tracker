import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/prachi-04/ckf0y035z1j1x19pa91iootsm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJhY2hpLTA0IiwiYSI6ImNrZjB2YzY5ZjBtcTgyeHBoZWV4a3loOXcifQ.EEPxEF6qpOMYq9sBVnA-VA"
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
// mapbox://styles/prachi-04/ckf0vh3ex1gl21amgu89i3uwl//

// https://api.mapbox.com/styles/v1/{prachi04}/ckf0xaitg246219o4oiscapfv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJhY2hpLTA0IiwiYSI6ImNrZjB2ZmE5dTBtdDcycXBoOWdpcWEyanAifQ.oWsxfolK-VFFXIP3VNISuw
// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'


// mapbox://styles/prachi-04/ckf0xaitg246219o4oiscapfv