import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import styl from './ventana.module.css'

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '390px',
height: '300px',
  bgcolor: '#272C41',
  borderRadius: '10px',
  color: 'white',
  border: '2px solid white',
  boxShadow: 24,
textAlign:'center',
  pt: 2,
  px: 4,
  pb: 3,
};

const styles= {
  position:'absolute',
  top: '663px',
  width: '301px',
  bgcolor:'#8ACBB5',
  border: '1px solid black',
  left: '35px',
  height: '40px',
  borderRadius: '10px',
  color: 'black'
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className={styl.btn} href='/viewProyect'>Si,Eliminar</Button>
      <Button className={styl.btn2} onClick={handleClose}>Cancelar</Button>
     
    </React.Fragment>
  );
}

export default function EliminarProyecto() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <Button sx={{...styles}} onClick={handleOpen}>Eliminar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style, width: 354 }}>
          <h2 className={styl.h2title} id="parent-modal-title">¿Deseas eliminar el proyecto?</h2>
          <p className={styl.sub} id="parent-modal-description">
          Al eliminar el proyecto los datos eliminados no se podrán recuperar.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}