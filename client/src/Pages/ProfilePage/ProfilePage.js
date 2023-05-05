import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Container, Typography } from "@material-ui/core";
import { Grid, IconButton } from "@mui/material";
import Input from "../Auth/Input";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit form data to API or backend
    console.log(formData);
  };

  const handleImageUpload = () => {
    console.log("uploaded");
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPass) => !prevShowPass);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit Profile.
        </Typography>
        <IconButton onClick={handleImageUpload} sx={{ p: 0 }}>
          <Avatar alt="Dickens Kinoti" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <>
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
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            </>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save Changes
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ProfilePage;
