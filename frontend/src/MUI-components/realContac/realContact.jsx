import "./RealContact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ScrollReveal from "scrollreveal";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const RealContact = () => {
  const sendEmail = (eo) => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();





  return (
    <div className="hero">
      <form ref={form}
      
    
      
      
      >
        <div className="row">
          <div className="input-group">
            <TextField

              color="primary"
              autoComplete="off"
              id=""
              label="Name"
              variant="outlined"
              name="user_name"
            />
          </div>

          <div className="input-group">
            <TextField
              autoComplete="off"
              id=""
              label="Email Adress"
              variant="outlined"
              name="user_email"
            />
          </div>
        </div>

        <div className="input-group">
          <TextField
            autoComplete="off"
            id=""
            label="Subject"
            variant="outlined"
            sx={{ width: "420px" }}
            name="subject"
          />
        </div>

        <div className="input-group">
          <TextField
            id=""
            label="Message"
            rows={4}
            multiline
            variant="filled"
            sx={{ border: "1px solid black" }}
            name="message"
          />
        </div>

        <Button
          onClick={(eo) => {
            eo.preventDefault();
            sendEmail();
          }}
          type="submit"
          size="large"
          variant="contained"
          color="info"
          sx={{
            display: "flex",
            width: "150px",
            marginLeft: "center",
            marginRight: "center",
          }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(".hero", { delay: 500, origin: "bottom" });

export default RealContact;
