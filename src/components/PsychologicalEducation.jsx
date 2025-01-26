import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const PsychologicalEducation = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{fontWeight: 'bold'}}>
        Psychological Education
      </Typography>
      <Typography variant="body1" paragraph>
        Mental well-being is as important as physical health. Our psychological education programs 
        address mental health challenges and promote emotional resilience.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Suggestions for New Areas of Work
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Providing mental health support through counseling, stress management workshops, and awareness campaigns." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Offering mindfulness and laughter therapy sessions to improve emotional health." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Developing coping strategies for managing stress and enhancing productivity." />
          </ListItem>
        </List>
      </Box>


    </Container>
  );
};

export default PsychologicalEducation;
