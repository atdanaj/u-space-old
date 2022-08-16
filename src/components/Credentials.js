import React, { useState } from "react";
import { Box, Button, Card, CardContent, CardActions, TextField} from '@mui/material';

const Credentials = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    return (

        <Card sx={{ maxWidth: 275, display: 'flex', justifyContent: 'center'  }}>
        <CardContent>
        <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      flexDirection: 'column'
    }}
    noValidate
    autoComplete="off"
    >

      <TextField
        required
        id="outlined-required"
        label="E-mail"
        onChange={e => setEmail(e.target.value)}
      />

         <TextField
        required
        id="outlined-disabled"
        type="password"
        label="Password"
        onChange={e => setPassword(e.target.value)}
      />

      </Box>
            <CardActions sx={{ justifyContent: 'center' }}>
    <Button variant="contained">Login</Button>
            </CardActions>
        </CardContent>
    </Card>
      );
}

export default Credentials;