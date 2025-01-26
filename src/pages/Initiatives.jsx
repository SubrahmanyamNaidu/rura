import { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import T1 from '../assets/t1.png'
import T2 from '../assets/t2.png'
import T3 from '../assets/t3.png'
import T4 from '../assets/t4.png'
import T5 from '../assets/t5.png'
const GradientText = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InitiativesSection = styled(Box)`
  padding: 80px 20px;
  background-color: #f4f4f4;
`;

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const InitiativeTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const initiatives = [
  {
    title: 'Entrepreneurship Development',
    description: 'Fostering entrepreneurial ecosystems in rural and urban areas with mentorship programs, workshops, and funding opportunities.',
    image: T1,
    path: 'entrepreneurship-development',
  },
  {
    title: 'Skill Development',
    description: 'Equipping individuals with future-ready skills in AI, robotics, and IoT, along with soft skills for professional success.',
    image: T2,
    path: 'skill-development',
  },
  {
    title: 'Climate Action',
    description: 'Promoting sustainability through tree plantation drives, eco-friendly practices, and climate awareness campaigns.',
    image: T3,
    path: 'climate-action',
  },
  {
    title: 'Education',
    description: 'Bridging education gaps by offering scholarships, rural school support, and e-learning initiatives.',
    image: T4,
    path: 'education',
  },
  {
    title: 'Psychological Education',
    description: 'Providing mental health support through counseling, awareness campaigns, and stress management workshops.',
    image: T5,
    path:'psychological-education'
  },
];

function Initiatives() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(`/initiatives/${path}`);
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <InitiativesSection>
        <GradientText variant="h3" sx={{ maxWidth: '800px', margin: '0 auto 40px',textAlign:'center' }} gutterBottom >
            Our Initiatives
          </GradientText>
          <Typography variant="h6" sx={{ maxWidth: '800px', margin: '0 auto 40px',textAlign:'center' }}>
            Discover our core initiatives that empower communities and drive sustainable development.
          </Typography>
        <Grid container spacing={4} justifyContent="center">
          {initiatives.map((initiative, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard component={motion.div} whileHover={{ scale: 1.05 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={initiative.image}
                  alt={initiative.title}
                  
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {initiative.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {initiative.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleLearnMore(initiative.path)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </InitiativesSection>
    </motion.div>
  );
}

export default Initiatives;
