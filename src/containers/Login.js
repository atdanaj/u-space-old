import React from "react";
import { Box} from '@mui/material';
import Credentials from "../components/Credentials";
// import "./Login.css";

export default function Login() {

  return (
<div style={{ width: '100%' }}>
<Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
      <img src={require('../images/full-logo.png')} height="500px" width="500px" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
       <Credentials/>
      </Box>
</div>
  );
}