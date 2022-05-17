import React from "react";
import * as validations from "./validations";
import useInput from "./hooks/useInput";
import Input from "./Input";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("SUBMIT", {
    //   email: email.value,
    //   user: user.value,
    //   password: password.value,
    // });
  };

  // const isDisabled = () => {
  //   return (
  //     !user.value.length ||
  //     user.error ||
  //     !email.value.length ||
  //     email.error ||
  //     !password.value.length ||
  //     password.error
  //   );
  // };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          label={"user"}
          validation={validations.username}
          errorMessage="User invalido"
        />
        <Input
          label={"email"}
          validation={validations.email}
          errorMessage="Email invalido"
        />
        <Input
          label={"password"}
          validation={validations.password}
          errorMessage="Password invalido"
        />

        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
