import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

let userSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/
    )
    .required(),
  password: yup.string().required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const isValid = await userSchema.isValid(data);

    if (isValid) {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    } else {
      return Notify.failure('Please enter correct data');
    }
  };

  const errorMessageEmail =
    !!errors?.email?.message && 'Please enter correct email';
  const errorMessagePassword =
    !!errors?.password?.message && 'Field cannot be empty';

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={e => handleSubmit(onSubmit(e))}
      className={css.form}
    >
      <TextField
        id="outlined-basic 1"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        fullWidth
        required
        {...register('email')}
        error={!!errors?.email?.message}
        helperText={errorMessageEmail}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        fullWidth
        required
        {...register('password')}
        error={!!errors?.password?.message}
        helperText={errorMessagePassword}
      />
      <button type="submit" className={css.button}>
        Log In
      </button>
    </Box>
  );
};
