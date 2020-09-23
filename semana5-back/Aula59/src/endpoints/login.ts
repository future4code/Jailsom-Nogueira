import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { BaseDatabase } from '../data/BaseDatabase';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userBusiness = new UserBusiness();
    const token = await userBusiness.getUserByEmail(loginData);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  } finally {
    await BaseDatabase.destroyConnection();
  }
};
