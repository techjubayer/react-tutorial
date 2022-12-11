import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyProtectedRoute(myProps) {
  const parentComp = myProps.parentComp;

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });

  return <div>{parentComp}</div>;
}
