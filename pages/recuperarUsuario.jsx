import React from 'react'
import TextField from '@mui/material/TextField';

import styles from './login.module.css'
import { Box } from '@mui/system';

function RecuperarUsuario() {
  return (
    <div className={styles.divlogin}>
        <h1>Lunave</h1>
        <p>Ingresa nombre de usuario para recuperar contraseña</p>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField id="standard-basic" label="   Usuario   " variant="standard" />
    </Box>
       <br/>
      <br/>
       <button className={styles.btnIngreso} variant="outlined" color="primary">
  Recuperar Contraseña
       </button>
    </div>
  )
}

export default RecuperarUsuario;