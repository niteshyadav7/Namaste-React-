import { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div>
        {login ? (
          <button onClick={() => setLogin(false)} style={{ color: "blue" }}>
            Login
          </button>
        ) : (
          <button onClick={() => setLogin(true)} style={{ color: "blue" }}>
            Logout
          </button>
        )}
      </div>
    </>
  );
};
export default Auth;
