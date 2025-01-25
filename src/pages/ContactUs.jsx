import React from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, Box } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import styled from '@emotion/styled';

const PageWrapper = styled(Box)`
  background: #f9fafb;
  min-height: 100vh;
  padding: 80px 0;
  color: #1e293b;
`;

const SectionTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #1e40af;
  margin-bottom: 50px;
`;

const ContactCard = styled(Card)`
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #f59e0b;
  color: #fff;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fde047;
    transform: translateY(-3px);
  }
`;

const SocialIcons = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const contactDetails = [
  {
    icon: <LocationOn sx={{ fontSize: 40, color: '#f59e0b' }} />,
    title: 'Our Office',
    info: '123 Main Street, New York, USA',
  },
  {
    icon: <Phone sx={{ fontSize: 40, color: '#1e40af' }} />,
    title: 'Call Us',
    info: '+1 234 567 890',
  },
  {
    icon: <Email sx={{ fontSize: 40, color: '#64748b' }} />,
    title: 'Email Us',
    info: 'contact@rurafoundation.org',
  },
];

function ContactUs() {
  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <SectionTitle>Contact Us</SectionTitle>

        <Grid container spacing={6}>
          {contactDetails.map((detail, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ContactCard>
                {detail.icon}
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e40af', mt: 2 }}>
                  {detail.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {detail.info}
                </Typography>
              </ContactCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <SectionTitle>Send Us a Message</SectionTitle>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <form>
                  <StyledTextField fullWidth label="Your Name" variant="outlined" required />
                  <StyledTextField fullWidth label="Your Email" variant="outlined" type="email" required />
                  <StyledTextField fullWidth label="Subject" variant="outlined" required />
                  <StyledTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                  <StyledButton type="submit" fullWidth>
                    Submit
                  </StyledButton>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <Button href="#" target="_blank">
              <Facebook sx={{ fontSize: 40, color: '#3b5998' }} />
            </Button>
            <Button href="#" target="_blank">
              <Twitter sx={{ fontSize: 40, color: '#1DA1F2' }} />
            </Button>
            <Button href="#" target="_blank">
              <LinkedIn sx={{ fontSize: 40, color: '#0077b5' }} />
            </Button>
          </SocialIcons>
        </Box>
      </Container>
    </PageWrapper>
  );
}

export default ContactUs;
