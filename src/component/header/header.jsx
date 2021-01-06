import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
  } from "@material-ui/core";
  import React from "react";
  import { Link as RouterLink, withRouter } from "react-router-dom";
  import { Popup } from "reactjs-popup";
  import 'reactjs-popup/dist/index.css';
  import './header.css'
  const headersData = [
    {
        label:"Khaleel",
        href:"/homepage"
    },
    {
      label: "Log Out",
      href: "/login",
    },
    
  ];
                       
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#8C55AA",
      overflow:'hidden'
    },
    logo: {
      fontFamily: "Staatliches",
      fontWeight: 150,
      color: "#FFFEFE",
      textAlign: "left",
      fontSize:30
    },
    button:{
        fontSize:20,
        marginLeft: "38px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
  }));
  
                       
  const Header=(props)=> {
    const logOut=()=>props.history.push('/login')
    const { header, logo,button ,toolbar} = useStyles();
        console.log(props)               
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <div>
          {getMenuButtons()}
          </div>
        </Toolbar>
      );
    };
                       
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        cHarOManiA
      </Typography>
    );
                       
    const getMenuButtons = (position) => {
          return (
            <div className='pop-head'>
            <Popup trigger={
          <Button key= {props.userName} color= "inherit"   className={button}
          >
            {props.userName}
          </Button>}
         position= 'bottom center'
         arrow={position !== 'center center'} className="pop-head"
         >
         <div > <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
         <button className="but" onClick={logOut} >Log Out</button>
         
         </div>
        
         </Popup>
         </div>
        );
      
    };

    
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }

  export default withRouter(Header)