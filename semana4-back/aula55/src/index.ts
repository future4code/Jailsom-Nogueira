import knex from 'knex';
import express from 'express';
import dotenv from 'dotenv';
import { AddressInfo } from 'net';
import { IdGenerator } from './service/idGenerator';
import { UserDatabase } from './data/UserDatabase';

/* ------------------------------- */
dotenv.config();
/* ------------------------------- */
const app = express();
app.use(express.json());
/* ------------------------------- */
const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const idGenerator = new IdGenerator();
const id = idGenerator.generate();

const creatingUser = new UserDatabase();
creatingUser.createUser(`${id}`, 'jay@gmail.com', '123456');
