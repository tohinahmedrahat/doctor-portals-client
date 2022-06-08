import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment,setAppointment] = useState({})
    // load data to server
    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    return (
        <div>
            <h1>Paymet Id : {appointment._id} </h1>
            <h2>PatientName: {appointment.patientName}</h2>
            <h3>ServiceName: {appointment.serviceName} </h3>
            <h4>Price: ${appointment.price} </h4>
        </div>
    );
};

export default Payment;