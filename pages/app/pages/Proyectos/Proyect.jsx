import React from 'react';
import {makeStyles}  from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Proyectos/Proyect.module.css'
const useStyles = makeStyles((theme) => ({
}));

function Proyect() {
  const classes = useStyles();

  return (
    <div className={styles.acordion}>
        
<Accordion >
        <AccordionSummary

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <br />
          
 <Typography>Proyecto 1</Typography>
 
        <Typography className={styles.ht1}>puesto<br/></Typography>
         <br />
        
         <Typography className={styles.Typography1}><br /> Back-End Jr</Typography>

         <Typography className={styles.ht2}>horas<br/></Typography>
         <br />
        
         <Typography className={styles.Typography2}><br /> 8 hrs.</Typography>

         
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={styles.acordiontitle}>Área<br/></Typography>
         <br />
        
         <Typography className={styles.Typography3}><br /> Desarrollo</Typography>

         <Typography className={styles.acordiontitle2}>costo x hora<br/></Typography>
         <br />
        
         <Typography className={styles.Typography4}><br /> 1500.00 MXN</Typography>

    
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
              
              <Typography className={styles.ht1}>puesto<br/></Typography>
         <br />
        
         <Typography className={styles.Typography1}><br /> Back-End Jr</Typography>

         <Typography className={styles.ht2}>horas<br/></Typography>
         <br />
        
         <Typography className={styles.Typography2}><br /> 8 hrs.</Typography>

    
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={styles.acordiontitle}>Área<br/></Typography>
         <br />
        
         <Typography className={styles.Typography3}><br /> Desarrollo</Typography>

         <Typography className={styles.acordiontitle2}>costo x hora<br/></Typography>
         <br />
        
         <Typography className={styles.Typography4}><br /> 1500.00 MXN</Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
               
        <Typography className={styles.ht1}>puesto<br/></Typography>
         <br />
        
         <Typography className={styles.Typography1}><br /> Back-End Jr</Typography>

         <Typography className={styles.ht2}>horas<br/></Typography>
         <br />
        
         <Typography className={styles.Typography2}><br /> 8 hrs.</Typography>

    
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={styles.acordiontitle}>Área<br/></Typography>
         <br />
        
         <Typography className={styles.Typography3}><br /> Desarrollo</Typography>

         <Typography className={styles.acordiontitle2}>costo x hora<br/></Typography>
         <br />
        
         <Typography className={styles.Typography4}><br /> 1500.00 MXN</Typography>

        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
              
              <Typography className={styles.ht1}>puesto<br/></Typography>
         <br />
        
         <Typography className={styles.Typography1}><br /> Back-End Jr</Typography>

         <Typography className={styles.ht2}>horas<br/></Typography>
         <br />
        
         <Typography className={styles.Typography2}><br /> 8 hrs.</Typography>

    
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={styles.acordiontitle}>Área<br/></Typography>
         <br />
        
         <Typography className={styles.Typography3}><br /> Desarrollo</Typography>

         <Typography className={styles.acordiontitle2}>costo x hora<br/></Typography>
         <br />
        
         <Typography className={styles.Typography4}><br /> 1500.00 MXN</Typography>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default  Proyect;