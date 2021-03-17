import React from "react";

const Footer = () => {
  return (
    <div style={{width:"100%", float:"left", bottom:"0", zIndex:"999999", height:"65px", boxShadow: "0px -3px rgba(0, 0, 0, 0.4)"}}>
      <div style={{backgroundColor: "#FFCA8F", margin:"0 auto"}}>
        <img src="logo.png" alt="" style={{ width: "180px", height: "60px"}} />
        <a style={{position:"relative",fontFamily: "'Lobster', cursive", fontSize:"20px", margin: "0 auto", marginBottom:"20px"}}>© 2021</a>
      </div>
    </div>
  
  );
};

export default Footer;
