import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './costos.module.css'
import MenuPrincipal from './app/pages/customProyects/MenuPrincipal';
export default function Costos() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.acordeon}>

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

    