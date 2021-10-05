import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  input1: {
    height: 50
  },
  input2: {
    height: 200,
    fontSize: "3em"
  }
};
function App(props) {
  return (
    <div className="App">
      <TextField
        variant="outlined"
        InputProps={{ classes: { input: props.classes.input1 } }}
      />
      <TextField
        variant="outlined"
        InputProps={{ classes: { input: props.classes.input2 } }}
      />
    </div>
  );
}

export const StyledApp = withStyles(styles)(App);