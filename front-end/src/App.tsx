import "./App.css";
import { useListTodosQuery } from "./generated";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const { data, loading, error } = useListTodosQuery();

  return (
    <div className="App">
      {error && <div>ERROR!</div>}
      {loading && <div>loading...</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}

export default withAuthenticator(App);
