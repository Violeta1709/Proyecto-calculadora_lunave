import {ArrowBackIosTwoTone}  from '@mui/icons-material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Fab } from '@mui/material';
import styles from './Recursos.module.css'
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal';
import Alert from '@mui/material/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from './app/components/CustomNavbar';


function Recursos(props) {

    {/*selector */}
const [area, setArea] = React.useState('');

const handleChange = (event) => {
  setArea(event.target.value);
};

{/*selector */}
const [puesto, setPuesto] = React.useState('');

const handleChang = (event) => {
  setPuesto(event.target.value);
};

  return (
    <div className={styles.divtodo}>
      <CustomNavbar/>
      <MenuPrincipal/>
      <FontAwesomeIcon className={styles.btnatras} icon={faCircleArrowLeft}
style={{ top: '155px', fontSize:33, left:'15px', position:'absolute', color: '#8ACBB5', border: '1px solid #272C41',borderRadius:'20px'}}
 />
      <h1 className={styles.h1titler}> Agregar recurso</h1>
      <p className={styles.parp}>Agregar recurso al proyecto</p>
      <p className={styles.subr}>Completa las siguientes datos para agregar un nuevo recurso al proyecto</p>
      {/*selector */}

      
     <FormControl  variant="standard" sx={{ m: 2, minWidth: 320, top: '310px', position:'absolute', left:'10px'}}>
        <InputLabel id="demo-simple-select-standard-label">Área</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={area}
          onChange={handleChange}
          label="Area"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Desarrollo</MenuItem>
          <MenuItem value={20}>hghjg</MenuItem>
          <MenuItem value={30}>Pedigree</MenuItem>
        </Select>
      </FormControl>
      {/*fin de selector */}

      {/*selector */}
     <FormControl variant="standard" sx={{ m: 2, minWidth: 320, position:'absolute', bottom:'220px',left:'10px',}}>
        <InputLabel id="demo-simple-select-standard-label">Puesto</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={puesto}
          onChange={handleChang}
          label="Puesto"
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
     {/*TextField */}
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '87%', left:'15px', top: '440px', position:'absolute',},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className={styles.hasignadas} id="standard-basic" label="Horas asignadas" variant="standard" />
    </Box>
  
      {/* fin de TextField */}


      <Stack spacing={2} direction="row">
     
     <Button 
     
     href='/detalleDeProyecto'
     className={styles.btn}
    variant="Guardar">Guardar</Button>
     
   </Stack>
  


    </div>
  )
}

export default Recursos