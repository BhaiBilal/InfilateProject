import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from './MenuItem'
import MiddleContent from './MiddleContent'

function Dashboard() {

    const [selected,setSelected] = React.useState('Home')

    return (
        <Box component='div' pt={14} display='flex'>


            <Grid item md={3}>
              <MenuItem setSelected={setSelected} />
            </Grid>
            <Container maxWidth='lg'>

            <MiddleContent selected={selected}  />

            </Container>
        </Box>
    )
}

export default Dashboard
