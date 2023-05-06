import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Alert } from "@mui/material";
import useStyles from "./styles";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [emailForReset, setEmailForReset] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPass) => !prevShowPass);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        return setError("Passwords do not match");
      }
      dispatch(signUp(formData));
      switchMode();
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  const handleResetPassword = () => {
    // Code to handle resetting password
    console.log("Resetting password for", emailForReset);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                {error && (
                  <Alert
                    onClose={() => {
                      setError("");
                    }}
                    severity="warning"
                  >
                    {error}
                  </Alert>
                )}
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          {!isSignup && (
            <Grid item xs={12}>
              <Button
                variant="text"
                color="primary"
                onClick={() => setEmailForReset(formData.email)}
              >
                Reset Password
              </Button>
            </Grid>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Dont have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
