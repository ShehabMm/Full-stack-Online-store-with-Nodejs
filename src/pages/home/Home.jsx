import { Box } from "@mui/system";
import "./Home.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import { Stack } from "@mui/material";


const receivedDataFromAPI = [{}, {}, {}, {}]


const Home = () => {
  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", justifyContent:"center" }}>

      {receivedDataFromAPI.map((item) => {


        return (


          <Card sx={{ maxWidth: 277, mb: 6, mx: 2 }}>

            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: "space-between" }}   >
              <Button  sx={{ textTransform: "capitalize", lineHeight:"1", padding:"1.1" }} variant="contained" color="primary">
                Add to Cart
              </Button>

              <Typography mr={1} variant="body1" color="error">$100</Typography>


            </CardActions>
          </Card>





        )

      })}









    </Stack>
  );
};

export default Home;
