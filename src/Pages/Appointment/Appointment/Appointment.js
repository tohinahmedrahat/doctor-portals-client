import React from "react";
import Navigtaion from "../../Shared/Navigation/Navigtaion";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvalivalAppointment from "../AvalivalAppointment/AvalivalAppointment";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigtaion></Navigtaion>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvalivalAppointment date={date}></AvalivalAppointment>
    </div>
  );
};

export default Appointment;
