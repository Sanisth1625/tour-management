import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Card, CardContent, Alert, IconButton, InputAdornment } from '@mui/material';
import { Description, AttachMoney, Hotel, Tour, TransferWithinAStation, LocalOffer } from '@mui/icons-material';

const PackageManagement = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    accommodations: '',
    tours: '',
    transfers: '',
    packageType: 'Day Tour',
    specialDiscounts: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/packages', formData);
      setSuccessMessage('Package added successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        accommodations: '',
        tours: '',
        transfers: '',
        packageType: 'Day Tour',
        specialDiscounts: ''
      });
    } catch (err) {
      setError('Error adding package');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Add New Package
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Description />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Description />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoney />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Accommodations"
                  name="accommodations"
                  value={formData.accommodations}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Hotel />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Tours"
                  name="tours"
                  value={formData.tours}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tour />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Transfers"
                  name="transfers"
                  value={formData.transfers}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TransferWithinAStation />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Package Type"
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  select
                  SelectProps={{ native: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalOffer />
                      </InputAdornment>
                    ),
                  }}
                >
                  <option value="Day Tour">Day Tour</option>
                  <option value="Round Tour">Round Tour</option>
                  <option value="Custom">Custom</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Special Discounts"
                  name="specialDiscounts"
                  value={formData.specialDiscounts}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalOffer />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add Package
                </Button>
              </Grid>
            </Grid>
          </form>
          {successMessage && <Alert severity="success" style={{ marginTop: '1rem' }}>{successMessage}</Alert>}
          {error && <Alert severity="error" style={{ marginTop: '1rem' }}>{error}</Alert>}
        </CardContent>
      </Card>
    </Container>
  );
};

export default PackageManagement;
