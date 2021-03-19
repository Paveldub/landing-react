import App from "./App";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);
