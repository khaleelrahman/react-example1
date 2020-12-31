import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
  } from "@material-ui/core";
  import React from "react";
  import { Link as RouterLink } from "react-router-dom";
  
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
  
                       
  export default function Header() {
    const { header, logo,button ,toolbar} = useStyles();
                       
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
                       
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
            }} className={button}
          >
            {label}
          </Button>
        );
      });
    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }