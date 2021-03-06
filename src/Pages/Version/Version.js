import React from "react";
import { useLocation } from "react-router";

const Version = () => {
  const location = useLocation();

  return (
    <div style={{ width: "auto", marginBlock: "200px" }}>
      <h1 style={{ textAlign: "center" }}>
        Ini Halaman Untuk:{" "}
        {location.pathname === "/maskur/version"
          ? "Maskur"
          : location.pathname === "/customer/version"
          ? "Customer"
          : "Merchant"}
      </h1>
    </div>
  );
};

export default Version;
