import React, { useEffect } from 'react'
import TextField  from '@mui/material/TextField'
import styles from './components/login.module.css'
import { Box } from '@mui/system';
import { Button, Link } from '@mui/material';
import MenuPrincipal from '../customProyects/MenuPrincipal'
import { useState } from 'react';
import axios from 'axios';
import NewProyect from '../../../newProyect';





{/*otro metodo */}


   


{/*fin del metodo */}
export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const login = () => {


   
      
    
    const data = {usuario:usuario, contraseña: contraseña};
    axios.get("http://localhost:8080/api", data).then((response) => {
      console.log('prueba',response.data);
      if(usuario && contraseña){
        document.write('se inicio sesion')
          }
    
   } );}




    return ( 
   <div className={styles.divlogin}>




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
      onClick={login}>
        Ingresar
      </button>

      

      


      
 <footer className={styles.fderehos}>
   <button href='/recuperarUsuario' className={styles.btnRecuperar}   >
        Recuperar Contraseña
      </button>

     
  <p className={styles.dr}>
  © TODOS LOS DERECHOS RESERVADOS Lunave Multimedios MÉXICO 2023

  </p>
 </footer>
    </div>
  )
    }   

  
 
    

  
  
  




