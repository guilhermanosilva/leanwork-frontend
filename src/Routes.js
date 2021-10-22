import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import ListUsers from "./pages/ListUsers";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path="/list" exact component={ListUsers} />
    </Switch>
  );
}
