import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Container, Typography } from "@material-ui/core";
import { Box, Grid, IconButton } from "@mui/material";
import FileBase from "react-file-base64";
import Input from "../Auth/Input";
import { updatedUserDetails } from "../../actions/auth";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
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
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const profileData = JSON.parse(localStorage.getItem("profile"));
  console.log(profileData._id);

  const [formData, setFormData] = useState({
    firstName: profileData.result.firstName,
    lastName: profileData.result.lastName,
    email: profileData.result.email,
    password: "",
    confirmPassword: "",
    selectedFile: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updatedUserDetails(profileData._id, formData));
    switchMode();
  };

  const handleImageUpload = () => {
    console.log("uploaded");
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPass) => !prevShowPass);

  const switchMode = () => {
    setEditMode((prevIsSignup) => !prevIsSignup);
  };

  return (
    <Container component="main" maxWidth="xs">
      {editMode ? (
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Edit Profile.
          </Typography>

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
              </>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#E1B00A", color: "#FFFFFF" }}
              className={classes.submit}
            >
              Save Changes
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </form>
        </div>
      ) : (
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            {profileData.result.firstName} {profileData.result.lastName}
          </Typography>
          <Box sx={{ mb: 5, mt: 5 }}>
            <Avatar
              alt={profileData.result.firstName}
              src="/static/images/avatar/2.jpg"
              sx={{ width: 150, height: 150 }}
            />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography component="h2" variant="h6" fontWeight="bold">
                  Email:
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  {profileData.result.email}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography component="h2" variant="h6" fontWeight="bold">
                  First Name:
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  {profileData.result.firstName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography component="h2" variant="h6" fontWeight="bold">
                  Last Name:
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  {profileData.result.lastName}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#E1B00A", color: "#FFFFFF" }}
            className={classes.submit}
            onClick={switchMode}
          >
            Edit Profile
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ProfilePage;
