import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const registrationOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'institute', label: 'Institute' },
];

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnic, setCnic] = useState('');
  const [option, setOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, cnic, option });
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
        <h1 style={{textAlign:'center'}}>USER REGISTRATION</h1>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="CNIC"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Type"
        value={option}
        onChange={(e) => setOption(e.target.value)}
        fullWidth
        margin="normal"
      >
        {registrationOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
    </Box>
  );
};

export default UserRegistration;
