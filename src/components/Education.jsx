import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Education = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{fontWeight: 'bold'}}>
        Education
      </Typography>
      <Typography variant="body1" paragraph>
        Education is the foundation of progress, and our initiatives aim to enhance learning experiences 
        and bridge educational gaps.
      </Typography>


      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          1. Design Labs
        </Typography>
        <Typography variant="body1" paragraph>
          We create state-of-the-art design labs where students can engage in STEM learning, robotics, and 
          creative problem-solving. These labs foster innovation and practical skills.
        </Typography>

      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          2. Rural School Support with Tech
        </Typography>
        <Typography variant="body1" paragraph>
          Bridging the digital divide, we equip rural schools with modern technology, internet access, and 
          teacher training to improve the quality of education.
        </Typography>

      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          3. Providing Soft Skills
        </Typography>
        <Typography variant="body1" paragraph>
          Soft skills like communication, adaptability, and teamwork are essential for success. We integrate these 
          into education programs to ensure students are well-rounded and future-ready.
        </Typography>
      </Box>
    </Container>
  );
};

export default Education;
