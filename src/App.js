import React from "react";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          User
          {false && <p>User invalido</p>}
          <input type="text" name="user" />
        </label>

        <label>
          Email
          {false && <p>Email invalido</p>}
          <input type="text" name="email" placeholder="mail@prueba.com" />
        </label>

        <label>
          Password
          {false && <p>Password invalido</p>}
          <input type="password" name="password" />
        </label>

        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
