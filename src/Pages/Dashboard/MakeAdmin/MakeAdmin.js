import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const {token} = useAuth();

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/user/admin", {
      method: "PUT",
      headers: {
        "authrozation":`bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setSuccess(true);
        }
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Make Admin</h1>
      <form onSubmit={submitForm}>
        <TextField
          onBlur={handelOnBlur}
          id="standard-basic"
          label="Your Email"
          name="email"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          MakeAdmin
        </Button>
      </form>
      {success && <Alert severity="success">Make admin successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
