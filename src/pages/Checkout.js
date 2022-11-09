import React, { useEffect, useState } from "react";

import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
    swal({
      title: "Error",
      text: "Login to go to Shopping Cart Page !!",
      icon: "warning",
      button: "OK",
    });
  }
  return <div>Checkout</div>;
}

export default Checkout;
