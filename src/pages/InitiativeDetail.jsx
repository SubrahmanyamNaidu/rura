import {useEffect}from 'react';
import { useParams } from 'react-router-dom';
import EntrepreneurshipDevelopment from '../components/EntrepreneurshipDevelopment';
import SkillDevelopment from '../components/SkillDevelopment';
import ClimateAction from '../components/ClimateAction';
import Education from '../components/Education';
import PsychologicalEducation from '../components/PsychologicalEducation';
import { Container, Typography } from '@mui/material';

// Define mapping between route params and components
const initiativeComponents = {
  'entrepreneurship-development': EntrepreneurshipDevelopment,
  'skill-development': SkillDevelopment,
  'climate-action':ClimateAction,
  'education':Education,
  'psychological-education':PsychologicalEducation
};

const InitiativeDetails = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
  });
  const { id } = useParams();
  const InitiativeComponent = initiativeComponents[id];

  if (!InitiativeComponent) {
    return (
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" color="error">
          Initiative not found
        </Typography>
      </Container>
    );
  }

  return <InitiativeComponent />;
};

export default InitiativeDetails;
