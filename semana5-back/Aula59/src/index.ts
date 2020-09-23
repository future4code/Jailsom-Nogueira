import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import { signUp } from './endpoints/signUp';
import { login } from './endpoints/login';
import { getAllUsers } from './endpoints/getAllUsers';
import { deleteUser } from './endpoints/deleteUser';

dotenv.config();

const app = express();
app.use(express.json());

app.put('/signup', signUp);
app.post('/login', login);
app.get('/all', getAllUsers);
app.delete('/:id', deleteUser);

app.get('/teste', async (req: Request, res: Response) => {
  try {
    res.status(200).send('Oi, seu server está funcionando!');
  } catch (error) {
    res.status(400).send('ERRO');
  }
});

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
