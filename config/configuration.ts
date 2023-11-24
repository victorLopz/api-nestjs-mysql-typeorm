export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: process.env.DB_TYPE as 'mysql' | 'mariadb',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
