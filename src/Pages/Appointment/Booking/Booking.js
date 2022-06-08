import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking,date,setBookingSuccess }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleOpenBooking = () => setOpenBooking(true);
  const handleCloseBooking = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5, textAlign:'center' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: "#16E3BE" }}
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {price} $
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} Space Avalibale
          </Typography>
          <Button
            onClick={handleOpenBooking}
            style={{ background: "linear-gradient(180deg,#7BF5DF,#08DCB6)" }}
            variant="contained"
          >
            BOOKING AVALABILE
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
        handleCloseBooking={handleCloseBooking}
      ></BookingModal>
    </>
  );
};

export default Booking;
