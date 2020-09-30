import { BaseDatabase } from './BaseDatabase';
import dotenv from 'dotenv';

dotenv.config();
import { Post } from '../model/Post';
import dayjs from 'dayjs';

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = 'posts';

  public async createPost(
    PostId: string,
    photo: string,
    description: string,
    createdAt: string,
    type: string,
    userId: string,
  ): Promise<void> {
    await this.getConnection()
      .insert({
        post_id: PostId,
        post_photo: photo,
        post_description: description,
        post_createdAt: createdAt,
        post_type: type,
        post_userId: userId,
      })
      .into(PostDatabase.TABLE_NAME);
  }

  public async deleteUser(id: string): Promise<any> {
    await this.getConnection()
      .delete()
      .from(PostDatabase.TABLE_NAME)
      .where({ post_id: id });
  }

  public async getPostById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(PostDatabase.TABLE_NAME)
      .where({ post_id: id });
    const postFromDb = {
      post_id: result[0].post_id,
      post_photo: result[0].post_photo,
      post_description: result[0].post_description,
      post_createdAt: dayjs(result[0].post_createdAt).format('YYYY-MM-DD'),
      post_type: result[0].post_type,
      post_userId: result[0].post_userId,
    };
    return postFromDb;
  }
}
