import { Sequelize } from 'sequelize-typescript';
import { Product } from '../product/models/product.model';
import { User } from '../user/models/user.model';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import * as path from 'path';
import * as ExcelJS from 'exceljs';

async function seed() {
  const excelFilePath = path.join(__dirname, 'products.xlsx');
  const workbook = new ExcelJS.Workbook();
  const productsToInsert = [];
  try {
    await workbook.xlsx.readFile(excelFilePath);
    const worksheet = workbook.getWorksheet('Hoja1');
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;

      const [
        _,
        handle,
        title,
        description,
        sku,
        grams,
        stock,
        price,
        comparePrice,
        barcode,
      ] = row.values as any[];

      const product = {
        handle,
        title,
        description,
        sku,
        grams,
        stock,
        price,
        compare_price: comparePrice,
        barcode,
      };
      productsToInsert.push(product);
    });

    const app = await NestFactory.createApplicationContext(AppModule);

    const sequelize = app.get(Sequelize);

    // Sincroniza los modelos con la base de datos
    await sequelize.sync({ force: true });

    await User.bulkCreate([
      {
        username: 'admin',
        password:
          '$2a$10$HmzDi5Mm2Wh98aZDpwlqxO/2mes2ea8.3P7EJ5m8xPJSq9K6owUBO', //admin
        name: 'User 1',
        email: 'user1@example.com',
        number: '51987947361',
      },
      {
        username: 'user2',
        password: 'password2',
        name: 'User 2',
        email: 'user2@example.com',
      },
    ]);

    // // Crea algunos datos de prueba para la tabla Productos
    await Product.bulkCreate(productsToInsert);
    await app.close();
  } catch (error) {
    console.error('Error reading Excel file:', error);
  }
}

seed();
