import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box
  sx={{ width: '100%' }}
  marginBottom="10px"
  height={200}
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-end" 
  bgcolor="white"
  color="black"
>
<Typography variant="h3" component="h4" display="flex" alignItems="center" style={{ marginLeft: "140px" , marginBottom:"30px" }}>
  About Us
</Typography>

        </Box>
        <Box
          sx={{ width: '100%', height: '100%' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="lightgray"
          color="black"
          p={4}
        >
      <Container maxWidth="lg" style={{ marginTop:"20px"}} >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to anchors
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
  The premier platform for empowering creators and driving the creator economy.
</Typography>


      <Typography variant="h5" component="h2" gutterBottom style={{ marginTop:"40px"}}>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
        We believe in the transformative power of creators and their ability to make a lasting impact on the world. Our mission is to provide a comprehensive ecosystem that enables creators to unlock their full potential and build sustainable income streams.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Challenges We Address
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
        At anchors, we understand the challenges that creators face in monetizing their skills, content, and expertise. We have created a platform that offers a unique blend of cutting-edge technology, community support, and innovative features to help creators thrive in today's digital landscape.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Exclusive Community
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
        anchors fosters an exclusive community of premium creators who have demonstrated their prowess in the digital space. By curating a community of like-minded individuals, we ensure that creators can connect, collaborate, and learn from each other, fostering growth and inspiration.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Tech-Driven Monetization
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
        anchors goes beyond traditional monetization approaches by providing creators with a suite of powerful tech tools and features. Our platform allows creators to offer paid and free services, monetize their time, expertise, and content, and tap into new revenue streams. We empower creators with the control and flexibility they need to succeed.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Innovative Solutions
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
        We understand that creators need more than just tools to succeed. That's why anchors offers a holistic ecosystem that includes detailed audience analysis, exclusive support, and software solutions to simplify the creator's journey. By taking care of the logistics, we enable creators to focus on what they do best: creating captivating content and engaging with their audience.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Scaling for Growth
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}>
        As the creator economy continues to evolve, anchors is built to scale. Our robust infrastructure and scalable architecture ensure a seamless experience for creators and their audiences as our platform expands. We continually evolve our features and functionalities based on user feedback and market trends, staying ahead of the curve and supporting the growth of creators.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Join anchors Today
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: "lighter" }}h>
        Unlock your creative potential. Together, we can shape the future of the creator economy and empower creators to achieve their dreams.
      </Typography>

     
    </Container>
        </Box>
      </div>
    </Container>
  );
};

export default About;
