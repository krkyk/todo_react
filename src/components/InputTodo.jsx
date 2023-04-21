import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./InputTodo.module.scss";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <Paper elevation={2} className={styles.paper}>
      <TextField
        variant="outlined"
        size="small"
        disabled={disabled}
        placeholder="TODOの入力"
        value={todoText}
        onChange={onChange}
        className={styles.input}
      />
      <Button
        size="small"
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        className={styles.btn}
      >
        追加
      </Button>
    </Paper>
  );
};
