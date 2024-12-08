import { Controller, Get, Query, Response  } from '@nestjs/common';
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
    // Chuyển đổi các tham số JSON từ chuỗi sang đối tượng
    const parsedFilter = JSON.parse(decodeURIComponent(filter));
    const parsedRange = JSON.parse(decodeURIComponent(range));
    const parsedSort = JSON.parse(decodeURIComponent(sort));

    // In ra để kiểm tra hoặc xử lý theo nhu cầu
    console.log('Filter:', parsedFilter);
    console.log('Range:', parsedRange);
    console.log('Sort:', parsedSort);

    // Dữ liệu giả lập trả về
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

    // Thực hiện phân trang
    const page = parsedRange[0] || 0;
    const limit = parsedRange[1] - parsedRange[0] + 1 || allPosts.length;
    const paginatedData = allPosts.slice(page, page + limit);

    // Tính toán thông tin phân trang
    const totalItems = allPosts.length;
    const totalPages = Math.ceil(totalItems / limit);

    const responseData = {
      data: [],
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    };

    const totalResults = responseData.data.length;
    res.setHeader('Content-Range', `posts 0-${totalResults - 1}/${totalResults}`);

    // Gửi phản hồi
    res.status(200).json(responseData);
  }
}
