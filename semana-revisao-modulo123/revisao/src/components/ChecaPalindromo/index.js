import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useForm } from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minWidth: '96%',
    },
  },
  card: {
    width: '30%',
    textAlign: 'center'
  },
  title: {
    color: '#7f7f7f',
  },
}));

export default function ChecaPalindromo() {
  const classes = useStyles();

  const { values, onChange } = useForm({
    invertText: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const invertedText = values.invertText.split('').reverse().join('');

  const palindrome = invertedText === values.invertText ? 
    'É Palíndromo' :
      'Não é Palíndromo'

  const showResult = invertedText.length > 1 ? 
    palindrome : 
      'Digite uma palavra'

  return (
    <Card className={classes.card}>
      <CardContent>
        <h3 className={classes.title} >2- Checa se uma <b>palavra</b> é ou não um palindromo</h3>
        <form className={classes.root} noValidate autoComplete="off" >
          <TextField 
            name='invertText'
            id="invert-text" 
            label="Checar por palíndromo" 
            variant="outlined"
            value={values.invertText}
            onChange={handleInputChange}
          />     
        </form>
        {showResult}
      </CardContent>
    </Card> 
  );
}
