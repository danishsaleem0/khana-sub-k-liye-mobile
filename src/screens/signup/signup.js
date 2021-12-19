import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Link2, useHistory } from 'react-router-dom';
import HomePage from '../home/home';
import {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword , onAuthStateChanged ,doc, setDoc,collection, db, getDoc,} from '../../config/firebase';
const theme = createTheme();


function Signup() {
    let history = useHistory()
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const saveUser = async () => {
        try{

            let { user } = await createUserWithEmailAndPassword(auth, email, password)
      
            let docRef = doc(db, 'admin', user.uid )
            await setDoc(docRef, {
             
             email: email,
             password: password,
            //  userRole: 'user',
             UID: user.uid
            })
       
           history.push('/home');
          } catch(error) {
           alert(error.message)
          }
    }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
           <CssBaseline />
            <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
         </Avatar>
  
         <Typography component="h1" variant="h5">
              Sign-Up
         </Typography>
  
         <Box component="form" noValidate  sx={{ mt: 3 }}>
         <Grid container spacing={2}>
  
         
  
           
  
  
               
  
               
  
  
  
                <Grid item xs={12}>
                  <TextField
                    onChange={(e)=> {setEmail(e.target.value)}}
                    value={email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    onChange={(e)=> {setPassword(e.target.value)}}
                    value={password}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                </Grid>
  
              <Button
                onClick={saveUser}
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              > Sign Up </Button>
  
  
              {/* <Grid container justifyContent="flex-start">
                  <Grid item>
                  <Link2 to="/signup-with-restuarant" style={{textDecoration: '', color: 'black', fontSize: '12px',}} >
                  Signup with Restuarant        
                
              </Link2>  

              </Grid>
              </Grid>*/}
  
              <Grid container justifyContent="flex-end">
                  <Grid item>
  
                  <Link2 to="/login" style={{fontSize: '15px', fontWeight: 'normal', fontFamily: 'sans-serif'}}  >
      
                    Already have an account? Sign in
                  </Link2>
              </Grid>
              </Grid>
              </Box>
              </Box>
        </Container>
        </ThemeProvider>
    )
}
export default Signup;