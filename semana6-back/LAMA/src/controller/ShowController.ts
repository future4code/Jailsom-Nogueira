import { Request, Response } from 'express';
import { ShowBusiness } from '../business/ShowBusiness';
import { BaseDatabase } from '../data/BaseDatabase';
import { ShowInputDTO } from '../model/Show';

export class ShowController {
  public getShowByDay = async (req: Request, res: Response) => {
    try {
      const showBusiness = new ShowBusiness();
      const bands = await showBusiness.getShowByDay(req.body.weekDay);

      res.status(200).send(bands);
    } catch (e) {
      res.status(400).send({
        message: e.message,
      });
    }

    await BaseDatabase.destroyConnection();
  };

  async createShow(req: Request, res: Response) {
    try {
      const input: ShowInputDTO = {
        token: req.headers.authorization as string,
        weekDay: req.body.weekDay,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        bandId: req.body.bandId,
      };

      const showBusiness = new ShowBusiness();
      await showBusiness.createShow(input);

      res.status(200).send({
        message: `Show da banda id: ${input.bandId}, marcado para ${input.weekDay}. Começas as ${input.startTime}hrs e termina as ${input.endTime}hrs`,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
