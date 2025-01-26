import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Button, Box, Alert } from '@mui/material';
import { db, collection, addDoc } from '../config/firebase';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const eventOptions = ['CXO Connect','Sustainability Summit'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.event) {
      setError('Please fill in all the fields');
      return;
    }

    try {
      await addDoc(collection(db, 'eventRegistrations'), {
        name: formData.name,
        email: formData.email,
        event: formData.event,
        timestamp: new Date()
      });
      setIsSubmitted(true);
      setError('');
      setFormData({ name: '', email: '', event: '' });
    } catch (err) {
      setError('Error submitting the form. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h3" gutterBottom color="primary">
        Event Registration
      </Typography>

      {isSubmitted && <Alert severity="success">Your registration has been submitted successfully!</Alert>}
      {error && <Alert severity="error">{error}</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
        />
        <TextField
          select
          fullWidth
          label="Select Event"
          name="event"
          variant="outlined"
          value={formData.event}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
        >
          {eventOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default EventRegistration;
