import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import styles from './splash.module.css'
import Login from '../../Login';
import { makeStyles } from '@mui/styles';


function myGreeting() {
location.href = '/login'

}

function Splash() {

  const myTimeout = setTimeout(myGreeting, 10000);
  return (
    <div className={styles.container}>
<label className={styles.lunave} htmlFor="">Lunave</label>
<label className={styles.calculadora}>Calculadora</label>

    </div>
  )
}

const myTimeout = setTimeout(Splash, 10000);

function myStopFunction() {
  clearTimeout(myTimeout);
}




export default Splash