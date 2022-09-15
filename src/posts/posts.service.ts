import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { authorId: 1, id: 1, title: 'Lorem Ipsum', rating: 1 },
    { authorId: 1, id: 2, title: 'Foo', rating: 2 },
    { authorId: 2, id: 3, title: 'Bar', rating: 3 },
    { authorId: 2, id: 4, title: 'Lor', rating: 2 },
    { authorId: 3, id: 5, title: 'Hel', rating: 1 },
    { authorId: 3, id: 6, title: 'Llo', rating: 2 },
    { authorId: 4, id: 7, title: 'World', rating: 3 },
    { authorId: 4, id: 8, title: 'Hello', rating: 4 },
    { authorId: 5, id: 9, title: 'Wor', rating: 4 },
    { authorId: 5, id: 10, title: 'Lo Wo', rating: 3 },
    { authorId: 6, id: 11, title: 'O Wo', rating: 2 },
    { authorId: 6, id: 12, title: 'Fubar', rating: 1 },
    { authorId: 7, id: 13, title: 'One', rating: 2 },
    { authorId: 7, id: 14, title: 'Ten', rating: 3 },
    { authorId: 8, id: 15, title: 'Twenty', rating: 4 },
    { authorId: 8, id: 16, title: 'Goodbye', rating: 5 },
  ];

  findAllByAuthorId(authorId: number): Post[] {
    return this.posts.filter((post) => post.authorId === Number(authorId));
  }

  findOne(postId: number): Post {
    return this.posts.find((post) => post.id === postId);
  }

  findAll(): Post[] {
    return this.posts;
  }
}
