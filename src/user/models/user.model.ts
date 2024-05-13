import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class User extends Model {
  @PrimaryKey
  @Column
  username: string;

  @Column
  password: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  number: string;

  @Column({ defaultValue: new Date() })
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;
}
