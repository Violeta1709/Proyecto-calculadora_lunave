import React from 'react'
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal'
import Proyect from './app/pages/Proyectos/Proyect'
import styles from './ViewProyect.module.css'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CustomNavbar from './app/components/CustomNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";


function ViewProyect() {
  return (
    <>
   <div><CustomNavbar/></div> 
   <MenuPrincipal/>
    <div>
        
        <h1 className={styles.h1titlep}>Proyectos</h1>
        
        <Fab  href='/newProyect' className={styles.plus2} size="small"  aria-label="add">
        <AddIcon />
      </Fab>


       <div className={styles.acordion}> <Proyect/> </div>
       
       
    </div>

 
    </>
  )
}

export default ViewProyect