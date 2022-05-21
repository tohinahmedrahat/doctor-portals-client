import { Alert, Container, Grid } from "@mui/material";
import React, {useState} from "react";
import Booking from "../Booking/Booking";

const bookings = [
  { id: 1, name: "Teeth Orthodonics", time: "08.00 AM - 09.00 AM", space: 10 },
  {
    id: 2,
    name: "Cosmitc Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "07.00 AM - 08.00 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
];

const AvalivalAppointment = ({ date }) => {
  const [bookingSuccess,setBookingSuccess] = useState(false)
  return (
    <Container>
      <h1 style={{color:'#5CE9CF'}}>Avalival Appointment {date.toDateString()}</h1>
      {bookingSuccess && (
              <Alert severity="success">
                Booking Successfully
              </Alert>
            )}
      <Grid container spacing={2}>
          {bookings.map(booking => <Booking key={booking.id} date={date} setBookingSuccess={setBookingSuccess} booking={booking}></Booking>)}
        </Grid>
    </Container>
  );
};

export default AvalivalAppointment;
