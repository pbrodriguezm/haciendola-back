import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productModel.create({ createProductDto });
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productModel.findByPk(id);
  }
  async update(
    id: number,
    updateProductDto: CreateProductDto,
  ): Promise<[number, Product[]]> {
    const [affectedCount, updatedProducts] = await this.productModel.update(
      updateProductDto,
      {
        where: {
          id,
        },
        returning: true,
      },
    );
    return [affectedCount, updatedProducts];
  }

  async remove(id: number): Promise<number> {
    const deletedRows = await this.productModel.destroy({
      where: {
        id,
      },
    });
    return deletedRows;
  }
}
