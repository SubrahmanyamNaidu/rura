import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const SkillDevelopment = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{fontWeight: 'bold'}}>
        Skill Development
      </Typography>
      <Typography variant="body1" paragraph>
        The RURA Foundation is committed to equipping individuals with the skills they need to succeed in a rapidly evolving world. 
        Our programs focus on both technical and soft skills, ensuring holistic personal and professional growth.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          1. Equip Students and Youth with Industry-Ready Skills and Soft Skills
        </Typography>
        <Typography variant="body1" paragraph>
          We prepare students and young professionals for the workforce by offering training in communication, teamwork, 
          and problem-solving. Our programs bridge the gap between academic learning and industry requirements, ensuring 
          participants are job-ready.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          2. Industry 5.0 Skills
        </Typography>
        <Typography variant="body1" paragraph>
          In the era of Industry 5.0, where humans and technology collaborate seamlessly, we provide advanced training 
          in robotics, AI, and human-machine interaction. These skills are essential for staying competitive in the 
          future workforce.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          3. Personality Development Skills
        </Typography>
        <Typography variant="body1" paragraph>
          Confidence, leadership, and effective communication are key to personal success. Our personality development 
          programs focus on enhancing self-awareness and building interpersonal skills to help individuals excel in 
          various aspects of life.
        </Typography>
        
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          4. Additional Courses – Upcoming
        </Typography>
        <Typography variant="body1" paragraph>
          Our skill development portfolio includes a variety of specialized courses:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Financial literacy" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Digital marketing" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Leadership and team management" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Time management and productivity enhancement" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Emotional intelligence and resilience" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default SkillDevelopment;
