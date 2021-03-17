import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Rating from '@material-ui/lab/Rating';
import {getSingleProduct} from '../state/singleProduct'
import { useSelector,useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Link,useHistory} from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';



import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';







const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
      width:'21%',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: '#D3D3D3',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  


const useStyles = makeStyles((theme) => ({
  
root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: "url('https://ak.picdn.net/shutterstock/videos/1038323930/thumb/1.jpg?ip=x480')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    paddingTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    width:800,
    height:700,
    
  },
  lilCard: {
    paddingLeft:'15px',
    paddingRight:'15px',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingTop: '10%',
    border:'2px solid #D3D3D3',
    width:300,
    height:600,
    borderRadius:'5px',
    lineHeight:'40px',
    backgroundColor: '#00aae4',
    color:'white',
    fontFamily: "'Lobster Two', cursive"
   },
  cardMedia: {
    marginTop:'10%',
    paddingTop: '0%', // 16:9
    width: 450,
    height: 450,
    backgroundSize:'contain',
    
    
  },
  cardContent: {
    flexGrow: 1,
    display:'flex',
    justifyContent:'space-between'
  },
  letters: {
    fontWeight:'bold'
  },
  cartbutton:{
    alignContent:'flex-end',
    
  },
  disponibilidad:{
    fontWeight:'normal'
  },
  stock:{
    fontWeight:'normal',
    fontSize:'15px',
    color:'#D3D3D3'
    
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  fav:{
    float:'right',
    color:'white'
  }

}));


export default function SingleProduct({match}) {
  const history = useHistory();
  const [heart,setHeart] = React.useState(false)
  const classes = useStyles();
  const dispatch = useDispatch()
 const singleProduct = useSelector(state => state.singleProduct)
const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

 console.log(singleProduct)
 let singleProduc= singleProduct
 React.useEffect(()=>{
 dispatch(getSingleProduct(match.params.id))
 },[])

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function toggleHeart(){
    setHeart(!heart)
  }
 

  //----------------------------------------------



  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        history.push("/shop")
      }, 2000);
    }
  };


  //-------------------------------------------
 

  return (
    
    <React.Fragment>
      
   <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item key={singleProduct.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <div >
                    
                    <img src={singleProduct.imagen} alt="" className={classes.cardMedia} />
                    
                      
                    <div className={classes.lilCard}>

                  <Typography  variant="h5" component="h2" >
                  
                  <IconButton aria-label="delete" className={classes.fav} onClick={toggleHeart}>
                  {!heart? <FavoriteBorderIcon className={classes.fav}  />:
                      <FavoriteIcon className={classes.fav}  />}
                          
                          </IconButton>

                  
                    {singleProduc.nombre} 
                   <hr />
                     ${singleProduct.precio} 
                     <hr />
                     <Box component="fieldset" mb={1} borderColor="transparent">
                        
                        <Rating name="read-only" value={2} readOnly />
                    </Box>
                    </Typography>
                    <Typography  variant="h5" component="h2" >
                     {singleProduc.descripcion}
                     </Typography>
                     <Box mt={4} />
                     

                     <div className={classes.wrapper}>
                        <Button
                          variant="contained"
                          color="inherit"
                          className={buttonClassname}
                          disabled={loading}
                          onClick={handleButtonClick}
                          fullWidth
                          style={{color:'black'}}
                        >
                          AGREGAR AL CARRITO 
                        </Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                      </div>
                     <Box mt={4} />
                    {singleProduct.disponible? <Typography component="h5"  className={classes.disponibilidad}> STOCK DISPONIBLE</Typography>:<h1>no disponible</h1> }
                    {singleProduct.disponible? <Typography component="h10"  className={classes.stock}>({singleProduct.stock} disponibles)</Typography>:<h1>no disponible</h1> }
                    <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained"  onClick={handleClick} fullWidth='true'>
                    Cantidad: 1 UNIDAD
                    </Button>
                    <StyledMenu id="customized-menu" anchorEl={anchorEl}keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                        <StyledMenuItem >
                        
                        1 UNIDAD
                        </StyledMenuItem>
                        <StyledMenuItem>
                        2 UNIDADES
                        </StyledMenuItem>
                        
                    </StyledMenu>
                   
                    </div>
                    </div>
                   
                    
                  </Card>
              </Grid>
            
             </Grid>
        </Container>
        
     
    </React.Fragment>
  );
}





