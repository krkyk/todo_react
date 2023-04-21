import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const paperStyle = {
  backgroundColor: "#fffacd",
  width: "400px",
  height: "40px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center"
};

const btnStyle = {
  borderRadius: "16px",
  padding: " 4px 12px",
  backgroundColor: "#f8b500",
  marginLeft: "10px"
};

const inputStyle = {
  backgroundColor: "#fff"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <Paper elevation={2} style={paperStyle}>
      <TextField
        variant="outlined"
        size="small"
        disabled={disabled}
        placeholder="TODOの入力"
        value={todoText}
        onChange={onChange}
        style={inputStyle}
      />
      <Button
        size="small"
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        style={btnStyle}
      >
        追加
      </Button>
    </Paper>
  );
};
