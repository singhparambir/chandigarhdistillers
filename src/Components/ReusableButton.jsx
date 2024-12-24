import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ReusableButton({ label, path, color }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      color={color}
      onClick={() => navigate(path)}
      style={{ marginLeft: "10px" }}
    >
      {label}
    </Button>
  );
}

export default ReusableButton;
