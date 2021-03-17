import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from "react-redux"
import {sendLoginRequest,sendToken} from "../state/user"
import { useHistory} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

/////////////MATERIAL UI CODE///////////


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Argentum
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.clarin.com/2018/11/28/wW3LTrOkj_720x0__1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#C25500"
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#C25500"
  },
  tipo:{
    fontWeight:'bold',
    fontFamily: "'Lobster Two', cursive",
    fontSize:'30px'
  },
  
}));
///////////////////////////////////

export default function SignInSide() {
  const [email,setEmail] = useState ("")
  const [password,setPassword] = useState ("")
  const dispatch = useDispatch()
  const user = useSelector(state => state)
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
 

/////////////HANDLE INPUT'S///////////

 
  

  const handleEmail = (e) =>{
    setEmail(e.target.value)
}
const handlePass = (e) =>{
    setPassword(e.target.value)
}

 ////////////////HANDLESUBMIT////////////
const handleSubmit =  (e) => {
  e.preventDefault();
  console.log("login attempt...");
  if(validate()){
 dispatch(sendLoginRequest({email:email,password:password}))
  .then((data)=>{
    alert(`bienvenido!`)
    history.push('/')

  })
  .catch((err) => console.log(err))
  }
};

////////////////VALIDATE////////////

const validate = () =>{
  let isValid = true

  if (!password) {
   isValid = false;
   alert("Por favor, ingresa una contraseña.");
 }
  if (!email) {
   isValid = false;
   alert("Por favor, ingresa un correo electronico.");
 }
  
 if (typeof email !== "undefined"){
   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
   if (!pattern.test(email)) {
     isValid = false;
    alert("Por favor, ingresa un correo electronico valido.") 
 }
}
return isValid;
}





  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.tipo} >
             Iniciar sesión
          </Typography>
          <form className={classes.form} noValidate onSubmit ={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange ={handleEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {handlePass}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="inherit"
              className={classes.submit}
            >
              Iniciar sesión
            </Button>
            <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
              No tenes una cuenta todavia?
                <Link to="/signup" variant="body2">
                  {" Registrate!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
