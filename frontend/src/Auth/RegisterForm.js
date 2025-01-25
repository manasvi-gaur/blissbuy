import { Button, Grid, TextField, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/auth.api";
import GradientCircularProgress from "../components/Gradient Spinner/Spinner";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [register, { isSuccess, isError, error, isLoading }] =
    useRegisterMutation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    register(userData);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess]);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GradientCircularProgress/>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="bg-[#9155FD] w-full"
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0 ", bgcolor: "#9155FD" }}
              >
                <Typography variant="h6" color="inherit">
                  Register
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      )}

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            If you already have an account?
          </Typography>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
