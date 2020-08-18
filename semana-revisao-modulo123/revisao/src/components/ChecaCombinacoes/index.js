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

export default function ChecaCombinacoes() {
  const classes = useStyles();

  const { values, onChange } = useForm({
    text: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };
  
  const splitText = values.text.split('');
  let combinations = []
  let j = 0; 
  splitText.forEach(i => {
    combinations.push(splitText[j])

    if((splitText[j - 1]) && (splitText[j + 1])){
      combinations.push((splitText[j - 1]) + i + (splitText[j + 1]))
    }

    if(splitText[j + 1]){
      combinations.push(i + (splitText[j + 1]))
    }

    j += 1
  });

  const showResult = combinations.length > 0  ? 
    combinations.join(', ') : 
      'Digite uma palavra'

  return (
    <Card className={classes.card}>
      <CardContent>
        <h3 className={classes.title} >3- Escreve as combinacoes de uma string(palavra).</h3>
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
