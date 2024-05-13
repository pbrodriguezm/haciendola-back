export class CreateProductDto {
  handle: string;
  title: string;
  description: string;
  sku: string;
  grams: number;
  stock: number;
  price: number;
  compare_price: number;
  barcode: bigint;
  createdAt?: Date;
  updatedAt?: Date;
}
