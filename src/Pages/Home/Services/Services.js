import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import Whitening from "../../../images/whitening.png";
import Typography from '@mui/material/Typography';

const services = [
  {
    id: 1,
    img: fluoride,
    title: "Fluoride Treatment",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  },
  {
    id: 2,
    img: cavity,
    title: "Cavity Filling",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  },
  {
    id: 3,
    img: Whitening,
    title: "Teeth Whitening",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography variant="h6" sx={{fontWeight:700, m:2, color:'success.main'}} component="div">
        OUR SERVICE
      </Typography>
      <Typography variant="h4" sx={{fontWeight:700, m:2,}} component="div">
        Service We Provide
      </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
