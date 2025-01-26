import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const EntrepreneurshipDevelopment = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5}}>
      <Typography variant="h4" gutterBottom color="primary" sx={{fontWeight: 'bold'}} >
        Entrepreneurship Development
      </Typography>
      <Typography variant="body1" paragraph>
        Entrepreneurship is the cornerstone of economic and social progress. The RURA Foundation’s programs foster innovation and provide individuals with the skills, knowledge, and resources needed to build sustainable businesses. We work across sectors to ensure entrepreneurial growth in both rural and urban communities.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>1. Rural Entrepreneurship Development</Typography>
        <Typography variant="body1" paragraph>
          We empower rural communities by nurturing local entrepreneurs and promoting self-sustaining economic models. From handicrafts to small-scale manufacturing, our programs provide training, resources, and mentorship to transform ideas into thriving businesses. This initiative also focuses on creating local job opportunities and reducing migration to urban areas.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>2. Entrepreneurship for Kids</Typography>
        <Typography variant="body1" paragraph>
          Our unique programs inspire young minds to think creatively and develop problem-solving skills. Through interactive workshops, competitions, and mentorship, children learn the fundamentals of business and innovation. By cultivating an entrepreneurial mindset early on, we prepare the next generation to tackle future challenges.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>3. Agripreneurship Development</Typography>
        <Typography variant="body1" paragraph>
          Agriculture remains a vital sector for many communities, and innovation in this area can drive economic growth. Our agripreneurship initiatives equip farmers and agri-professionals with modern techniques, business acumen, and access to markets. We support ventures in organic farming, agri-tech, and sustainable practices to ensure food security and profitability.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>4. Social Entrepreneurship Development</Typography>
        <Typography variant="body1" paragraph>
          Addressing social challenges through innovative business models is at the heart of this initiative. We mentor and support individuals passionate about creating social impact while ensuring financial sustainability. These ventures tackle issues like education, healthcare, and environmental conservation.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>5. Technological Business Development</Typography>
        <Typography variant="body1" paragraph>
          Technology is a driving force in today’s economy. We empower entrepreneurs to leverage cutting-edge technologies such as AI, IoT, and blockchain to create innovative solutions. Our programs provide access to technical training, funding opportunities, and industry networks.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>6. Green Business Development</Typography>
        <Typography variant="body1" paragraph>
          Environmental sustainability is a priority, and our green business initiatives promote eco-friendly practices in entrepreneurship. From renewable energy startups to sustainable product development, we guide businesses in aligning profitability with environmental responsibility.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>7. Digitizing the Businesses</Typography>
        <Typography variant="body1" paragraph>
          Traditional businesses must adapt to the digital age to remain competitive. Our programs focus on helping businesses transition to e-commerce, adopt digital marketing strategies, and automate processes. We aim to create a seamless digital transformation for enterprises.
        </Typography>
      </Box>
    </Container>
  );
};

export default EntrepreneurshipDevelopment;
