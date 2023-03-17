import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

import { filterContact } from 'redux/contacts/contacts-slice';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box component="div">
      <TextField
        label="Find contact by name"
        variant="outlined"
        className={css.input}
        onChange={e => dispatch(filterContact(e.target.value))}
        fullWidth
      />
    </Box>
  );
};

export default Filter;
