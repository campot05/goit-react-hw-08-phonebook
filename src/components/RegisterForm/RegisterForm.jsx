import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className={css.form}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        fullWidth
      />
      <button type="submit" className={css.button}>
        Log In
      </button>
    </Box>
    //  <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //    <label className={css.label}>
    //      Username
    //      <input type="text" name="name" />
    //    </label>
    //    <label className={css.label}>
    //      Email
    //      <input type="email" name="email" />
    //    </label>
    //    <label className={css.label}>
    //      Password
    //      <input type="password" name="password" />
    //    </label>
    //    <button type="submit" className={css.button}>
    //      Register
    //    </button>
    //  </form>
  );
};
