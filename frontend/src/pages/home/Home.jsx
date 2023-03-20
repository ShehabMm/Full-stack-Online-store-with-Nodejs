import "./Home.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import { Stack } from "@mui/material";
import { useGetproductsByNameQuery } from '../../Redux/productsApi'
import CircularProgress from '@mui/material/CircularProgress';
import { addToCart } from "Redux/counterSlice";
import { useDispatch } from 'react-redux'




const Home = () => {


  const { data, isLoading } = useGetproductsByNameQuery()
  const dispatch = useDispatch()


  // if (error) {
  //   return (
  //     <h1>sorry something wrong</h1>

  //   )
  // }



  if (isLoading) {
    return (

      <CircularProgress />

    )

  }




  if (data) {

    return (
      <Stack direction={"row"} sx={{ flexWrap: "wrap", justifyContent: "center" }}>

        {data.map((item) => {


          return (


            <Card className="card" key={item.id} sx={{ maxWidth: 277, mb: 6, mx: 2 }}>

              <CardMedia
                component="img"
                height="277"
                image={item.imageLink}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ justifyContent: "space-between" }}   >
                <Button
                  onClick={() => {

                    dispatch(addToCart(item))



                  }}

                  sx={{ textTransform: "capitalize", lineHeight: "1", padding: "1.1" }} variant="contained" color="primary">
                  Add to Cart
                </Button>

                <Typography mr={1} variant="body1" color="error">${item.price}</Typography>


              </CardActions>
            </Card>





          )

        })}









      </Stack>
    );



  }

};

export default Home;
