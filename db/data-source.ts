import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),//5432,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    entities: ['dist/**/*.entity.js'], // here we have added user enitity in entities array
    database: 'MusicPlayer',
    logging: true,
    migrations: ["dist/db/migrations/*.js"]
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;