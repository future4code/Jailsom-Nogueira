import knex from 'knex';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { AddressInfo } from 'net';
import { getMaxListeners } from 'process';

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/user', testEndpoint);

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM User
    `);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//Exec 1
const createUser = async (name: string, nickname: string, email: string) => {
  await connection
    .insert({
      name,
      nickname,
      email,
    })
    .into('User');
};
app.post('/user', async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);

    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
// createUser('Raphaela', 'Rapha', 'rapha@gmail.com');

//Exec 2
const getUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM User WHERE id = '${id}'
    `);
    // console.log(result[0][0]);
    return result[0][0];
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
app.get('/user/id/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getUserById(id);

    res.status(200).send(actor);
    // console.log(id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
    console.log(err.message);
  }
});
// getUserById('1');

//Exec 3
const updateUser = async (
  id: string,
  name: string,
  nickname: string,
): Promise<any> => {
  try {
    await connection('User')
      .update({
        name,
        nickname,
      })
      .where('id', id);
  } catch (error) {
    console.log('Lascou ', error.message);
    return error.message;
  }
};
app.post('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    await updateUser(
      req.body.id as string,
      req.body.name as string,
      req.body.nickname as string,
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
// updateUser('2', 'Cristiano', 'Cris');

//Exec 4
const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string,
) => {
  await connection
    .insert({
      title,
      description,
      limitDate,
      creatorUserId,
    })
    .into('Task');
};
app.post('/task', async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.title,
      req.body.description,
      req.body.limitDate,
      req.body.creatorUserId,
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
// createTask('Estudar', 'Estudar SQL', '2020-12-20', '002');

//Exec 5
const getTaskById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Task WHERE id = '${id}'
    `);
    // console.log(result[0][0]);
    return result[0][0];
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
app.get('/task/id/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getTaskById(id);

    res.status(200).send(actor);
    console.log(id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
    console.log(err.message);
  }
});
