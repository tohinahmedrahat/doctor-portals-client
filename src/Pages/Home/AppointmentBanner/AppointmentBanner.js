import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 175,
  backgroundColor: "rgba(45,58,74,0.8)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img
            src={doctor}
            style={{ width: 400, marginTop: -110 }}
            alt="doctor.png"
          />
        </Grid>
        <Grid sx={{ display: "flex", textAlign: "left",alignItems:"center" }} item xs={12} md={7}>
          <Box>
            <Typography variant="h6" style={{color:"#37BCBA",marginBottom:"10px"}} gutterBottom component="div">
              Appointment
            </Typography>
            <Typography variant="h4" sx={{my:3,color:"white"}} style={{fontWeight:500}} gutterBottom component="div">
              Make An Appointment <br /> Today
            </Typography>
            <Typography sx={{mb:1}} variant="body2" style={{fontWeight:300,color:"#C9C8CB"}} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
