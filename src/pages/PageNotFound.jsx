import { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const PageWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9fafb;
  text-align: center;
`;

const Heading = styled(Typography)`
  font-size: 6rem;
  font-weight: bold;
  color: #1e40af;
`;

const SubHeading = styled(Typography)`
  font-size: 1.5rem;
  color: #64748b;
  margin-bottom: 20px;
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
  }
`;

function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageWrapper>
      <Container>
        <Heading>404</Heading>
        <SubHeading>Oops! The page you are looking for does not exist.</SubHeading>
        <StyledButton variant="contained" component={Link} to="/">
          Go to Home
        </StyledButton>
      </Container>
    </PageWrapper>
  );
}

export default PageNotFound;
