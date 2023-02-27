import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', marginTop:'65px',}}>
      <Tabs sx={{position: 'fixed'}} value={value} onChange={handleChange} centered>
        <Tab  href='/viewProyect' label="Proyectos" />
        <Tab href='/recursos' label=" Recursos" />
        <Tab label="Áreas" />
      </Tabs>
    </Box>
  );
}