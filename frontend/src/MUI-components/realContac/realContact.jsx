import "./RealContact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import ScrollReveal from 'scrollreveal';






const RealContact = () => {
  return (
    <div className="hero">
      <form>
        <div className="row">
          <div className="input-group">
            <TextField id="" label="Name" variant="outlined" />
          </div>

          <div className="input-group">
            <TextField id="" label="Email Adress" variant="outlined" />
          </div>
        </div>

        <div className="input-group">
          <TextField id="" label="Subject" variant="outlined" sx={{ width: "420px" }} />
        </div>

        <div className="input-group">
          <TextField id="" label="Message" rows={4}
            multiline variant="filled"  sx={{border:"1px solid black"}}  />
        </div>

        <Button size="large" variant="contained" color="info" type="submit"
          sx={{ display: "flex", width: "150px", marginLeft: "center", marginRight: "center" }}
          endIcon={<SendIcon />}          >

          Send


        </Button  >
      </form>
    </div>
  );
};
ScrollReveal({    
  reset: true,
  distance:"60px",
  duration:2500,
  delay:400
  
  });
  ScrollReveal().reveal('.hero', { delay: 500, origin:'bottom' });

export default RealContact;
