import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleCloseBooking, booking, date,setBookingSuccess }) => {
  const { name, time,price } = booking;
  const { user } = useAuth();
  const intialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(intialInfo);

  const handelBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookinInf = { ...bookingInfo };
    newBookinInf[field] = value;
    setBookingInfo(newBookinInf);
  };
  const bookingSubmit = (e) => {
    e.preventDefault();
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      price:price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // send data to server
    fetch('http://localhost:5000/appointment',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setBookingSuccess(true)
        handleCloseBooking();
      }
    })
    
    
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleCloseBooking}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={bookingSubmit} style={{ textAlign: "center" }}>
            <TextField
              sx={{ width: "90%", m: 2 }}
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 2 }}
              id="outlined-size-small"
              name="patientName"
              onBlur={handelBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 2 }}
              id="outlined-size-small"
              name="email"
              onBlur={handelBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 2 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handelBlur}
              defaultValue="phone-number"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 2 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button
              type="submit"
              style={{ background: "linear-gradient(180deg,#7BF5DF,#08DCB6)" }}
              variant="contained"
            >
              Booking Appointment
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
