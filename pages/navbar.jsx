import { makeStyles } from '@mui/styles'
import React, {useState}from 'react'

import {
    faBars,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyles = makeStyles((theme)=> ({
    container:{ background: "white",
    },
    wrapper:{
    padding: "20px 40px",
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    },
 hamburger:{
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255,101,47,.2)",
    transition: "all 0.5s ease-in-out", 

},
activeHamburger:{
    width:"30px",
    height:"3px",
    borderRadius:"5px",
    transform:"translateX(-50px)",
    background: "transparent",
    transition:"all 0.5s ease-in-out", 
},
sidenav:{
    position:"fixed",
    width: "100%",
    height: "100vh",
    background: "#fff",
    transform:"translateX(100%)",
transition: "all 0.5s ease-in-out"
},
activeSidenav:{
position: "fixed",
width:"100%",
height:"100vh",
background: "#fff",
transform:"translateX(100%)",
transition: "all 0.5s ease-in-out"
},

ul:{
    listStyleType: "none",
}
}));

    const data =[
{name: "Home", Link: "/"},
{name: "problems", Link: "/problems"},
{
 name: "team",
 Link: "/team",
},
{name: "events",
 Link: "/events"},
    ];


const  Navbar = ()=> {


    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

  return (
    <div className={classes.main}>
<div className={classes.container}>
    <div className={classes.wrapper}>
        <p className={classes.logo}>lunave</p>
        <div onClick={handleDrawerToggle}>
        <FontAwesomeIcon  icon={ faBars}
        edge='end'
style={{ top: '30px', fontSize: 30, right:'15px', position:'absolute', color: '#8ACBB5',}}
 />
</div>
</div>
</div>

<div className={  active ? classes.activeSidenav : classes.sidenav}>
    <ul className={classes.ul}>

        {data.map((item, i)=>(
            <li key={i}>
                <a href="#">{item.name}</a>

            </li>
        ))}

    </ul>

</div>

    </div>
  )
}

  

export default Navbar