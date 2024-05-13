import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product | null> {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<[number, Product[]]> {
    return this.productService.update(+id, createProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.productService.remove(+id);
  }
}
