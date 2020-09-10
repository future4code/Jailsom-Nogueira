### Exercício 1

a)

```
RowDataPacket {
  id: '001',
  name: 'Moacyr Franco',
  salary: 400000,
  birth_date: 1948-08-25T03:00:00.000Z,
  gender: 'male'
}
```

b)

```
const searchActor = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
    console.log(result[0][0]);
    return result;

  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
searchActor('Moacyr Franco');
```

c)

```
const countActors = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    console.log(count);
    return count;

  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
 countActors('male');
```

### Exercício 2

a)

```
const updateActor = async (id: string, salary: number): Promise<any> => {
  try {
    await connection('Actor')
      .update({
        salary: salary,
      })
      .where('id', id);
  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
updateActor('001', 500000);
```

b)

```
const deleteActor = async (id: string): Promise<void> => {
  try {
    await connection('Actor').delete().where('id', id);
  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
deleteActor('004');
```

c)

```
const avgSalary = async (gender: string): Promise<any> => {
  try {
    const result = await connection('Actor')
      .avg('salary as average')
      .where({ gender });
    console.log(Math.trunc(result[0].average));
    return result[0].average;
  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
avgSalary('female');
```

### Exercício 3

a)
Pq os parâmetros estão sendo passados no endereço e a função requere estes parâmetros
b)Caso positivo: está respondendo cód 200 e enviando os dados do ator

```
res.status(200).send(actor)
```

Caso negativo: reponde código 400 e envia a mensagem do erro

```
res.status(400).send({
  message: err.message,
});
```

c)

```
app.get('/Actor', async (req: Request, res: Response) => {
  try {
    console.log(req.query.gender as string);
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
//Para testar no navegador:
//http://localhost:3003/Actor?gender=female
```

### Exercício 4

a)

```
const updateSalary = async (id: string, salary: number): Promise<any> => {
  try {
    await connection('Actor')
      .update({
        salary: salary,
      })
      .where('id', id);
  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
app.post('/Actor', async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id as string, req.body.salary as number);
    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

b)

```
app.delete('/Actor/delete/:id', async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id as string);
    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 5

```
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  rating: number,
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      release_Date: releaseDate,
      rating,
    })
    .into('Movies');
};

app.post('/Movies/create', async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.rating,
    );

    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 6

```

```
