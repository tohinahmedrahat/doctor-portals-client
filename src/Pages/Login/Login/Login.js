import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import limg from "../../../images/login.png";
import { Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navigtaion from "../../Shared/Navigation/Navigtaion";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, singInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogin = { ...loginData };
    newLogin[field] = value;
    setLoginData(newLogin);
  };
  const LoginFrom = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
    alert("login");
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
            <form onSubmit={LoginFrom}>
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
                Login
              </Button>
              <Button
                onClick={singInWithGoogle}
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Login With Google
              </Button>
              <NavLink to="/regester">
                <Button variant="text">New User?Please Regester</Button>
              </NavLink>
            </form>
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

export default Login;
