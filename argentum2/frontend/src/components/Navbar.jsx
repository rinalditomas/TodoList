import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link,useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch,useSelector} from 'react-redux'
import {sendLoginRequest, sendLogoutRequest} from "../state/user"
import { useRadioGroup } from "@material-ui/core";





const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    backgroundColor: "#FFCA8F",
  },
  logo: {
    height: "80px",
    paddingRight: "150px",
  },
  icon: {
    fontSize: "24px",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    color: "black",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    width: "60",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const history = useHistory();
  const [ value, setValue ] = React.useState("")
  
   const enter = (e)=> {
      if(e.keyCode == '13'){ 
   history.push(`/search/${value}`)
   setValue("")
     } } 

    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(sendLogoutRequest())
      // window.location.reload();
      // return false;
    }
   
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <div>
            <Link to='/products'>
            <img className={classes.logo} src="logo.png" alt="" />
            </Link>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              onKeyDown= {(e)=>enter(e)} 
               value={value}
               onChange={(e)=>setValue(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div>{user.name?`Hola ${user.name}`: null} </div>
            {/* {'------------agregado solo para mi facilidad-----------'} */}
          <Link to="/admin">
            <IconButton color="black" style={{ fontSize: 30 , backgroundColor:"#FFCA8F"}}>
              <Badge color="black" style={{ fontSize: 30 , backgroundColor:"#FFCA8F"}}>
              <PersonAddIcon style={{ fontSize: 30 , color:"#FFCA8F"}} />
              </Badge>
            </IconButton>
            </Link>
{/* {'------------agregado solo para mi facilidad-----------'}*/}          <Link to="/shop">
            <IconButton color="black">
              <Badge color="black">
                <ShoppingCartIcon style={{ fontSize: 30 }} />
              </Badge>
              </IconButton>
            </Link>
              {user.id? (<div>
                <button onClick={handleSubmit} >logout</button>
              {/* <Link to="/logout"></Link>
            <IconButton color="black">
              <Badge color="black">
                <ExitToAppIcon style={{ fontSize: 30 }} />
              </Badge>
            </IconButton> */}
            </div>):(<div>
                <Link to="/signup">

            <IconButton color="black">
              <Badge color="black">
                <PersonAddIcon style={{ fontSize: 30 }} />
              </Badge>
            </IconButton>
            </Link>
            <Link to="/login">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="black"
              >
                <AccountCircle style={{ fontSize: 30 }} />
              </IconButton>
            </Link>
              </div>)}
           
           
          </div>
          
        </Toolbar>
      </AppBar>
      
      
    </div>
  );
}
