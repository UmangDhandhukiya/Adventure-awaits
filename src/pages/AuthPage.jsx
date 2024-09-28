import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid, Paper, IconButton, InputAdornment } from '@mui/material';
import { gsap } from 'gsap';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle
  const theme = useTheme();
  const containerRef = React.useRef(null);
  const navigate = useNavigate();

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Simulated login function
  const handleLogin = (values) => {
    // You can add your authentication logic here (e.g., API call for login)
    // On successful login, redirect to the home page:
    console.log('Login Values:', values);
    navigate('/home');
  };

  // Toggle between login and register form animations (zoom effect)
  useEffect(() => {
    if (isLogin) {
      gsap.fromTo(
        '.login-form',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.to('.register-form', { scale: 0.9, opacity: 0, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.fromTo(
        '.register-form',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.to('.login-form', { scale: 0.9, opacity: 0, duration: 0.5, ease: 'power3.out' });
    }
  }, [isLogin]);

  // Background hover effect outside form
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(containerRef.current, {
        background: `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(255, 165, 0, 0.25), transparent 70%)`,
        ease: 'power3.out',
        duration: 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Validation schema using Yup
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const registerValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <Grid
      container
      ref={containerRef}
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#87CEEB',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 0.3s',
      }}
    >
      <Grid item xs={10} sm={8} md={5}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            position: 'relative',
            borderRadius: '16px',
            backdropFilter: 'blur(6px)',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#FF6347' }}>
            {isLogin ? 'Welcome Back!' : 'Join the Adventure!'}
          </Typography>

          {/* Formik for Login */}
          {isLogin ? (
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginValidationSchema}
              onSubmit={handleLogin}
            >
              {({ errors, touched }) => (
                <Form className="login-form">
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={{ mb: 2 }}
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      backgroundColor: '#FF6347',
                      ':hover': { backgroundColor: '#FF4500' },
                    }}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            // Formik for Registration
            <Formik
              initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
              validationSchema={registerValidationSchema}
              onSubmit={(values) => {
                console.log('Register Values:', values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="register-form">
                  <Field
                    as={TextField}
                    label="Full Name"
                    name="fullName"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                  />
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={{ mb: 2 }}
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    as={TextField}
                    label="Confirm Password"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={{ mb: 2 }}
                    error={touched.confirmPassword && !!errors.confirmPassword}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      backgroundColor: '#FF6347',
                      ':hover': { backgroundColor: '#FF4500' },
                    }}
                  >
                    Register
                  </Button>
                </Form>
              )}
            </Formik>
          )}

          {/* Toggle between forms */}
          <Typography
            sx={{ mt: 3, textAlign: 'center', cursor: 'pointer', color: '#FF6347' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'New here? Sign up now!' : 'Already have an account? Login'}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
