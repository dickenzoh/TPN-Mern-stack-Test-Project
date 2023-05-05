import {
  Alert,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const UserList = ({ users }) => {
  console.log(users);

  const navigate = useNavigate();

  const handleSetAdmin = (user) => {
    user.role = "admin";
    console.log(user);
  };

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor="primary"
      overflow="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid grey`}
        colors="grey"
        p="15px"
      >
        <Typography color="grey" variant="h5" fontWeight="600">
          Admin
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ mx: 5, mt: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "yellow" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography sx={{ color: "#000", fontWeight: 500 }}>
                  First Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#000", fontWeight: 500 }}>
                  Second Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#000", fontWeight: 500 }}>
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#000", fontWeight: 500 }}>
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                style={
                  index % 2 === 0
                    ? { background: "grey" }
                    : { background: "white" }
                }
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleSetAdmin(user)}
                    variant="contained"
                    color="primary"
                    borderRadius="4px"
                  >
                    Set Admin
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
