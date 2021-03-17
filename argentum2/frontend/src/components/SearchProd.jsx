import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import {getSearchProduct} from '../state/searchProduct'
import {useDispatch,useSelector} from 'react-redux'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list:{
      backgroundColor:'#00aae4'
  }
}));

export default function InsetDividers({match}) {
  const classes = useStyles();


/* 
  let queryProduct = useSelector((state)=> state.searchProduct)
  const queryProd = match.params.id
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(getSearchProduct(queryProd))
  },[dispatch,queryProduct])

  console.log(queryProduct) */
 
  return (
    <List className={classes.root}>
      <ListItem className={classes.list}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="producto" />
        <ListItemText primary="precio" />
        <ListItemText primary="descripcion" />
        <ListItemText primary="stock" />
        <ListItemText primary="Photos" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" />
        <ListItemText primary="Photos" />
        <ListItemText primary="Photos" />
        <ListItemText primary="Photos" />
        <ListItemText primary="Photos" />
      </ListItem>
      <Divider variant="inset" component="li" />
     
     
    </List>
  );
}