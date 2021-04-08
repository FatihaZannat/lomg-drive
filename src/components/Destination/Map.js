import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const position = {
  lat: 23.7461,
  lng: 90.3742,
};

function Map() {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBME9WMmSYz_2iXjSI_OKGCs0lMaIlyg5I">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={6}>
        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
