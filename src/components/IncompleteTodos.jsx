import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./IncompleteTodos.module.scss";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <Paper elevation={3} className={styles.paper}>
      <Typography className={styles.title}>未完了のTODO</Typography>
      {todos.map((todo, index) => {
        return (
          <Card key={todo} className={styles.card}>
            <CardContent>{todo}</CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                onClick={() => onClickComplete(index)}
                className={styles.btn}
              >
                完了
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => onClickDelete(index)}
                className={styles.btn}
              >
                削除
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Paper>
  );
};
