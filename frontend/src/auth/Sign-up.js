import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  return (
    < div className="container">
      <form className="signup-form">
        {/* <button>Sign out</button> */}

        <p>
          Create a new account <span> &#10084; </span>
        </p>

        <input
          onChange={(eo) => {
            setname(eo.target.value);
          }}
          type="text"
          required
          placeholder="Name"
        />

        <input
          onChange={(eo) => {
            setemail(eo.target.value);
          }}
          type="email"
          required
          placeholder="Email"
        />
        <input
          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          required
          placeholder="New password"
        />

        <button
          onClick={(eo) => {
            eo.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                console.log("dooone");
                console.log(name, password, email)

                // Signed in
                const user = userCredential.user;
                navigate("/TheContent");
                // ...
              })
              .catch((error) => {
                console.log("noooo");
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
          }}
        >
          Sign up{" "}
        </button>
        <br />

        <p>
          {" "}
          Already have an account<Link to="/"> Sign-in </Link>{" "}
         </p>
        </form>
      </div >
      );
};

      export default SignUp;
