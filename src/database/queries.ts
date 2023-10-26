import {
  DEV_POSTGRES_USER,
  DEV_POSTGRES_HOST,
  DEV_POSTGRES_DB,
  DEV_POSTGRES_PASSWORD,
  DEV_POSTGRES_PORT,
} from 'react-native-dotenv';

const Pool = require('pg').Pool;
const pool = new Pool({
  user: DEV_POSTGRES_USER,
  host: DEV_POSTGRES_HOST,
  database: DEV_POSTGRES_DB,
  password: DEV_POSTGRES_PASSWORD,
  port: DEV_POSTGRES_PORT,
});

const login = (username: string, password: string) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT * FROM merchants ORDER BY id ASC',
      (error: any, results: { rows: unknown }) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
// const createMerchant = body => {
//   return new Promise(function (resolve, reject) {
//     const { name, email } = body;
//     pool.query(
//       'INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *',
//       [name, email],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(`A new merchant has been added added: ${results.rows[0]}`);
//       }
//     );
//   });
// };
// const deleteMerchant = () => {
//   return new Promise(function (resolve, reject) {
//     const id = parseInt(request.params.id);
//     pool.query(
//       'DELETE FROM merchants WHERE id = $1',
//       [id],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(`Merchant deleted with ID: ${id}`);
//       }
//     );
//   });
// };

// module.exports = {
//   getMerchants,
//   createMerchant,
//   deleteMerchant,
// };
