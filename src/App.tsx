import React from "react";
import { useAppDispatch } from "./app/hooks";
import { signup } from "./app/store/actions/auth";

function App() {
  const dispatch = useAppDispatch();

  const register = () => {
    dispatch(
      signup({
        email: "camilon@email.com",
        password: "camilon561",
        username: "camilonvergon",
      })
    );
  };
  return (
    <div className="App">
      <button onClick={register}>Papi</button>
    </div>
  );
}

export default App;
