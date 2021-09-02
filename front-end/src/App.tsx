import { withAuthenticator } from "@aws-amplify/ui-react";
import { Todo } from "./Todo";
import { Todos } from "./Todos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Todos />
        </Route>
        <Route path="/todo/:id" children={<Todo />} />
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
