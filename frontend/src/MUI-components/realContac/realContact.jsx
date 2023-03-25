import "./RealContact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RealContact = () => {
  return (
    <div className="hero">
      <form>
<div className="row">

<div className="input-group">
          <TextField id="" label="Name" variant="outlined" />
        </div>

        <div className="input-group">
          <TextField id="" label="Your Email" variant="outlined" />
        </div>



</div>

        <div className="input-group">
          <TextField fullWidth id="" label="Subject" variant="outlined" />
        </div>

        <div className="input-group">
          <TextField id="" label="Mssage" variant="outlined"  />
        </div>

        <Button variant="contained"  color="info" type="submit"sx={{width:"150px"}}>Send</Button>
      </form>
    </div>
  );
};

export default RealContact;
