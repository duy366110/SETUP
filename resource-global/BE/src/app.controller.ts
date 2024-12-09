import { Controller, Get, Query, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  handleRequest(
    @Query('filter') filter: string,
    @Query('range') range: string,
    @Query('sort') sort: string,
    @Response() res: ExpressResponse,
  ) {
    const parsedFilter = JSON.parse(filter);
    const parsedRange = JSON.parse(range);
    const parsedSort = JSON.parse(sort);

    const allPosts = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 7' },
      { id: 8, name: 'Item 8' },
      { id: 9, name: 'Item 9' },
      { id: 10, name: 'Item 10' },
    ];

    const start = parsedRange[0] || 0;
    const end = parsedRange[1] || allPosts.length - 1;
    const limit = end - start + 1;
    const paginatedData = allPosts.slice(start, start + limit);

    const totalItems = allPosts.length;

    res.setHeader('Content-Range', `items ${start}-${start + limit - 1}/${totalItems}`);
    res.status(200).json([...paginatedData]);
  }
}
