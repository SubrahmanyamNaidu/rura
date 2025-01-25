import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Container } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { VolunteerActivism, Handshake, Favorite } from '@mui/icons-material';

const InvolvementSection = styled(Box)`
  padding: 80px 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  text-align: center;
`;

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 3rem;
  color: #6a11cb;
`;

const involvementOptions = [
  {
    title: 'Volunteer With Us',
    description: 'Join hands with us and contribute your time and skills to make an impact in communities.',
    buttonText: 'Sign Up as Volunteer',
    icon: <VolunteerActivism sx={{ fontSize: 60, color: '#6a11cb' }} />,
  },
  {
    title: 'Partner With Us',
    description: 'Collaborate with us to scale our initiatives and create meaningful social change.',
    buttonText: 'Become a Partner',
    icon: <Handshake sx={{ fontSize: 60, color: '#ff6f00' }} />,
  },
  {
    title: 'Donate',
    description: 'Support our mission by making a financial contribution to empower lives and communities.',
    buttonText: 'Donate Now',
    icon: <Favorite sx={{ fontSize: 60, color: '#e91e63' }} />,
  },
];

const stats = [
  { label: 'Volunteers Engaged', value: 5000 },
  { label: 'Partnerships Formed', value: 200 },
  { label: 'Funds Raised', value: '$1.2M' },
];

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Volunteering with RURA Foundation has been a life-changing experience for me.',
  },
  {
    name: 'Jane Smith',
    feedback: 'Partnering with RURA Foundation helped us reach a larger community and create impact.',
  },
];

function GetInvolved() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <InvolvementSection>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            Get Involved with RURA Foundation
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Be a part of the change! Whether you volunteer, partner, or donate, your contribution helps us achieve our mission of transforming lives and communities.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {involvementOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledCard component={motion.div} whileHover={{ scale: 1.05 }} sx={{ p: 3, textAlign: 'center' }}>
                  <IconWrapper>{option.icon}</IconWrapper>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      {option.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {option.description}
                    </Typography>
                    <Button
                      variant="contained"
                    
                      component={motion.button}
                      whileHover={{ scale: 1.1 }}
                      sx={{backgroundColor:"#ff8a00",paddingY:1.5}}
                    >
                      {option.buttonText}
                    </Button>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          {/* Animated Stats Section */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
              Our Impact
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                    <Typography variant="h3" sx={{ color: '#ffeb3b', fontWeight: 'bold' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="h6">{stat.label}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Testimonials Section */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
              Hear from Our Supporters
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <StyledCard sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                      "{testimonial.feedback}"
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      - {testimonial.name}
                    </Typography>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </InvolvementSection>
    </motion.div>
  );
}

export default GetInvolved;
