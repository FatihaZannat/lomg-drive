import React from "react";
import Transport from "./../Transports/Transport";
import { Grid } from "@material-ui/core";
import fakeData from "./../fakeData/fakeData";

const transports = fakeData;
const Home = () => {
  return (
    <div>
      <Grid container spacing={2} style={{ padding: "24px" }}>
        {transports.map((transport) => (
          <Grid item xs={12} md={6} lg={3}>
            <Transport key={transport.title} transport={transport}></Transport>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
