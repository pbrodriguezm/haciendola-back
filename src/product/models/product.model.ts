import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'Product' })
export class Product extends Model {
  @Column
  handle: string;

  @Column
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @Column
  sku: string;

  @Column
  grams: number;

  @Column
  stock: number;

  @Column
  price: number;

  @Column
  compare_price: number;

  @Column
  barcode: bigint;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
