import { IdGenerator } from '../services/IdGenerator';
import { ShowDatabase } from '../data/ShowDatabase';
import { Authenticator } from '../services/Authenticator';
import { ShowInputDTO } from '../model/Show';
import { InvalidParameterError } from '../error/InvalidParameterError';
import { Unauthorized } from '../error/Unauthorized';
import { Forbidden } from '../error/Forbidden';

export class ShowBusiness {
  async getShowByDay(weekDay: string) {
    const showDatabase = new ShowDatabase();

    if (weekDay !== 'sexta' && weekDay !== 'sabado' && weekDay !== 'domingo') {
      throw new Error('Dia inválido');
    }

    const showsThatDay = await showDatabase.getShowByDay(weekDay);
    const bands = showsThatDay.map((band: any) => ({
      name: band.name,
      musicGenre: band.music_genre,
    }));
    if (!bands.length) {
      throw new Error('Nenhum show para este dia');
    }

    return bands;
  }

  async createShow(show: ShowInputDTO) {
    const showDatabase = new ShowDatabase();

    const authenticator = new Authenticator();
    const authenticationData = authenticator.verify(show.token);
    const userRole = authenticationData.role;

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    if (!show.weekDay || !show.startTime || !show.endTime || !show.bandId) {
      throw new InvalidParameterError('Um ou mais parâmetros faltando');
    }

    if (userRole !== 'ADMIN') {
      throw new Unauthorized(
        'O usuário precisa ter direitos de administrador para criar bandas!',
      );
    }

    if (
      show.weekDay !== 'sexta' &&
      show.weekDay !== 'sabado' &&
      show.weekDay !== 'domingo'
    ) {
      throw new InvalidParameterError('Dia inválido');
    }

    if (Number(show.startTime) > Number(show.endTime)) {
      throw new InvalidParameterError(
        'O horário de inicio não pode ser maior do que o horário de término',
      );
    }

    if (Number(show.startTime) === Number(show.endTime)) {
      throw new InvalidParameterError('Os horários não podem ser iguais');
    }

    if (show.startTime.length < 2 || show.startTime.length > 2) {
      throw new InvalidParameterError('Horário de inicio inválido');
    }

    if (show.endTime.length < 2 || show.endTime.length > 2) {
      throw new InvalidParameterError('Horário de término inválido');
    }

    if (show.startTime < '08' || show.startTime > '23') {
      throw new InvalidParameterError('Horário de inicio inválido');
    }

    if (show.endTime < '09' || show.endTime > '24') {
      throw new InvalidParameterError('Horário de término inválido');
    }

    const checkingShows = await showDatabase.checkShows(
      show.weekDay,
      show.startTime,
    );
    if (checkingShows) {
      throw new Forbidden('Já existe um show para este horário');
    }

    const showCreated = await showDatabase.createShow(
      id,
      show.weekDay,
      show.startTime,
      show.endTime,
      show.bandId,
    );

    return showCreated;
  }
}
