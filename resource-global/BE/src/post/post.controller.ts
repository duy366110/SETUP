import {
  Controller,
  Get,
  Put,
  Delete,
  Body,
  Query,
  Response,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';

@Controller('posts')
export class PostController {
  @Get()
  getPosts(
    @Query('filter') filter: string,
    @Query('range') range: string,
    @Query('sort') sort: string,
    @Response() res: ExpressResponse,
  ) {
    const parsedFilter = JSON.parse(decodeURIComponent(filter));
    const parsedRange = JSON.parse(decodeURIComponent(range));
    const parsedSort = JSON.parse(decodeURIComponent(sort));

    console.log('Filter:', parsedFilter);
    console.log('Range:', parsedRange);
    console.log('Sort:', parsedSort);

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

    const page = parsedRange[0] || 0;
    const limit = parsedRange[1] - parsedRange[0] + 1 || allPosts.length;
    const paginatedData = allPosts.slice(page, page + limit);

    const totalItems = allPosts.length;
    const totalPages = Math.ceil(totalItems / limit);

    const responseData = {
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    };

    const totalResults = responseData.data.length;
    res.setHeader(
      'Content-Range',
      `posts 0-${totalResults - 1}/${totalResults}`,
    );

    res.status(200).json([...paginatedData]);
  }

  @Get(':id')
  async getPost(
    @Param('id') id: string,
  ): Promise<{ id: string; title: string; content: string }> {
    try {
      const mockPost = {
        id,
        title: 'Sample Post',
        content: 'This is the content of the post.',
      };

      if (!mockPost) {
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
      }

      return mockPost;
    } catch (error) {
      throw new HttpException(
        error.message || 'Unable to fetch the post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Put(':id')
    async updatePost(
        @Param('id') id: string,
        @Body() updateData: { title?: string; content?: string },
        @Response() res: ExpressResponse,
    ): Promise<any> {
        try {
            // Giả lập cập nhật dữ liệu (thay bằng service gọi DB)
            const updatedPost = {
                id,
                title: updateData.title || 'Default Title',
                content: updateData.content || 'Default Content',
            };

            return res.status(200).json(updatedPost)
        } catch (error) {
            throw new HttpException(
                error.message || 'Unable to update the post',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<{ message: string }> {
    try {
      console.log(`Deleting post with ID: ${id}`);
      return { message: `Post with ID ${id} deleted successfully` };
    } catch (error) {
      throw new HttpException(
        'Unable to delete the post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
