import React from "react";
import UserList from "../../Components/Table/Table";

const users = [
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "admin",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "user",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "admin",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "user",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "admin",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "user",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "admin",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "user",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "admin",
  },
  {
    firstName: "John",
    lastName: "Mark",
    email: "johnmark@gmail.com",
    role: "user",
  },
];
const AdminPage = () => {
  return <UserList users={users} />;
};

export default AdminPage;
