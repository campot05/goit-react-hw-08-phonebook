import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import { clearContacts } from 'redux/contacts/contacts-slice';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearContacts());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Stack spacing={2} direction="row">
        <button className={css.button} onClick={() => handleLogOut()}>
          Logout
        </button>
      </Stack>
    </div>
  );
};
