import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bannerbg = {
  background: `url(${bg})`,
  backgroundPosition: "center",
};

const verticalAlign = {
  height: 450,
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerbg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid sx={verticalAlign} item xs={6} md={6}>
          <Box style={{ textAlign: "left" }}>
            <Typography
              variant="h3"
              style={{ marginBottom: "10px" }}
              gutterBottom
              component="div"
            >
              Your New Smile <br />
              Start Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3 }}
              style={{ color: "gray", fontSize: "13px", fontWeight: 300 }}
              gutterBottom
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur.
            </Typography>
            <Button variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid sx={verticalAlign} item xs={6} md={6}>
          <img style={{ width: 350 }} src={chair} alt="chair" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
