import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const ClimateAction = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{fontWeight: 'bold'}}>
        Climate Action
      </Typography>
      <Typography variant="body1" paragraph>
        Protecting our planet is a shared responsibility, and the RURA Foundation actively promotes sustainable 
        practices through innovative climate action initiatives.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          1. Greening the Business
        </Typography>
        <Typography variant="body1" paragraph>
          We guide businesses in adopting environmentally sustainable practices to reduce their carbon footprint 
          and promote green growth.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          2. Designs for Making Urban Forests
        </Typography>
        <Typography variant="body1" paragraph>
          Our urban forest initiatives involve designing green spaces in cities to combat heat islands and 
          improve air quality. These projects bring communities together to create a healthier urban environment.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          3. Plantation Drives
        </Typography>
        <Typography variant="body1" paragraph>
          Planting trees is one of the most effective ways to restore biodiversity. Our large-scale plantation 
          drives engage communities and promote awareness about the importance of afforestation.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          4. Eco-Friendly Practices
        </Typography>
        <Typography variant="body1" paragraph>
          We advocate for the use of sustainable materials, recycling, and energy-efficient practices in daily 
          life and businesses.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          5. River Cleaning Campaigns
        </Typography>
        <Typography variant="body1" paragraph>
          Water bodies are vital ecosystems, and our campaigns focus on cleaning and preserving rivers through 
          community involvement and innovative waste management techniques.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          6. Restore Earth Initiatives
        </Typography>
        <Typography variant="body1" paragraph>
          These initiatives combine afforestation, soil conservation, and biodiversity preservation to rejuvenate the planet.
        </Typography>
      </Box>
    </Container>
  );
};

export default ClimateAction;
