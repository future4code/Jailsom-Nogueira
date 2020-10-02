import { UserInputDTO, LoginInputDTO } from '../model/User';
import { UserDatabase } from '../data/UserDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';
import { InvalidParameterError } from '../error/InvalidParameterError';

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator,
  ) {}

  async createUser(user: UserInputDTO) {
    const id = this.idGenerator.generate();

    if (!user.email || !user.name || !user.password || !user.role) {
      throw new InvalidParameterError('Um ou mais parâmetros faltando');
    }

    if (user.email.indexOf('@') === -1) {
      throw new InvalidParameterError('Formato de email inválido');
    }

    if (user.password.length < 6) {
      throw new InvalidParameterError('Formato de senha inválida');
    }

    if (user.role !== 'ADMIN' && user.role !== 'NORMAL') {
      throw new InvalidParameterError(
        'Formato inválido, escolha entre "ADMIN" ou "NORMAL"',
      );
    }

    const hashPassword = await this.hashManager.hash(user.password);

    await this.userDatabase.createUser(
      id,
      user.email,
      user.name,
      hashPassword,
      user.role,
    );

    const accessToken = this.authenticator.generateToken({
      id,
      role: user.role,
    });

    return accessToken;
  }

  async getUserByEmail(user: LoginInputDTO) {
    if (!user.email || !user.password) {
      throw new InvalidParameterError('Um ou mais parâmetros faltando');
    }

    if (user.email.indexOf('@') === -1) {
      throw new InvalidParameterError('Formato de email inválido');
    }

    if (user.password.length < 6) {
      throw new InvalidParameterError('Formato de senha inválida');
    }

    const userFromDB = await this.userDatabase.getUserByEmail(user.email);

    const hashCompare = await this.hashManager.compare(
      user.password,
      userFromDB.getPassword(),
    );

    if (!hashCompare) {
      throw new Error('Invalid Password!');
    }

    const accessToken = this.authenticator.generateToken({
      id: userFromDB.getId(),
      role: userFromDB.getRole(),
    });

    return accessToken;
  }
}
