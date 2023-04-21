import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./CompleteTodos.module.scss";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <Paper elevation={3} className={styles.paper}>
      <Typography className={styles.title}>完了したTODO</Typography>
      {todos.map((todo, index) => {
        return (
          <Card key={todo} className={styles.card}>
            <CardContent>{todo}</CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                onClick={() => onClickBack(index)}
                className={styles.btn}
              >
                戻す
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Paper>
  );
};
