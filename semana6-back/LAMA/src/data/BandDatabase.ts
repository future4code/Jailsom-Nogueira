import { GetBandInputDTO } from '../model/Band';
import { BaseDatabase } from './BaseDatabase';

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = 'BANDAS';

  public async createBand(
    id: string,
    name: string,
    musicGenre: string,
    responsible: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre: musicGenre,
          responsible,
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandDetails(getBand: GetBandInputDTO): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(BandDatabase.TABLE_NAME)
      .where({ id: getBand.id })
      .or.where({ name: getBand.name });

    return result[0];
  }
}
