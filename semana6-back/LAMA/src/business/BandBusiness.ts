import { IdGenerator } from '../services/IdGenerator';
import { BandInputDTO, GetBandInputDTO } from '../model/Band';
import { BandDatabase } from '../data/BandDatabase';
import { Authenticator } from '../services/Authenticator';
import { InvalidParameterError } from '../error/InvalidParameterError';
import { Unauthorized } from '../error/Unauthorized';

export class BandBusiness {
  public async getBandDetails(getBand: GetBandInputDTO) {
    if (!getBand.id && !getBand.name) {
      throw new Error('Escolha um id ou nome');
    }
    !getBand.name && (getBand.name = '');

    !getBand.id && (getBand.id = '');

    const result = await new BandDatabase().getBandDetails(getBand);

    if (!result) {
      throw new Error('Nenhuma banda encontrada');
    }

    return result;
  }

  async createBand(band: BandInputDTO) {
    const authenticator = new Authenticator();
    const authenticationData = authenticator.verify(band.token);
    const userRole = authenticationData.role;

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    if (userRole !== 'ADMIN') {
      throw new Unauthorized(
        'O usuário precisa ter direitos de administrador para criar bandas!',
      );
    }

    if (
      !band.name ||
      !band.musicGenre ||
      !band.musicGenre ||
      !band.responsible
    ) {
      throw new InvalidParameterError('Um ou mais parâmetros faltando');
    }

    const bandDatabase = new BandDatabase();
    const bandCreated = await bandDatabase.createBand(
      id,
      band.name,
      band.musicGenre,
      band.responsible,
    );

    return bandCreated;
  }
}
