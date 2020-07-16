import React from "react";
import "./App.css";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <CssBaseLine>
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      >
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Typography>
    </CssBaseLine>
  );
}

export default App;
