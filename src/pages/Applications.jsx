import { useState,useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, TextField, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import A1 from '../assets/a1.png'
import A2 from '../assets/a2.png'
import A3 from '../assets/a3.png'


const PageWrapper = styled(Box)`
  background: #f9fafb;
  min-height: 100vh;
  padding: 0 0 50px 0;
  color: #1e293b;
`;

const HeroSection = styled(Box)`
  text-align: center;
  padding: 100px 20px;
  background: url('https://source.unsplash.com/1600x900/?success,goal') no-repeat center/cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 64, 175, 0.8);
  }
`;

const HeroContent = styled(Box)`
  position: relative;
  z-index: 2;
  color: #ffffff;
`;

const SectionTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #1e40af;
  margin-bottom: 50px;
`;

const StyledCard = styled(Card)`
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const StyledButton = styled(Button)`
  background-color: #f59e0b;
  color: #ffffff;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fde047;
    transform: translateY(-3px);
  }
`;

const programs = [
  {
    title: 'Entrepreneurship Program',
    description: 'Empowering individuals to start and grow their businesses.',
    image: A3,
  },
  {
    title: 'Volunteer Program',
    description: 'Join our volunteer network and make an impact in your community.',
    image: A1,
  },
  {
    title: 'Skill Development Program',
    description: 'Enhance your skills with our expert-led training programs.',
    image: A2,
  },
];

function Applications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: '',
  });

  const programsOptions = ['Entrepreneurship Program', 'Volunteer Program', 'Skill Development Program'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your application has been submitted successfully!');
  };

  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>
            Applications and Registrations
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '700px', margin: '20px auto', color: '#f3f4f6' }}>
            Register for our programs and become a part of our growing community.
          </Typography>
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg">
        <SectionTitle>Available Programs</SectionTitle>

        <Grid container spacing={6}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledCard>
                <img src={program.image} alt={program.title} style={{ width: '100%', borderRadius: '10px' }} />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e40af', mb: 2 }}>
                    {program.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {program.description}
                  </Typography>
                  <StyledButton>Apply Now</StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <SectionTitle>Apply Now</SectionTitle>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    select
                    label="Select Program"
                    name="program"
                    variant="outlined"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  >
                    {programsOptions.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />
                  <StyledButton type="submit" fullWidth>
                    Submit Application
                  </StyledButton>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </PageWrapper>
  );
}

export default Applications;
