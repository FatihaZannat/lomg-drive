import React, { useState } from "react";
import { useParams } from "react-router";
import {Grid } from "@material-ui/core";
import fakeData from "../fakeData/fakeData";
import Map from "./Map";

const Destination = () => {
  const { title } = useParams();
  const vehicles = fakeData.find((vehicle) => vehicle.title === title);
  console.log(fakeData);
  const [userLocation, setUserLocation] = useState({
    isVaid: false,
    startLocation: "",
    endLocation: "",
  });

  const handleLocation = (e) => {
    let destination = true;
    if (e.target.name === "startLocation" && e.target.name === "endLocation") {
      destination = e.target.value;
    }
    if (destination) {
      const newLocation = { ...userLocation };
      newLocation[e.target.name] = e.target.value;
      newLocation.isVaid = true;
      setUserLocation(newLocation);
      console.log(newLocation);
    }
  };

  return (
    <Grid container style={{ display: "flex" }}>
      <Grid item xs={8} lg={5}>
        <h3>
          Thank you for choosing{" "}
          <span style={{ color: "lawngreen" }}> {title}</span> on your way.
        </h3>
        <img
          style={{ width: "70%", position: "relative", borderRadius: "5px" }}
          src={fakeData.photo}
          alt=""
        />
        <br />
        {userLocation.isVaid &&
          userLocation.startLocation !== "" &&
          userLocation.endLocation !== "" && (
            <div>
              {" "}
              <p style={{ color: "lawngreen", fontWeight: "20px" }}>
                Thank you for choosing from {userLocation.startLocation} to{" "}
                {userLocation.endLocation} . Your rider will contact you in
                seconds !
              </p>{" "}
            </div>
          )}

        <label for="start">
          <input
            type="text"
            onBlur={handleLocation}
            name="startLocation"
            id="start"
            placeholder="your starting point"
            required
          />
        </label>
        <br />
        <label for="end">
          <input
            type="text"
            onBlur={handleLocation}
            name="endLocation"
            id="end"
            placeholder="your destination"
            required
          />
        </label>
        <input type="submit" />
      </Grid>
      <Grid item xs={8} lg={7}>
        <Map></Map>
      </Grid>
    </Grid>
  );
};

export default Destination;
