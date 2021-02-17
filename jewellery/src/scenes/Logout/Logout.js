import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

const Logout = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());

    history.push("/");
  }, [history, dispatch]);

  return <></>;
};

export default Logout;
