import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { registerUser } from 'redux/auth/auth-operations';
import { Notify } from 'notiflix';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

let userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/
    )
    .required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z\d\W]{6,}$/)
    .required(),
});

export const RegisterForm = () => {
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
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    const isValid = await userSchema.isValid(data);
    if (isValid) {
      dispatch(
        registerUser({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    } else {
      return Notify.failure('Please enter correct data');
    }
  };

  const errorMessageName = !!errors?.name?.message && 'Field cannot be empty';
  const errorMessageEmail =
    !!errors?.email?.message && 'Please enter correct email';
  const errorMessagePassword =
    !!errors?.password?.message &&
    'Password must contain at least 6 characters and/or numbers';

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
        id="outlined-basic 2"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        fullWidth
        required
        {...register('name')}
        error={!!errors?.name?.message}
        helperText={errorMessageName}
      />
      <TextField
        id="outlined-basic"
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
        id="outlined-basic 3"
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
