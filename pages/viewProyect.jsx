import React from 'react'
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal'
import Proyect from './app/pages/Proyectos/Proyect'
import styles from './ViewProyect.module.css'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
function ViewProyect() {
  return (
    <>
   <div><MenuPrincipal/></div> 
    <div>
        
        <h1 className={styles.h1titlep}>Proyectos</h1>
        <Fab  href='/newProyect' className={styles.plus2} size="small"  aria-label="add">
        <AddIcon />
      </Fab>


       <div> <Proyect/> </div>
       
       
    </div>

 
    </>
  )
}

export default ViewProyect