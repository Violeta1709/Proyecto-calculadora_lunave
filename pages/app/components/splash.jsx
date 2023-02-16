import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './splash.module.css'
function Splash() {
  return (
    <div>
<label className={styles.lunave} htmlFor="">Lunave</label>
<Box sx={{ position:'absolute',left: '195px', top:'330px', display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default Splash