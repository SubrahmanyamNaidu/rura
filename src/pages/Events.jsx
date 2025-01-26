import { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import styled from '@emotion/styled';

const PageWrapper = styled(Box)`
  background: #f9fafb;
  min-height: 100vh;
  padding: 0 0 50px 0;
  color: #1e293b;
`;

const HeroSection = styled(Box)`
  text-align: center;
  padding: 100px 20px;
  background: url('https://source.unsplash.com/1600x900/?conference,meeting') no-repeat center/cover;
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
  transition: all 0.3s ease-in-out;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const StyledButton = styled(Button)`
  background-color: #f59e0b;
  color: #ffffff;
  font-weight: bold;
  border-radius: 30px;
  padding: 12px 24px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fde047;
    transform: translateY(-3px);
  }
`;

const upcomingEvents = [
  {
    title: 'Entrepreneurship Bootcamp 2024',
    date: 'March 15, 2024',
    location: 'Andhra Pradesh, Kakinada',
    description: 'Join us for a hands-on bootcamp to empower aspiring entrepreneurs.',
    image: 'https://source.unsplash.com/400x300/?business,startup',
  },
  {
    title: 'Sustainability Summit',
    date: 'April 10, 2024',
    location: 'Andhra Pradesh, Kakinada',
    description: 'An event dedicated to climate action and sustainable business practices.',
    image: 'https://source.unsplash.com/400x300/?nature,sustainability',
  },
];

const pastEvents = [
  {
    title: 'Tech Innovation Conference 2023',
    description: 'Exploring the future of AI and technology.',
    image: 'https://source.unsplash.com/400x300/?technology,conference',
  },
  {
    title: 'Women in Leadership',
    description: 'Empowering women to take leadership roles.',
    image: 'https://source.unsplash.com/400x300/?women,leadership',
  },
];

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>
            Upcoming Events
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '700px', margin: '20px auto', color: '#f3f4f6' }}>
            Stay informed about our latest events and initiatives. Connect, learn, and grow with us.
          </Typography>
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg">
        <SectionTitle>Upcoming Events</SectionTitle>

        <Grid container spacing={6}>
          {upcomingEvents.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledCard>
                <img src={event.image} alt={event.title} style={{ width: '100%', borderRadius: '10px' }} />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#1e40af' }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#64748b', mb: 1 }}>
                    {event.date} | {event.location}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {event.description}
                  </Typography>
                  <StyledButton fullWidth href="#">
                    Register Now
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <SectionTitle sx={{ mt: 8 }}>Past Events</SectionTitle>

        <Grid container spacing={6}>
          {pastEvents.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledCard>
                <img src={event.image} alt={event.title} style={{ width: '100%', borderRadius: '10px' }} />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#1e40af' }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body1">{event.description}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
}

export default Events;
