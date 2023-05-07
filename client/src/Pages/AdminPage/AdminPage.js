import React, { useEffect, useState } from "react";
import UserList from "../../Components/Table/Table";
import { getUsers } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.auth);
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
    if (users) setUserData(users);
  }, [users]);

  return <UserList users={users} setUserData={setUserData} />;
};

export default AdminPage;
