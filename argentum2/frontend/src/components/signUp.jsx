import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch,useSelector} from "react-redux"
import {sendRegisterRequest} from "../state/user"
import { useHistory} from "react-router-dom";



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
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
    
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

export default function SignUp() {
  const [email,setEmail] = useState ("")
  const [password,setPassword] = useState ("")
  const [name,setName] = useState ("")
  const [lastName,setLastName] = useState ("")
  const dispatch = useDispatch()
  const register = useSelector(state => state.user)
  const classes = useStyles();
  const history = useHistory();

/////////////HANDLE INPUT'S///////////
          const handleEmail = (e) =>{
            setEmail(e.target.value)
        }
        const handlePass = (e) =>{
            setPassword(e.target.value)
        }
          const handleName = (e) =>{
            setName(e.target.value)
        }
        const handleLast = (e) =>{
            setLastName(e.target.value)
        }
 ////////////////HANDLESUBMIT////////////
        const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
          dispatch(sendRegisterRequest(
            {email:email,
              password:password,
              name:name,
              lastName:lastName}
              ))
          .then(()=>{
            alert(`Te registraste correctamente `)
            history.push('/login')
          })
          .catch(err => console.log(err))
        }
      }
////////////////VALIDATE////////////
       
       const validate = () =>{
         let isValid = true
         if (!name) {
          isValid = false;
          alert("Por favor, ingresa tu nombre.");
        }
         if (!lastName) {
          isValid = false;
          alert("Por favor, ingresa tu apellido");
        }
         if (!password) {
          isValid = false;
          alert("Por favor, ingresa una contraseña.");
        }
        if (typeof password !== "undefined"){
          if(password.length < 8){
            isValid = false;
            alert("Por favor, ingresa una contraseña de mas de 8 caracteres.") 
          }
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.tipo} >
          Registrarse
        </Typography>
        <form className={classes.form} noValidate onSubmit ={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                onChange={handleName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                onChange={handleLast}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePass}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quiero recibir promociones y noticias por correo electronico"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >
            Registrarme
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            Ya tienes una cuenta?
              <Link to="/login" variant="body2">
                 Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}