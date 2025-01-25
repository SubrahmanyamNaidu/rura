import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled(Box)`
  padding: 80px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const GradientText = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <AboutSection>
        <Container maxWidth="lg">
          <GradientText variant="h3" component="h1" gutterBottom>
            About Us
          </GradientText>
          <Typography variant="h6" sx={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            At RURA Foundation, we empower communities by driving initiatives in entrepreneurship,
            skill development, climate action, and education. Our mission is to foster a sustainable
            and inclusive future for all.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StyledCard component={motion.div} whileHover={{ scale: 1.05 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    Our Mission
                  </Typography>
                  <Typography>
                    Empowering rural and urban communities through innovation, education, and action to create a better tomorrow.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledCard component={motion.div} whileHover={{ scale: 1.05 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="secondary">
                    Our Vision
                  </Typography>
                  <Typography>
                    A sustainable, skilled, and inclusive future where every individual has equal opportunities to grow and succeed.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledCard component={motion.div} whileHover={{ scale: 1.05 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="success">
                    Our Values
                  </Typography>
                  <Typography>
                    Innovation, inclusivity, empowerment, and sustainability guide everything we do at RURA Foundation.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledCard component={motion.div} whileHover={{ scale: 1.05 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="error">
                    Our Story
                  </Typography>
                  <Typography>
                    From humble beginnings to a national movement, discover how we are making a difference across communities.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>
    </motion.div>
  );
}

export default About;
