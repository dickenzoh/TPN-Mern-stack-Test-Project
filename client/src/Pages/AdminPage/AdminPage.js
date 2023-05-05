import React from "react";
import UserList from "../../Components/Table/Table";

const users = [
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
  { firstName: "John", lastName: "Mark", email: "johnmark@gmail.com" },
];
const AdminPage = () => {
  return <UserList users={users} />;
};

export default AdminPage;
