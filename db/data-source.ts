import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,//5432,
    password: 'Password1',
    username: 'postgres',
    entities: ['dist/**/*.entity.js'], // here we have added user enitity in entities array
    database: 'MusicPlayer',
    logging: true,
    migrations: ["dist/db/migrations/*.js"]
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
