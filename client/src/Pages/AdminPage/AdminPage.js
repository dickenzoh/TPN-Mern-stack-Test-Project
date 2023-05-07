import React, { useEffect } from "react";
import UserList from "../../Components/Table/Table";
import { getUsers } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.auth);
  console.log(users);

  return <UserList users={users} />;
};

export default AdminPage;
