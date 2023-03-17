// import { NavLink } from 'react-router-dom';
import { Link } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
