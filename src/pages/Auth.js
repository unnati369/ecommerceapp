import { useContext, useState } from "react";
import { ProductContext } from "..";
import { NavLink } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
export const Auth = () => {
  const [mail, setMailId] = useState(false);
  const [password, setPassword] = useState(false);
  const { dispatch, state } = useContext(ProductContext);
  return (
    <>
      {/* <h1>Please login to continue</h1> */}
      <fieldset
        style={{
          margin: "5%",
          display: "flex",
          justifyTracks: "center",
          flexDirection: "column"
        }}
      >
        <h1>Create Account / Sign In </h1>
        <label>
          Enter email :{" "}
          <input
            placeholder="xyz@gmail.com"
            style={{ margin: "3%" }}
            onChange={() => setMailId(true)}
          />
        </label>
        <label>
          Enter password :{" "}
          <input
            type="password"
            style={{ margin: "3%" }}
            onChange={() => setPassword(true)}
          />
        </label>

        {password && mail ? (
          <NavLink to="/">
            <button
              style={{ margin: "2% 40%" }}
              onClick={() => dispatch({ type: "signIn" })}
            >
              Create Account
            </button>{" "}
          </NavLink>
        ) : (
          <p onClick={() => toast("Create your account")}>
            Enter valid email and password!
          </p>
        )}
        <p>OR</p>
        <span>Log in as Guest User</span>
        <NavLink to="/">
          <button
            style={{ margin: "2% 40%" }}
            onClick={() => {
              toast("Logged in as guest.");
              dispatch({ type: "signIn" });
            }}
          >
            Guest User
          </button>
        </NavLink>
      </fieldset>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </>
  );
};
