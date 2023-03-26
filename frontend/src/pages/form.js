import "./formjsn.css";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { TbMessageCircle, TbSend } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import {  useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";


const Contactform = () => {







  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const form = useRef();

  const sendEmail = (e) => {
    console.log("done");
    emailjs
      .sendForm(
        "service_um2xtn9",
        "template_b2vjsa5",
        form.current,
        "7LBu4kSgGpdIHFdd7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsendForm(true);
          setTimeout(() => {
            setsendForm(false);

          }, 4000);
        
        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [sendForm, setsendForm] = useState(false);

  return (
  
    <div className="modern-formjss">
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail,onSubmit)}
        className="form-simple"
      >
        <div className="row-input">
          <div className="input-group">
            <input
              {...register("user_name", {
                required: { value: true, message: "Your name is required" },
                minLength: {
                  value: 3,
                  message: "Name field minimum Length is 3 characters",
                },
              })}
              type="text"
              name="user_name"
              required
onChange={(eo) => {
}}

            />

            <label htmlFor="name">
              <AiOutlineUser /> Your Name
            </label>
          </div>
          <div className="input-group">
            <input type="text" name="phone_number" required onChange={(eo) => {
            }}/>
            <label htmlFor="number">
              <BsTelephone style={{ marginRight: "6px" }} />
              Phone Number
            </label>
          </div>
        </div>
        <div className="input-group">
          <input
            {...register("user_email", {
              required: { value: true, message: "Your email is required" },
              minLength: {
                value: 3,
                message: "email field minimum Length is 3 characters",
              },
            })}
            type="text"
            name="user_email"
            required
          />
          <label htmlFor="email">
            <AiOutlineMail style={{ marginRight: "6px" }} />
            Your Email
          </label>
        </div>
        <div className="input-group">
          <textarea name="message" rows={8}></textarea>
          <label htmlFor="message">
            <TbMessageCircle /> Your Mssage
          </label>
        </div>

        <button type="submit" value="Send">
          <TbSend /> Send a message
        </button>

        {errors.user_name?.type === "required" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_name?.message}</>
          </p>
        )}

        {errors.user_name?.type === "minLength" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_name?.message}</>
          </p>
        )}

        {errors.user_email?.type === "required" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_email?.message}</>
          </p>
        )}
        {errors.user_email?.type === "minLength" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_email?.message}</>
          </p>
        )}
        <br />

        {sendForm && (
          <p className="popupp">
            your message has been sent successfully{" "}
            <AiOutlineHeart
              style={{ marginTop: "4px", top: "3px", position: "relative" }}
            />
          </p>
        )}
      </form>
    </div>
  );
};

export default Contactform;
