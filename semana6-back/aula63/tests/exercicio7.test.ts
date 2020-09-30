import { PostDatabase } from '../src/data/PostDatabase';
import * as dotenv from 'dotenv';
import { BaseDatabase } from '../src/data/BaseDatabase';

dotenv.config();

describe('Testando o PostDatabase', () => {
  const postDatabase = new PostDatabase();
  test('Create Post', async () => {
    try {
      const post = {
        id: '1234',
        photo: 'https://picsum.photos/536/354',
        description: 'Conteúdo',
        createdAt: '2020-12-20',
        type: 'normal',
        userId: 'fc9af1f8-205e-469a-9d3b-c7045fbbf4ab',
      };

      await postDatabase.createPost(
        post.id,
        post.photo,
        post.description,
        post.createdAt,
        post.type,
        post.userId,
      );
      await postDatabase.createPost(
        post.id,
        post.photo,
        post.description,
        post.createdAt,
        post.type,
        post.userId,
      );
    } catch (err) {
      expect(err).not.toBe(undefined);
      expect(err.code).toContain('ER_DUP_ENTRY');
    }
  });
  afterAll(async () => {
    try {
      await postDatabase.deleteUser('1234');
      await BaseDatabase.destroyConnection();
    } catch (err) {
      console.log(err.message);
    }
    expect(BaseDatabase).toBe(null);
  });
});
