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

export default function OrdemAlfabetica() {
  const classes = useStyles();

  const { values, onChange } = useForm({
    text: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };
  
  const splitText = values.text.split('');
  const result = splitText.sort(function (a, b) {
    return a.localeCompare(b);
  });

  const showResult = splitText.length > 0  ? 
    result : 
      'Digite uma palavra'

  return (
    <Card className={classes.card}>
      <CardContent>
        <h3 className={classes.title} >4- Retorna uma palavra em ordem alfabética.</h3>
        <form className={classes.root} noValidate autoComplete="off" >
          <TextField 
            name='text'
            id="text" 
            label="Checar por combinações" 
            variant="outlined"
            value={values.text}
            onChange={handleInputChange}
          />     
        </form>
        {showResult}
      </CardContent>
    </Card> 
  );
}
