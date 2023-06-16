import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Contact = () => {
  return (
    <Container maxWidth={false} style={{ backgroundColor: 'lightgray', display: 'flex', flexDirection: 'column' ,width: '100%', height: '100vh'}}>
      <Typography variant="h3" component="h4" display="flex" alignItems="center" style={{ marginLeft: '30px' }}>
        Contact Us 
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          border={2}
          borderColor="black"
          height={280}
          width={600}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={6}
          padding={2}
          margin={3}
          bgcolor="white"
          color="black"
        >
          <div style={{ margin: '10px' }}>
            <Typography variant="h" component="h2" style={{ marginBottom: '20px' }}>
              Reach Out
            </Typography>
            <Typography variant="h6" component="p" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
  <PhoneIcon style={{ marginRight: '5px' }} />
  Phone: 8692006538
</Typography>

<Typography variant="h6" component="p" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
  <EmailIcon style={{ marginRight: '5px' }} />
  Email: info@anchors.in
</Typography>

          </div>
        </Box>

        <Box
          border={2}
          borderColor="black"
          height={280}
          width={600}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={6}
          padding={2}
          margin={3}
          bgcolor="white"
          color="black"
        >
          <div style={{ margin: '10px' }}>
          <Typography variant="h" component="h2" style={{ marginBottom: '20px' }}>
            Address
            </Typography>
            <Typography variant="h6" component="p" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
  <LocationOnIcon style={{ marginRight: '5px' }} />
  B-8, Basement Sector 2 Noida 201301
</Typography>

          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Contact;
