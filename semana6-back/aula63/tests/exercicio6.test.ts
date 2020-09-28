import { PostDatabase } from '../src/data/PostDatabase';
import * as dotenv from 'dotenv';
import { BaseDatabase } from '../src/data/BaseDatabase';

dotenv.config();

describe('Testando o PostDatabase', () => {
  const postDatabase = new PostDatabase();
  test('Create Post', async () => {
    const post = {
      id: '123',
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
    const postFromDb = await postDatabase.getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      post_id: '123',
      post_photo: 'https://picsum.photos/536/354',
      post_description: 'Conteúdo',
      post_createdAt: '2020-12-20',
      post_type: 'normal',
      post_userId: 'fc9af1f8-205e-469a-9d3b-c7045fbbf4ab',
    });
  });
  afterAll(async () => {
    await postDatabase.deleteUser('123');
    await BaseDatabase.destroyConnection();
  });
});
