import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './detalleProyecto.module.css'
import Proyect from './app/pages/Proyectos/Proyect'


import {
    faCircleArrowLeft,
  } from "@fortawesome/free-solid-svg-icons";
import Costos from './costos';
import { Button } from '@mui/material'

import Hola from './ventana';
import CustomNavbar from './app/components/CustomNavbar';
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal';
import EliminarProyecto from './ventana';


export default function DetalleDeProyecto() {
  return (
    <div>
        <CustomNavbar/>
        
    <div className={styles.mp}><MenuPrincipal/></div>  
    
<FontAwesomeIcon icon={faCircleArrowLeft}
style={{ top: '122px', fontSize: 30, left:'15px', position:'absolute', color: '#8ACBB5',border: '1px solid #272C41',borderRadius:'20px'}}
 />
 <br />
 <br />

<div className={styles.all}>
<h1 className={styles.h1titler}> Detalle de proyecto</h1>
<p className={styles.parp}>Datos generales de proyecto</p>
<label className={styles.lnp} htmlFor="">Nombre de Proyecto</label>
      <h5 className={styles.hnp}>Toyota website</h5>


      <label className={styles.c}  htmlFor="">Cliente</label>
      <h5 className={styles.hc}>Toyota de México</h5>

      <label className={styles.fc}  htmlFor="">Fecha de Creación</label>
      <h5 className={styles.hfc}>10 Oct. 2022</h5>
      <label className={styles.ua}  htmlFor="">Ultima Actualización</label>
      <h5 className={styles.hua}>10 Nov. 2022</h5>
     
  <label htmlFor="" className={styles.ds}> 12 h <br /> horas</label>
  <label htmlFor="" className={styles.ds2}> 10  <br /> recursos</label>
  <label htmlFor="" className={styles.ds3}> 120 d <br /> días</label>
  </div>
        <div className={styles.accordion}><Costos/></div>   




<div className={styles.btns}><EliminarProyecto/>

<Button 


href='/editarProyecto'
className={styles.btneditar}
variant="Guardar">Editar</Button></div>



    </div>
  )
}
