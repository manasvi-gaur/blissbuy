import { Button, Grid, TextField, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/auth.api";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import {
  setUserIdToLocalStorage,
  setTokenToLocalStorage,
} from "../Utils/helper/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginApi, { isLoading, isSuccess, isError, error, data }] =
    useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    loginApi(userData);
  };

  useEffect(() => {
    if (isSuccess) {
      const { userId, jwt } = data;
      setUserIdToLocalStorage(userId);
      setTokenToLocalStorage(jwt);
      dispatch(login({ isLogged: true, userId, jwt }));
      navigate("/");
    }
    if (isError) {
      console.log(error);
    }
  }, [isSuccess, isError, data, dispatch, navigate, isLoading]);

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
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
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
                  Login
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      )}

      <div className="flex justify-center flex-col items-center">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="py-3 flex items-center">
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              If you don't have an account?
            </Typography>
            <Button
              onClick={() => navigate("/register")}
              className="ml-5"
              size="small"
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
