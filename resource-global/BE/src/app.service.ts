import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      items: [
        { id: 1, title: 'Post 1', status: 'published' },
        { id: 2, title: 'Post 2', status: 'draft' },
      ],
      meta: {
        total: 50,
      },
    };
  }
}
