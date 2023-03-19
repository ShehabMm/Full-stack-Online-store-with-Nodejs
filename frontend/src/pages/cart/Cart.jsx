import {
  Box,
  Button,
  InputAdornment,
  TextField,
  styled,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from '@mui/material/Badge';
import "./Cart.css"
import Divider from '@mui/material/Divider';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {

    backgroundColor: '#5d4037',
    color: '#fff'
  },
}));


const Cart = () => {
  const theme = useTheme();

  // Why <<<component="form">>> ?
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <Paper className="cart-paper"
        sx={{
          width: "500px",
          height: "100px",
          backgroundColor: theme.palette.grey[50],
          borderRadius: "15px",
          display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center",

        }}
      >
        <IconButton aria-label="" sx={{ mr: 3,  }}>
          <DeleteIcon sx={{color:'#607d8b'}} />
        </IconButton>

        <Typography className="add-remove" variant="h6" color="error" sx={{ mr: 10 }}>
          $100
        </Typography>




        <IconButton className="add-remove" sx={{ mr: 1 ,  }} >
          <RemoveIcon sx={{color:'#607d8b'}} />
        </IconButton>


        <StyledBadge badgeContent={4} color="secondary" />


        <IconButton className="add-remove" sx={{ ml: 1, mr: 10 , }}  >
          <AddIcon  sx={{color:'#607d8b'}}/>
        </IconButton>

        <Typography variant="h6"  sx={{ textAlign: "right", color:'#607d8b' }}>
          Tshirt
        </Typography>

        <img src="" alt="" />
      </Paper>


<Box sx={{  width: "300px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column',  ml:"auto", mr:"auto"}}>
      <Paper sx={{ mt: 20, width: "300px", p:3, backgroundColor: theme.palette.background.paper, textAlign:"center", }}>
        <Typography variant="h4" sx={{color:'#607d8b'}}> Cart Summary</Typography>
      </Paper>
      <Divider  />

      <Paper sx={{  width: "300px", p:1, backgroundColor: theme.palette.grey[700], textAlign:"center", display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
        <Typography variant="h6" color="white"> SubTotal</Typography>
        <Typography variant="h6" color="white"> $100</Typography>
      </Paper>
      <Divider light />

      <Button fullWidth variant="contained" color="secondary">
        CHECKOUT
      </Button>


      </Box>


    </Stack >
  );
};

export default Cart;
