import { BaseDatabase } from './BaseDatabase';

export class ShowDatabase extends BaseDatabase {
  private static TABLE_NAME = 'SHOWS';

  public async checkShows(weekDay: string, startTime: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(ShowDatabase.TABLE_NAME)
      .where({
        week_day: weekDay,
        start_Time: startTime,
      });
    return result[0];
  }

  public async getShowByDay(weekDay: string): Promise<any> {
    const result = await this.getConnection().raw(`
      SELECT BANDAS.id, name, music_genre
      FROM BANDAS
      JOIN SHOWS
      ON SHOWS.band_id = BANDAS.id
      WHERE SHOWS.week_day = '${weekDay}' 
      ORDER BY SHOWS.start_time ASC;
    `);
    return result[0];
  }

  public async createShow(
    id: string,
    weekDay: string,
    startTime: string,
    endTime: string,
    bandId: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          week_day: weekDay,
          start_time: startTime,
          end_time: endTime,
          band_id: bandId,
        })
        .into(ShowDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
