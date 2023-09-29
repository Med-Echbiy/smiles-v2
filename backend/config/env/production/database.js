const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(
    "postgres://database_smiles_user:ZiZiWvadsVMAUDhmD6Tu99J44rEdj0t7@dpg-ckbjk8msmu8c73b1dp2g-a.oregon-postgres.render.com/database_smiles"
  );

  return {
    connection: {
      client: "postgres",
      connection: {
        host: "dpg-ckbjk8msmu8c73b1dp2g-a",
        port: 5432,
        database: "database_smiles",
        user: "database_smiles_user",
        password: "ZiZiWvadsVMAUDhmD6Tu99J44rEdj0t7",
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  };
};
