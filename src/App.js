import React from "react";

import * as validations from "./validations";
import { useInput } from "./useInput";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT");
  };

  const user = useInput(validations.username, "user");
  const email = useInput(validations.email, "email");
  const password = useInput(validations.password, "pass");

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          User
          {user.error && <p>User invalido</p>}
          <input type="text" {...user} />
        </label>

        <label>
          Email
          {email.error && <p>Email invalido</p>}
          <input type="text" placeholder="mail@prueba.com" {...email} />
        </label>

        <label>
          Password
          {password.error && <p>Password invalido</p>}
          <input type="password" {...password} />
        </label>

        <button disabled={email.error || password.error || user.error}>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
