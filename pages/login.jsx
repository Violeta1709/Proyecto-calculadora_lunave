import React, { useEffect } from 'react'
import TextField  from '@mui/material/TextField'
import styles from './login.module.css'
import { Box } from '@mui/system';
import { Button, Link } from '@mui/material';
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal'
import { useState } from 'react';
import axios from 'axios';
import NewProyect from './newProyect';

import CustomNavbar from './app/components/CustomNavbar';





{/*otro metodo */}


   


{/*fin del metodo */}
export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const login = () => {

    
    const data = {usuario:usuario, contraseña: contraseña};
    axios.post("http://localhost:8080/api/login", data).then((response) => {
      console.log('prueba',response.data);
      if(usuario && contraseña){
        document.write('inicio de sesion')
          }
    
   } );}



    return ( 
      

   <div className={styles.divlogin}>
<CustomNavbar/>



<h1 className={styles.h1title}>Bienvenido a Lunave</h1>
<p className={styles.Ic}>Ingresa Credenciales</p>

<Box className={styles.form}
component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
      >
       <TextField 
        className={styles.txtU} 
        id="standard-basic" 
        label="Usuario"
        name='usuario'
        onChange={(e)=> setUsuario(e.target.value)}
    
        variant="standard" />
       <br/>
       <br/>
       <TextField 
       type="password"
       className={styles.txtU} 
       id="standard-basic" 
       label="Contraseña"
       name='contraseña'

       onChange={(e)=> setContraseña(e.target.value)}
       variant="standard" />
       <br/>
      <br/>
      </Box>
      <button 
      className={styles.btnIngreso}
      
      ><a href='/viewProyect'> Ingresar</a>
       
      </button>

      

      


      
 <footer className={styles.fderehos}>
   <button className={styles.btnRecuperar} ><a href="/recuperarUsuario"></a>
        Recuperar Contraseña
      </button>

     
  <p className={styles.dr}>
  © TODOS LOS DERECHOS RESERVADOS Lunave Multimedios MÉXICO 2023

  </p>
 </footer>
    </div>
  )
    }   

  
 
    

  
  
  




