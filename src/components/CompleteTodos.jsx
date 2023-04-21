import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const paperStyle = {
  backgroundColor: "#87cefa",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const cardStyle = {
  display: "flex",
  margin: "0 10px 10px 10px"
};

const btnStyle = {
  borderRadius: "16px",
  padding: " 4px 16px",
  backgroundColor: "#38a1db"
};

const titleStyle = {
  textAlign: "center",
  marginTop: 0,
  fontWeight: "bold",
  color: "#524e4d"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <Paper elevation={3} style={paperStyle}>
      <Typography style={titleStyle}>完了したTODO</Typography>
      {todos.map((todo, index) => {
        return (
          <Card key={todo} style={cardStyle}>
            <CardContent>{todo}</CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                onClick={() => onClickBack(index)}
                style={btnStyle}
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
