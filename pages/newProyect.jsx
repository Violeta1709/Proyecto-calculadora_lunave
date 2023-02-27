import React from 'react'
import styles from './newProyect.module.css'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import Proyect from './app/pages/Proyectos/Proyect';
{/*import boton */}
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
{/*selector */}
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ArrowBackIosTwoTone } from '@mui/icons-material';
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal';

import CustomNavbar from '../pages/app/components/CustomNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Costos from './costos';
import Navbar from './navbar';

function NewProyect() {

{/*selector */}
const [cliente, setCliente] = React.useState('');

const handleChange = (event) => {
  setCliente(event.target.value);
};


  
  return (

<>



  <CustomNavbar/>
  <div className={styles.divNew}>
    
  <FontAwesomeIcon className={styles.btnatras} icon={faCircleArrowLeft}
style={{ top: '25px', fontSize:33, left:'15px', position:'absolute', color: '#8ACBB5', border: '1px solid #272C41',borderRadius:'20px'}}
 />
      <h1 className={styles.h2title}>Nuevo Proyecto</h1>
      
      <h2 className={styles.h2sub}>Datos generales del Proyecto</h2>
      {/*TextField */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className={styles.txtU} id="standard-basic" label="Nombre del Proyecto" variant="standard" />
    </Box>
      {/* fin de TextField */}

     {/*selector */}
     <FormControl className={styles.cliente} variant="standard" sx={{ m: 2, minWidth: 320}}>
        <InputLabel id="demo-simple-select-standard-label">Cliente</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={cliente}
          onChange={handleChange}
          label="Cliente"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Toyota</MenuItem>
          <MenuItem value={20}>Wiskas</MenuItem>
          <MenuItem value={30}>Pedigree</MenuItem>
        </Select>
      </FormControl>
      
      {/*fin de selector */}
      
{/**boton mas */}
      <Fab  href='/recursos'  className={styles.plus} size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      {/* boton mas */}
       <h2 className={styles.Ra}>Recursos asignados</h2> 
  
  
  <div className={styles.acordion}>
  <Proyect/>
 </div>
       
       
       <Stack spacing={6} direction="row">
     
      <Button className={styles.btnsave} variant="Guardar">Guardar</Button>
      
    </Stack>
    </div>
     </> 
  )
}

export default NewProyect