import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
// import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import Drawerr from "../components/DrawerConstant";
import Typed from "react-typed";
import { Container } from "@mui/material";
import Appbarr from "../components/Appbar";

const drawerWidth = 280;
const Homepage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const [hasErorr, setError] = useState(false);
  const [firebaseError, setfirebasrError] = useState("");
  const [showForm, setshowForm] = useState("");
  const [showSendEmail, setshowSendEmail] = useState(false);
  const [resetEmail, setresetEmail] = useState("");
  const [noneOrblock, setnoneOrblock] = useState("none");
  const [permanentOrtemp, setpermanentOrtemp] = useState("permanent");

  return (
    <Container className="the-big">
      <Appbarr
        drawerWidth={drawerWidth}
        setnoneOrblock={setnoneOrblock}
        setpermanentOrtemp={setpermanentOrtemp}
      />

      <Drawerr
        noneOrblock={noneOrblock}
        permanentOrtemp={permanentOrtemp}
        setnoneOrblock={setnoneOrblock}
        setpermanentOrtemp={setpermanentOrtemp}
      />

      <form className="homeform">
        <Typed
          // @ts-ignore
          Typed
          strings={[
            "I am a front-end-dev",
            "welcome to my website",
            "see u",
            "",
          ]}
          typeSpeed={60}
          backSpeed={30}
          attr="placeholder"
          loop={false}
        >
          <input className="typed" type="text" />
        </Typed>

        <p style={{ fontSize: "20px", fontWeight: "300" }}>
          Welcome to our platform <span> &#10084; </span>
        </p>

        <input
          style={{ border: "1px solid black" }}

          onChange={(eo) => {
            setemail(eo.target.value);
          }}
          type="email"
          required
          placeholder="Email"
        />

        <input
          style={{ border: "1px solid black" }}

          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          required
          placeholder="Password"
        />

        <button
          onClick={(eo) => {
            eo.preventDefault();

            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in

                window.location.replace("https:courageous-froyo-50292c.netlify.app"
                );;

                console.log("done");
                // const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;

                setError(true);
                setfirebasrError(errorCode);

                if (errorCode === "auth/invalid-email") {
                  setfirebasrError("Invalid-Email");
                } else if (errorCode === "auth/wrong-password") {
                  setfirebasrError("Invalid-password");
                } else if (errorCode === "auth/user-not-found") {
                  setfirebasrError("user not found");
                } else if (errorCode === "auth/internal-error") {
                  setfirebasrError("password needed");
                }
              });
          }}
        >
          Sign in
        </button>
        <br />

        <p>
          Don't have an account<Link to="/sign-up"> Sign-up </Link>{" "}
        </p>

        <p
          onClick={() => {
            setshowForm("show-popup-form");
          }}
          className="forgot-pass"
        >
          {" "}
          Forgot password{" "}
        </p>

        {hasErorr && <h3 style={{ color: "red" }}> {firebaseError} </h3>}

        {/* "pop up form  */}

        <div>
          <div className={`popup-form ${showForm}`}>
            <span
              onClick={() => {
                setshowForm("hide-popup-form");
              }}
            >
              X
            </span>
            <input
              onChange={(eo) => {
                setresetEmail(eo.target.value);
              }}
              type="email"
              required
              placeholder="write your email"
            ></input>
            <button
              onClick={(eo) => {
                eo.preventDefault();
                sendPasswordResetEmail(auth, resetEmail)
                  .then(() => {
                    setshowSendEmail(true);
                    console.log(resetEmail);

                    // ..
                  })
                  .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // ..
                  });
              }}
            >
              Reset password
            </button>
            <br /> <br />
            {showSendEmail && (
              <p>please check your email to reset your password</p>
            )}
          </div>
        </div>

        {/* <Footer /> */}
      </form>
    </Container>
  );
};

export default Homepage;
