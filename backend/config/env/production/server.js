module.exports = ({ env }) => ({
  proxy: true,
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("https://dental-braces.onrender.com"), // Sets the public URL of the application.
  app: {
    keys: ["12333dlfshfhf", "fhizfhqhmfhmh"],
  },
});
