import * as React from 'react';

import Link from 'next/link';

import styles from './MenuPrincipal.module.css'
import { Box } from '@mui/material';

export default function MenuPrincipal() {


  return (
<>

<div className={styles.mp}>
  <Box  className={styles.nav}
  color= "inherit">
      <Link className={styles.nav} href="/newProyect" rel="nofollow" underline="none">
        {'Proyectos' }
      </Link>
      <Link  className={styles.nav} href="/hola" rel="nofollow" underline="hover">
        {'Recursos'}
      </Link>
      <Link  className={styles.nav}  href="/detalleProyecto" rel="nofollow" underline="always">
        {'Área'}
      </Link>
      </Box>
      </div>
    </>
  );
}