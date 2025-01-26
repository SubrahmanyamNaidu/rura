import { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Article, Star, CloudDownload } from '@mui/icons-material';
import styled from '@emotion/styled';

const PageWrapper = styled(Box)`
  background: #f4f6f8;
  min-height: 100vh;
  padding: 0 0 50px 0;
  color: #1e293b;
`;

const HeroSection = styled(Box)`
  text-align: center;
  padding: 100px 20px;
  background: url('https://source.unsplash.com/1600x900/?success,learning') no-repeat center/cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 58, 138, 0.8);
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
  color: #1e3a8a;
  margin-bottom: 60px;
`;

const StyledCard = styled(Card)`
  background: #ffffff;
  color: #1e293b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  padding: 30px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled(Box)`
  background: #1e3a8a;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

const StyledButton = styled(Button)`
  background-color: #f59e0b;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  padding: 12px 24px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color:#b1b1b0;
    transform: translateY(-3px);
  }
`;

const resourcesData = [
  {
    icon: <Article sx={{ fontSize: 50, color: '#f3f4f6' }} />,
    title: 'Latest Blogs',
    description: 'Explore insights and articles on entrepreneurship, education, and sustainability.',
    link: '#',
  },
  {
    icon: <Star sx={{ fontSize: 50, color: '#f3f4f6' }} />,
    title: 'Success Stories',
    description: 'Read about the achievements of people who transformed their lives with our programs.',
    link: '#',
  },
  {
    icon: <CloudDownload sx={{ fontSize: 50, color: '#f3f4f6' }} />,
    title: 'Download Materials',
    description: 'Brochures, guides, and registration forms to get you started.',
    link: '#',
  },
];

function Resources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }); 
  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#fbbf24' }}>
            Resources Hub
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '700px', margin: '20px auto', color: '#f3f4f6' }}>
            Empower yourself with the right information, success stories, and downloadable resources to help you grow.
          </Typography>
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg">
        <SectionTitle>Explore Our Resources</SectionTitle>

        <Grid container spacing={6}>
          {resourcesData.map((resource, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledCard>
                <IconWrapper>{resource.icon}</IconWrapper>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2, color: '#1e3a8a' }}>
                  {resource.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, textAlign: 'center', mb: 3 }}>
                  {resource.description}
                </Typography>
                <StyledButton fullWidth href={resource.link}>
                  Learn More
                </StyledButton>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
}

export default Resources;
