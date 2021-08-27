import "./App.css";
import { useListTodosQuery } from "./types-and-hooks";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

function useJWT() {
  const [token, setToken] = useState<null | string>(null);
  useEffect(() => {
    async function getToken() {
      const session = await Auth.currentSession();
      const jwt = session.getIdToken().getJwtToken();
      setToken(jwt);
    }
    getToken().catch((e) => {
      console.log(e);
    });
  }, []);
  return token;
}

function App() {
  const jwt = useJWT();
  const { data, isLoading, isError, isSuccess } = useListTodosQuery(
    {
      endpoint: process.env.REACT_APP_API_URL as string,
      fetchParams: {
        headers: {
          authorization: jwt,
        } as HeadersInit,
      },
    },
    undefined,
    { enabled: !!jwt }
  );

  return (
    <div className="App">
      {isError && <div>ERROR!</div>}
      {isLoading && <div>loading...</div>}
      {isSuccess && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}

export default withAuthenticator(App);
