import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'
import Admin from '../components/Admin'
import SignUp from '../components/signUp'
import Login from '../components/login'
import SearchProd from '../components/SearchProd'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useDispatch,useSelector} from "react-redux"
import {sendToken} from "../state/user"
import {useEffect} from 'react';
import Shop from "../components/Shop";
import Rating from "../components/rating"


export default function Main() {
  const dispatch = useDispatch()
  const user = useSelector(state => state)
  const token =localStorage.getItem("token")

  React.useEffect(() => {
    if(token){
      dispatch(sendToken(token))
    }
  }, []);


  return (
      
      <React.Fragment>
        {/* <section className="content"> */}

        <Navbar />
            <Switch>
            <Route  path="/products" component={PrincipalPage} />
            <Route exact path= "/signup" component={SignUp} />
            <Route exact path= "/login" component={Login} />
            <Route exact path="/search/:id" render={({match})=> <SearchProd match={match}/>} />
            <Route exact path="/product/:id" render={({match})=> <SingleProduct match={match}/>} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/rating' component={Rating} />
            <Route exact path='/shop' component={Shop} />
            <Redirect to= "/products" />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}