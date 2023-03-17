import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { logIn } from 'redux/auth/auth-operations';
import { clearContacts } from 'redux/contacts/contacts-slice';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearContacts());
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
