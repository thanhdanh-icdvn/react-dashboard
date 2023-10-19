import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  @Get()
  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  @Get()
  findOne(id: number) {
    return this.prisma.article.findMany({ where: { published: true, id } });
  }

  @Put()
  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  @Delete()
  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
  @Get()
  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }
}
