import { useEffect } from 'react';
import { Box, Typography, Button, Container } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Cimage1 from "../assets/Cimg1.jpg"
import Cimage2 from "../assets/Cimg2.jpg"
import Cimage3 from "../assets/Cimg3.jpg"
const HeroSection = styled(Box)`
  height:88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  overflow-y:hidden;
  
`;

const GradientText = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledButton = styled(Button)`
  
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(255, 138, 0, 0.3);
`;

const images = [Cimage1,Cimage2,Cimage3];

function Home() {
  useEffect(() => {
      window.scrollTo(0, 0);
  });
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/get-involved");
  };
  return (
    <Carousel
      animation="fade"
      indicators={false}
      navButtonsAlwaysVisible
      interval={2000}
    >
      {images.map((img, index) => (
        <HeroSection
          key={index}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
  
          }}
        >
          <Container>
            <GradientText
              component={motion.div}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            
            >
              Welcome to RURA Foundation
            </GradientText>
            <Typography
              variant="h5"
              sx={{ mt: 2, maxWidth: "600px", mx: "auto" }}
            >
              Transforming lives through entrepreneurship, skill development,
              climate action, and education.
            </Typography>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <StyledButton
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleNavigation}
              >
                Get Involved
              </StyledButton>
            </motion.div>
          </Container>
        </HeroSection>
      ))}
    </Carousel>
  );
}

export default Home;
