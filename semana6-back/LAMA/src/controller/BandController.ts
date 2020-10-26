import { Request, Response } from 'express';
import { BandInputDTO, GetBandInputDTO } from '../model/Band';
import { BandBusiness } from '../business/BandBusiness';
import { BaseDatabase } from '../data/BaseDatabase';

export class BandController {
  public getBandDetails = async (req: Request, res: Response) => {
    try {
      const getBand: GetBandInputDTO = {
        id: req.query.id as string,
        name: req.query.name as string,
      };

      const result = await new BandBusiness().getBandDetails(getBand);

      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }

    await BaseDatabase.destroyConnection();
  };

  async createBand(req: Request, res: Response) {
    try {
      const input: BandInputDTO = {
        token: req.headers.authorization as string,
        name: req.body.name,
        musicGenre: req.body.musicGenre,
        responsible: req.body.responsible,
      };

      const bandBusiness = new BandBusiness();
      await bandBusiness.createBand(input);

      res.status(200).send({
        message: `Banda ${input.name}, Gênero ${input.musicGenre} criada sob a responsabilidade de ${input.responsible}`,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
