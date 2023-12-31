import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Box from '@mui/material/Box';

const RefundPolicy = () => {
  return (
    <Container maxWidth={false} disableGutters style={{ height: '100vh', overflow: 'auto' }}>
      <Box
        sx={{
          width: '100%',
          marginBottom: '10px',
          height: 200,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          bgcolor: 'white',
          color: 'black',
        }}
      >
        <Typography variant="h3" component="h4" display="flex" alignItems="center" style={{ marginLeft: '140px', marginBottom: '30px', fontWeight: 900}}>
          Refund Policy
        </Typography>
      </Box>
      <Box
        sx={{ width: '100%' }}
        bgcolor="lightgray"
        color="black"
        p={4}
      >
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          {/* <Typography variant="h4" component="h1" gutterBottom>
            Welcome to anchors
          </Typography>
          <Typography variant="body1" paragraph style={{ fontWeight: 'lighter' }}>
            The premier platform for empowering creators and driving the creator economy.
          </Typography> */}

         
          <Typography variant="body1" paragraph style={{ fontWeight: 'bold' , marginBottom: '35px'}}>
            Thank you for choosing anchors. We value your satisfaction and want to ensure a positive experience with our digital products. Please review our refund policy below.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
                    1. Eligibility for Refunds:
         </Typography>
           
            <Typography variant="body1" paragraph style={{ fontWeight: 'lighter' }}>
            <ul>
              <li>
                Digital Products: Refunds are available for digital products purchased directly from anchors within 7 days of the purchase date. To be eligible for a refund, the product must not have been downloaded, accessed, or used in any way.
              </li>
              <li>
                In case of a failed subscription payment despite successful payment processing by our payment partners, please contact our support team at support@anchors.in within 4 hours. We will review each case individually and make exceptions when necessary to ensure a satisfactory resolution.
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
          2. Refund Process:
         </Typography>
          <Typography variant="body1" paragraph style={{ fontWeight: 'lighter' }}>
           
            <ul>
              <li>
                To request a refund, please contact our support team at support@anchors.in within the specified refund period.
              </li>
              <li>
                Provide your order details and a valid reason for the refund request.
              </li>
              <li>
                Our team will review your request and determine if you meet the eligibility criteria.
              </li>
              <li>
                If your refund request is approved, we will initiate the refund process within 7 working days and notify you via email.
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
          3. Non-Refundable Items:
         </Typography>
          <Typography variant="body1" paragraph style={{ fontWeight: 'lighter' }}>
          
            <ul>
              <li>
                Certain digital products may be non-refundable, including:
                <ul>
                  <li>Products that have been downloaded, accessed, or used.</li>
                  <li>Services that have already been rendered.</li>
                  <li>Products that were purchased during a promotional or discounted period, unless otherwise specified.</li>
                </ul>
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
          4. Damaged or Defective Products:
         </Typography>
          <Typography variant="body1" paragraph  style={{ fontWeight: 'lighter' }}>
        
            <ul>
              <li>
                If you encounter any issues with the functionality or performance of our digital products, please contact our support team immediately. We will work with you to resolve the issue and provide a suitable solution.
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
          5. No Physical Product Returns:
         </Typography>
          <Typography variant="body1" paragraph style={{ fontWeight: 'lighter' }}>
          
            <ul>
              <li>
                Since we do not offer physical products, there is no requirement to return any items.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph style={{ marginTop:"70px" }}>
            Please note that this refund policy applies only to purchases made directly through the anchors platform. If you purchase our products through third-party platforms or resellers, please refer to their respective refund policies.
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or need further assistance regarding our refund policy, please contact our support team. We are here to assist you.
          </Typography>
          <Typography variant="body1" paragraph>
            Last updated: June 15, 2023
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};

export default RefundPolicy;
