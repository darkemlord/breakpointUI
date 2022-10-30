import React from "react";
import { useAppDispatch } from "./app/hooks";
import { signup } from "./app/store/actions/auth";

function App() {
  const dispatch = useAppDispatch();

  const register = () => {
    dispatch(signup({ email: "danielota@email.com", password: "sabrosona" }));
  };
  return (
    <div className="App">
      <button onClick={register}>Papi</button>
    </div>
  );
}

export default App;
