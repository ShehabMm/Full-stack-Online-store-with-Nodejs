import "./Home.css";
import { styled, IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useGetproductsByNameQuery } from "../../Redux/productsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { addToCart } from "Redux/counterSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, decreaseQuantity } from "Redux/counterSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";
import Swiper from "pages/swiper/swiper";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#5d4037",
    color: "#fff",
  },
}));

const Home = () => {



  // @ts-ignore
  const { allProductsID } = useSelector((state) => state.counter);
  // @ts-ignore
  // const { allProducts } = useSelector((state) => state.counter);


  const navigate = useNavigate();
  const { data, isLoading } = useGetproductsByNameQuery();
  const dispatch = useDispatch();

  // if (error) {
  //   return (
  //     <h1>sorry something wrong</h1>

  //   )
  // }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (data) {
    return (
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((item) => {
          return (
            <Card
              className="card"
              key={item.id}
              sx={{ maxWidth: 277, mb: 6, mx: 2 }}
            >
              <CardMedia
                component="img"
                height="277"
                image={item.imageLink[2]}
                alt="Paella dish"
                onClick={() => {
                  navigate(`/productdetails/${item.id}`);
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ justifyContent: "space-between" }}
              >


                {/* ..//add to cart button or increase,decrease */}

                {allProductsID.includes(item.id) ?

                  <>
                    <IconButton
                      className="add-remove"
                      sx={{ left: 30 }}
                      onClick={() => {
                        dispatch(decreaseQuantity(item.id));
                      }}
                    >
                      <RemoveIcon fontSize="small" sx={{ color: "#607d8b" }} />
                    </IconButton>

                    <StyledBadge badgeContent={1} color="secondary" />

                    <IconButton
                      onClick={() => {
                        dispatch(addQuantity(item.id));



                      }}
                      className="add-remove"
                      sx={{ right: 30 }}
                    >
                      <AddIcon fontSize="small" sx={{ color: "#607d8b" }} />
                    </IconButton>
                  </> : <Button
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                    sx={{
                      textTransform: "capitalize",
                      lineHeight: "1",
                      padding: "1.1",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Add to Cart
                  </Button>

                }








                <Typography mr={1} variant="body1" color="error">
                  ${item.price}
                </Typography>
              </CardActions>
            </Card>


          );
        })}

        <Swiper />





















      </Stack>


    );

  }
};

export default Home;
