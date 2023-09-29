const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(
    env(
      "postgres://database_smiles_user:ZiZiWvadsVMAUDhmD6Tu99J44rEdj0t7@dpg-ckbjk8msmu8c73b1dp2g-a.oregon-postgres.render.com/database_smiles"
    )
  );

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  };
};
