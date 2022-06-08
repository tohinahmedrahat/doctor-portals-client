import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import limg from "../../../images/login.png";
import { Alert, Box, Button, CircularProgress, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navigtaion from "../../Shared/Navigation/Navigtaion";

const Regester = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate()
  const { RegisterUser, isLoading, user, error } = useAuth();
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogin = { ...loginData };
    newLogin[field] = value;
    console.log(newLogin);
    setLoginData(newLogin);
  };
  const LoginFrom = (e) => {
    if (loginData.password.length < 6) {
      alert("password must be 8 charecter");
      return;
    }
    e.preventDefault();
    RegisterUser(loginData.email, loginData.password, loginData.name, navigate);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigtaion></Navigtaion>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            {!isLoading && (
              <form onSubmit={LoginFrom}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  onChange={handelOnChange}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  onChange={handelOnChange}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  onChange={handelOnChange}
                  id="standard-basic"
                  label="Your Password"
                  name="password"
                  type="password"
                  variant="standard"
                />
                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="contained"
                >
                  Regester
                </Button>
                <NavLink to="/login">
                  <Button variant="text">Already Regester?Please Login</Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">
                You have Regester successfully
              </Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={limg}
              alt="login img"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Regester;
